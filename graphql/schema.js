/* @flow weak */

import {GraphQLSchema} from "graphql";
import {maskErrors} from "./graphQLError";
import QueryType from "./type/QueryType";
import MutationType from "./type/MutationType";

// graphql types


// export the entire compiled schema which specifies
// how to query and mutate all of our types
const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
})

maskErrors(schema)

export default schema
