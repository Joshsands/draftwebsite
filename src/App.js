import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Estimator from './pages/Estimator';
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';
import Login from './pages/login';
import Navigation from './components/Nav';

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
    <Router>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/Estimator" element={<Estimator/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
