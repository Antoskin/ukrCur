import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import CurentCurency from './components/CurentCurency';
import StoryCurrency from './components/StoryCurrency';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, SideNav } from './components/Template';

const client = new ApolloClient({
  uri: 'http://localhost:5500/graphql',
});


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container-fluid">
          <Router>
            <div className="row mt-5">
              <SideNav />
              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <ApolloProvider client={client}>
                      <>
                        <Route exact path="/" component={CurentCurency}/>
                        <Route path="/find" component={StoryCurrency}/>
                      </>
                    </ApolloProvider>
              </main>
            </div>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
