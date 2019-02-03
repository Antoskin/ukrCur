import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const QRY = gql`
  {
    money {
      ccy
      buy
      sale
    }
  }
`;

class CurentCurency extends Component {
  render() {
    return (
      <Query query={QRY}>
        {({ loading, error, data }) => {
          if (loading) return <p>loading...</p>;

          return (
            <ul className="list-group">
              {
                data.money.map( (i, id) => (
                  <li className="list-group-item" key={id}> { i.ccy } - { i.sale } </li>
                ) )
              }
            </ul>
          )

        }}
      </Query>
    );
  }
}

export default CurentCurency;
