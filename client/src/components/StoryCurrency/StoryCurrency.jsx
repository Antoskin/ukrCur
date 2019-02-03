import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ModernDatepicker from 'react-modern-datepicker';
import moment from 'moment';

const LIST_Q = gql`
  query StoryMoney($date: String!) {
    storyMoney(date: $date) {
      baseCurrencyLit
      date
      bank
      exchangeRate {
        saleRateNB
        currency
      }
    }
  }
`;

class StoryCurrency extends Component {
  static defaultProps = {
      storyMoney: PropTypes.shape({
        date: PropTypes.string,
        baseCurrencyLit: PropTypes.string,
        exchangeRate: PropTypes.arrayOf(PropTypes.shape({
          saleRateNB: PropTypes.string,
          currency: PropTypes.string,
        }))
      }).isRequired
  };

  state = {
    startDate: moment()
  };

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    const { startDate } = this.state;

    return (
      <div>
        <ModernDatepicker
          date={this.state.startDate}
          format={'DD.MM.YYYY'}
          showBorder
          onChange={(date) => this.handleChange(date)}
          placeholder={'Select a date'}
        />
        <Query query={LIST_Q} variables={{ date: startDate }} >
          {({ loading, error, data }) => {

            if (loading) return 'loading...';
            if (error) return `Choose date`;

            const filterList = data.storyMoney.exchangeRate.filter( valut =>
              valut.currency === 'EUR' || valut.currency === 'USD'
            );

            return (
              <ul>
                { filterList.map( (item, ind) => (
                  <li key={ind} className="list-group-item">{item.currency} = {item.saleRateNB}</li>
                ))}
              </ul>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default StoryCurrency;
