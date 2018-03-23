import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import firebase from 'firebase'
import { Card, CardSection, LoginButton, Input, Spinner } from './common'


class LoginForm extends PureComponent {
    state = {
        email: '',
        password: '',
        error: '',
        isLogging: false
    }

    _onLoginButtonPressed = () => {
        const { email, password } = this.state

        this.setState({ error: '', isLogging: true })

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this._onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this._onLoginSuccess.bind(this))
                    .catch(this._onLoginFail.bind(this))
            })
    }

    _onLoginSuccess = () => {
        this.setState({
            email: '',
            password: '',
            isLogging: false,
            error: ''
        })
    }

    _onLoginFail = () => {
        this.setState({
            isLogging: false,
            error: 'Authentication Failed'
        })
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@gmail.com"
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        isPassword={true}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>{this.state.error}</Text>

                <CardSection>
                    {
                        this.state.isLogging
                            ? <Spinner size="small"/>
                            : <LoginButton onPress={this._onLoginButtonPressed.bind(this)}>
                                Login
                              </LoginButton>
                    }

                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
})
export default LoginForm;