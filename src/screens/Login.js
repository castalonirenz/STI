import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native';
import { Theme } from "../theme/style";
import { Button } from "../component/Button";
import { Input } from "../component/Input";
import { ScrollView } from 'react-native-gesture-handler';
import axios from "axios";
import Tts from 'react-native-tts';
class Login extends Component {
  static navigationOptions = {
    header: null
  }
  state = {
    username: '',
    password: '',
    isLoading: false,
  }
  componentDidMount() {
    console.log("Mounted")
    Tts.getInitStatus().then(() => {
      Tts.setDefaultPitch(0.6)
      Tts.setDefaultPitch(0.0)
      Tts.speak('Hi, Welcome to the monitoring application, Please login.')
    }, (err) => {
      if (err.code === 'no_engine') {
        Tts.requestInstallEngine();
      }
    });

    Tts.addEventListener('tts-finish', (event) => AsyncStorage.getItem('@MyStorage: key')
      .then(data => {
        if (data !== null) {
          let output = JSON.parse(data)
          let username = output[0]
          let password = output[1]
          this.setState({ username: username, password: password })
          this._onLogin()
        }
      }))

  }

  _onLogin = () => {
    this.setState({ isLoading: true })
    fetch('http://itsdatabase.info/login.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
    })
      .then(response => {
        console.log(response)
        if (response._bodyText === "Success") {
          this.props.navigation.navigate('user')
          this.setState({ isLoading: false })
          try {
            let Credentials = [this.state.username, this.state.password]
            AsyncStorage.setItem('@MyStorage: key', JSON.stringify(Credentials))
            console.log(Credentials)
          }
          catch (error) {
            alert(error)
            console.log(error)
            this.setState({ isLoading: false })
          }
        }
        if (response._bodyText === "Wrong Password") {
          alert("Wrong Username/Password")
          this.setState({ isLoading: false })
        }
      })
      .catch(error => {
        console.log(error)
        this.setState({ isLoading: false })
      })

  }
  _onForget = () => {
    this.props.navigation.navigate('forget')
  }
  render() {
    let loading
    if (this.state.isLoading === true) {
      loading = <ActivityIndicator size="large" color="orange" />
    }
    return (
      <View style={Theme.Container}>
        <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <View style={{ alignItems: "center" }}>
            <Image
              // resizeMode="contain"
              style={{ height: 250, width: 300 }}
              source={require('../assets/logo.png')} />
          </View>
          <View style={{ marginTop: 50, width: "100%", alignItems: "center" }}>
            <Input
              style={{ width: "70%" }}
              placeholder="Username"
              onChangeText={val => this.setState({ username: val })}
              value={this.state.username} />
            <Input
              style={{ width: "70%" }}
              placeholder="Password"
              onChangeText={val => this.setState({ password: val })}
              value={this.state.password}
              secureTextEntry={true} />
            <View style={{ width: "100%", alignItems: "center", marginTop: 30 }}>
              <Button TouchablePress={this._onLogin}>Log in</Button>
              <Button TouchablePress={this._onForget} TouchableStyle={{ marginTop: 10, backgroundColor: "red" }}>Forget Password</Button>
              {loading}
            </View>
          </View>
        </ScrollView>
      </View>

    );
  }
}

export default Login;
