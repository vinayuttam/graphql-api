const { GraphQLError, GraphQLString, GraphQLBoolean, GraphQLNonNull } = require('graphql');
const { GraphQLUpload } = require('apollo-server');
const { pubsub } = require('../../pubsub');

const { SampleType } = require('./Sample.type');
const TOPIC = 'SEND';

const SampleQueries = {
  hello: {
    type: SampleType,
    resolve: () => {
      pubsub.publish(TOPIC, { text: 'Hello from GraphQL SubScription' });
      return { text: 'Hello from GraphQL Query' }
    },
  },
};

const SampleMutations = {
  hello: {
    type: SampleType,
    resolve: () => ({ text: 'Hello from GraphQL Mutation' }),
  },
};

const SampleSubscriptions = {
  subscribeHello: {
    type: SampleType,
    subscribe: () => pubsub.asyncIterator(TOPIC),
    resolve: source => source,
  }
}
module.exports = { SampleQueries, SampleMutations, SampleSubscriptions };