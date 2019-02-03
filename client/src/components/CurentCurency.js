import React, { Component } from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
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
  static propTypes = {
    money: PropTypes.arrayOf(PropTypes.shape({
      ccy: PropTypes.string,
      sale: PropTypes.string,
    }))
  };

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
