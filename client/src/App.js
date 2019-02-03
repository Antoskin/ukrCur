import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import CurentCurency from './components/CurentCurency';

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
          </div>
        </ApolloProvider>
      </>
    );
  }
}

export default App;
