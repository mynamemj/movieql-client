import React, { Component } from 'react';
import client from './apolloClient';
import {ApolloProvider} from 'react-apollo';
import Home from './Home'
import Details from './Details'
//Routing
import {HashRouter as Router,Route} from 'react-router-dom';


class App extends Component {
  
  render() {
    
    return (
      <ApolloProvider client={client}>
        <Router>
            <Route exact={true} path={"/"} component={Home}/>
            <Route path={"/details/:movidId"} component={Details}/>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
