import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

class Input extends PureComponent {
    state = {}

    render() {
        const { inputStyle, labelStyle, containerStyle } = styles

        return (
            <View style={containerStyle}>
                <Text style={labelStyle}>{this.props.label}</Text>
                <TextInput
                    style={inputStyle}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    autoCorrect={false}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.isPassword}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        color: "#000",
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export { Input };