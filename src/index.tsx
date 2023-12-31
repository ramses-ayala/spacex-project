import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
//import reportWebVitals from './reportWebVitals';

import './index.css';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


const client = new ApolloClient({
  //uri: 'https://main--spacex-l4uc6p.apollographos.net/graphql',
  uri: 'https://spacex-production.up.railway.app',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
