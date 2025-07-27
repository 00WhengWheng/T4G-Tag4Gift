import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
const AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;
const AUTH0_REDIRECT_URI = process.env.REACT_APP_AUTH0_REDIRECT_URI;
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


const apolloClient = new ApolloClient({
  uri: `${BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
});

type UserInfo = {
  id: string;
  name: string;
  email: string;
};

const LoginPage: React.FC = () => {
  const [userInfo, setUserInfo] = React.useState<UserInfo | null>(null);

  React.useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      const accessToken = params.get('access_token');
      if (accessToken) {
        localStorage.setItem('auth_token', accessToken);
        const authedClient = new ApolloClient({
          uri: `${BACKEND_URL}/graphql`,
          cache: new InMemoryCache(),
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        authedClient
          .query({
            query: gql`
              query Me {
                me {
                  id
                  name
                  email
                }
              }
            `,
          })
          .then((result: { data: { me: UserInfo } }) => {
            if (result?.data?.me) {
              setUserInfo(result.data.me);
              console.log('User info:', result.data.me);
            }
          })
          .catch((err: Error) => {
            console.error('GraphQL error:', err);
          });
      }
    }
  }, []);

  const handleLogin = () => {
    const url = `https://${AUTH0_DOMAIN}/authorize?response_type=token&client_id=${AUTH0_CLIENT_ID}&redirect_uri=${AUTH0_REDIRECT_URI}&scope=openid profile email`;
    window.location.href = url;
  };

  return (
    <ApolloProvider client={apolloClient}>
      <div className="login-page">
        <h2>Login</h2>
        <button onClick={handleLogin}>Login with Auth0</button>
        <div style={{ marginTop: 32 }}>
          <a href="/auth/facebook">Login with Facebook</a>
          <br />
          <a href="/auth/instagram">Login with Instagram</a>
        </div>
        {userInfo && (
          <div style={{ marginTop: 32 }}>
            <h3>Welcome, {userInfo.name || userInfo.email}!</h3>
            <p>User ID: {userInfo.id}</p>
            <p>Email: {userInfo.email}</p>
          </div>
        )}
      </div>
    </ApolloProvider>
  );
};

export default LoginPage;
