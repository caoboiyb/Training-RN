import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ActivityIndicator
} from 'react-native';

class Spinner extends PureComponent {
    state = {}
    render() {
        return (
            <View style={styles.spinnerStyle}>
                <ActivityIndicator size={this.props.size || 'large'} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export { Spinner };