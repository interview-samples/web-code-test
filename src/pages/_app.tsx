import { useCallback } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head'

import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import {createGlobalStyle, ThemeProvider} from 'styled-components';

import Theme from '../theme/index';

const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box };
  html { font-size: 62.5% };
  body {
    background-color: #F5F8FA;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
    line-height: 2.1rem;
    padding: 40px;

    @media (min-width: 800px) {      
      padding: 165px 40px;
    }
  }
  h1, h2 { font-size: inherit; font-weight: normal; }
`;

let apolloClient: ApolloClient<any>;

function MyApp({ Component, pageProps }: AppProps) {
  const createApolloClient = useCallback(() => {
    const httpLink = createHttpLink({
      uri: 'https://graphql.contentful.com/content/v1/spaces/jgxvzzx7ps77',
    });

    const authLink = setContext((_, { headers }) => ({
      headers: {
        ...headers,
        authorization: 'Bearer AEf7QMYxPL9rGzq0iYw8vNWzbRvGEhLrtPXHYWYYE_I',
      }
    }));

    const apolloClient = new ApolloClient({
      cache: new InMemoryCache(),
      link: authLink.concat(httpLink),
      ssrMode: typeof window === 'undefined',
    });

    return apolloClient;
  }, []);

  let client = apolloClient ?? createApolloClient();

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
        </Head>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp
