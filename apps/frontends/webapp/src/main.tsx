import { StrictMode } from 'react';
import { Provider, createClient } from 'urql';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

import { cacheExchange, fetchExchange } from '@urql/core';
const client = createClient({
  url: 'http://localhost:4000/graphql', // Update this to your GraphQL endpoint
  exchanges: [cacheExchange, fetchExchange],
});

root.render(
  <StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </StrictMode>
);
