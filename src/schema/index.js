/**
 * Dependencies
 */
const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { SampleQueries, SampleMutations, SampleSubscriptions } = require('./Sample/Sample.resolver');

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    description: 'Queries supported in ALCT API',
    fields: () => ({
      ...SampleQueries,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutations',
    description: 'Mutations supported in ALCT API',
    fields: () => ({
      ...SampleMutations,
    }),
  }),
  subscription: new GraphQLObjectType({
    name: 'SubScriptions',
    description: 'Subscriptions supported in ALCT API',
    fields: () => ({
      ...SampleSubscriptions,
    })
  })
});