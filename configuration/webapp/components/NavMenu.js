/* @flow weak */
/* eslint react/prop-types: 0 */

import React from "react";
import Relay from "react-relay";
import {List, ListItem, makeSelectable} from "material-ui/List";

const SelectableList = makeSelectable(List)

class NavMenu extends React.Component {
  render() {
    let nestedItems_Misc = [
      <ListItem primaryText="Home" value="/"/>,
      <ListItem primaryText="Compendium" value="/compendium"/>,
    ]
    if (!this.props.Viewer.User_IsAnonymous) {
      nestedItems_Misc.push(<ListItem primaryText="User Profile" value="/user"/>)
      nestedItems_Misc.push(<ListItem primaryText="Force Login" value="/force_login"/>)
    }

    return (
      <SelectableList
        value={ this.props.value }
        onChange={ this.props.onChange }
      >

        <ListItem
          primaryText="Schedule"
          primaryTogglesNestedList={true}
          nestedItems={ [
            <ListItem primaryText="Today" value="/schedule/today" />,
            <ListItem primaryText="This Week" value={`/schedule/this-week/${getStartOfWeek()}`} />,
            <ListItem primaryText="Previous Weeks" value="/schedule/previous-weeks" />
          ] }
        />
        <ListItem primaryText="Workouts" value="/workouts"/>
        <ListItem primaryText="Users" value="/users"/>

      </SelectableList>
    )
  }
}

function getStartOfWeek() {
  var date = new Date();
  var day = date.getDay() || 7;
  if (day !== 1)
    date.setHours(-24 * (day - 1));
  return date.toISOString().substring(0, 10);
}

export default Relay.createContainer(NavMenu, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        User_IsAnonymous,
      }
    `,
  },
})
