const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const SampleType = new GraphQLObjectType({
  name: 'SampleType',
  description: 'SampleType fields',
  fields: () => ({
    text: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Text field',
    },
  }),
});

module.exports = {
  SampleType,
};