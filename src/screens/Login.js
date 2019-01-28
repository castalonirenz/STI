import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Theme } from "../theme/style";
import { Button } from "../component/Button";
import { Input } from "../component/Input";
import { ScrollView } from 'react-native-gesture-handler';
class Login extends Component {
  static navigationOptions = {
    header: null
  }
  state = {
    username: '',
    password: '',
  }
  _onLogin = () =>{
    this.props.navigation.navigate('user')
  }
  render() {
    return (
      <View style={Theme.Container}>
        <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false}>
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
            </View>
          </View>
        </ScrollView>
      </View>

    );
  }
}

export default Login;
