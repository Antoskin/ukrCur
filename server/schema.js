const axios = require('axios');
const {
  GraphQLInt,
  GraphQLBoolean,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
} = require('graphql');

const MoneyType = new GraphQLObjectType({
  name: 'Money',
  fields: () => ({
    ccy: { type: GraphQLString },
    buy: { type: GraphQLString },
    sale: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    money: {
      type: new GraphQLList(MoneyType),
      resolve( parent, child ) {
        return axios
          .get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
          .then( res => res.data )
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
