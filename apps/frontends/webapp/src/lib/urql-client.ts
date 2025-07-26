import { createClient, cacheExchange, fetchExchange } from 'urql';

export const client = createClient({
  url: import.meta.env.VITE_GRAPHQL_URL || 'http://localhost:3000/graphql',
  exchanges: [cacheExchange, fetchExchange],
});
