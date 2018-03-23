/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase'
import { Header, LoginButton, CardSection, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

export default class App extends Component {

  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyC6GzXXrCiqitiM2T3MeZPO3XbKNLRj0-g",
      authDomain: "authentication-1ea02.firebaseapp.com",
      databaseURL: "https://authentication-1ea02.firebaseio.com",
      projectId: "authentication-1ea02",
      storageBucket: "authentication-1ea02.appspot.com",
      messagingSenderId: "854324316614"
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  _onLogOut = () => {
    firebase.auth().signOut()
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <LoginButton onPress={this._onLogOut}>Log Out</LoginButton>
          </CardSection>
        );
      case false:
        return (
          <LoginForm />
        )
      default:
        return (
          <CardSection>
            <Spinner size="large" />
          </CardSection>
        )
    }
  }


  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

