import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

class Header extends PureComponent {
    state = {}
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.headerText}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: "#F8F8F8",
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 20
    },
    textStyle: {
        fontSize: 20
    }
})

export { Header };