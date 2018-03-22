import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class Card extends PureComponent {
  state = {  }
  render() {
    return (
        <View style={styles.containerStyle}>
          {this.props.children}
        </View>
    );
  }
}

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#dddddd',
        borderBottomWidth: 0,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
})
export default Card;