import ObjectManager from "../graphql/ObjectManager"; // Schema for GraphQL server

// Guarantee that all object registrations and schema definitions are executed

console.log('Initializing schema')
ObjectManager.initializePersisters(true)
