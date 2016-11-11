/* @flow weak */

import React from "react";
import {createRoutes, IndexRoute, Route} from "react-router";
import Relay from "react-relay";
import Chrome from "../../webapp/components/Chrome";
import HomeScreen from "./components/HomeScreen";

export const queries = {
  Viewer: () => Relay.QL`query { Viewer }`,
}

export default createRoutes(
  <Route path="/" component={Chrome} queries={queries}>

    <IndexRoute component={HomeScreen} queries={queries}/>

  </Route>
)
