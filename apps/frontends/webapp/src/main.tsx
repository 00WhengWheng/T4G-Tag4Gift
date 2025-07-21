import { StrictMode } from 'react';
import { Provider, createClient, cacheExchange, fetchExchange } from 'urql';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import  './styles.css';

const client = createClient({
  url: 'http://localhost:3000/api/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </StrictMode>
);
