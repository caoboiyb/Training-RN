import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { connect } from 'react-redux'

class LibraryList extends PureComponent {
  state = {  }
  render() {

    console.log(this.props.libraries)

    return(
      <View />
    );
  }
}

const mapAppStateToProps = state => {
    return {
      libraries: state.libraries
    }
}

export default connect(mapAppStateToProps)(LibraryList);