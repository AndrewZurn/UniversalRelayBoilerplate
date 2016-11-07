/* @flow weak */
/* eslint react/prop-types: 0 */

import Helmet from "react-helmet";
import React from "react";


export default class ChromeHelmet extends React.Component {
  render() {
    return (
      <Helmet
        title="SPAC Fusion Editor"
        meta={ [
          { name : "description", content: "Boilerplate, React (isomorphic, Material-UI), Relay, GraphQL, JWT, Node.js, Apache Cassandra" },
        ] }
      />
    )
  }
}
