/* @flow weak */
/* eslint react/prop-types: 0 */

import React from 'react'
import Relay from 'react-relay'

import {darkWhite, lightWhite, grey900} from 'material-ui/styles/colors';
import {LARGE}  from '../../../webapp/scripts/withWidth';

import FullWidthSection from '../../../webapp/components/FullWidthSection'


const styles = {
  footer: {
    backgroundColor: grey900,
    textAlign: 'center',
    paddingRight: 24
  },
  a: {
    color: darkWhite,
  },
  p: {
    margin: '0 auto',
    padding: 0,
    color: lightWhite,
    maxWidth: 356,
  },
}


class Footer extends React.Component
{
  render( )
  {
    if( this.props.width == LARGE )
      styles.footer.paddingLeft = 256 + 24
    else
      styles.footer.paddingLeft = 24

    return (
      <FullWidthSection style={ styles.footer }>
        <p style={ styles.p }>
          {' SPAC Fusion Editor'}
        </p>
      </FullWidthSection>
    )
  }
}

export default Relay.createContainer( Footer, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        User_IsAnonymous,
      }
    `,
  },
} )
