import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import CurentCurency from './components/CurentCurency';
import StoryCurrency from './components/StoryCurrency';

const client = new ApolloClient({
  uri: 'http://localhost:5500/graphql',
});


class App extends Component {
  render() {
    return (
      <>
        <ApolloProvider client={client} >
          <div className="App container">
              <CurentCurency />
              <StoryCurrency />
          </div>
        </ApolloProvider>
      </>
    );
  }
}

export default App;
