import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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

    <div>

<Estimator />

    {/* // <ApolloProvider client={client}>
    // <Router>
    //     <div>
    //       <Navigation />
    //       <Switch>
    //         <Route exact path="/" component={Home} />
    //         <Route exact path="/shop" component={Shop} />
    //         <Route exact path="/estimator" component={Estimator} />
    //         <Route exact path="/service" component={Service} />
    //         <Route exact path="/portfolio" component={Portfolio} />
    //         <Route exact path="/login" component={Login} />
    //       </Switch>
    //     </div>
    // </Router>
    // </ApolloProvider> */}
    </div>
  );
}

export default App;
