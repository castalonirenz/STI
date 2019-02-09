import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { Button } from "../component/Button";
import { Input } from "../component/Input";
import { Theme } from "../theme/style";
import RF from "react-native-responsive-fontsize"
import axios from 'axios'
export default class Forget extends Component {

    state = {
        username: '',
        showPassword: '',
        secretAnswer: '',
        isLoading: false,
        show: false,
        question: "",
        isLoading: false
    }
    _onUpdate = () => {
        this.setState({ isLoading: true })
        axios.post("https://148.66.136.151/ForgetPass.php", {
            question: this.state.question,
            secretAns: this.state.secretAnswer,
        })
            .then(response => {
                console.log(response)
                let data = response.data
                if (data === "Wrong Answer.") {
                    alert('Wrong Answer.')
                    this.setState({ isLoading: false })
                }
                else {
                    console.log(data[0].password, "password")
                    alert("Here is your password: " + data[0].password)
                    this.setState({ isLoading: false, username:"", secretAnswer:"" })

                }
            })
    }
    _onCheck = () => {
        this.setState({ isLoading: true })
        axios.post("https://itdatabase.net/checkUsername.php", {
            username: this.state.username
        })
            .then(response => {
                console.log('Username: ', this.state.username)
                console.log(response)
                let data = response.data
                if (data === "No Results Found.") {
                    alert('Username does not exist')
                    this.setState({ isLoading: false })
                }
                else {
                    console.log(data[0].question, "question")
                    this.setState({ question: data[0].question, show: true, isLoading: false })
                }
            })
    }
    render() {
        let loading
        if (this.state.isLoading === true) {
            loading = <ActivityIndicator size="large" color="orange" />
        }

        let show
        if (this.state.show === true) {
            show =
                <View style={{ width: "90%", alignItems: "center", borderWidth: 2, marginTop: 20, paddingBottom: 5, borderRadius: 10 }}>
                    <Text style={{ marginTop: 20, fontSize: RF(2.5), color: "#000" }}>{this.state.question}</Text>
                    <Input
                        style={{ width: "70%" }}
                        placeholder="Enter Secret Answer"
                        onChangeText={val => this.setState({ secretAnswer: val })}
                        value={this.state.password}
                        secureTextEntry={true} />
                    <View style={{ width: "100%", alignItems: "center", marginTop: 10 }}>
                        <Button TouchablePress={this._onUpdate}>Verify</Button>
                    </View>
                </View>
        }
        return (
            <View style={Theme.Container}>
                <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
                    <View style={{ flex: 1, marginTop: 50, width: "100%", alignItems: "center", justifyContent: "center" }}>

                        <Input
                            style={{ width: "70%" }}
                            placeholder="Enter Username"
                            onChangeText={val => this.setState({ username: val })}
                            value={this.state.username} />

                        <Button TouchablePress={this._onCheck} TouchableStyle={{ marginTop: 10, }}>Check</Button>
                        {show}
                        <Button TouchablePress={() => this.props.navigation.navigate('login')}
                            TouchableStyle={{ marginTop: 10, backgroundColor: "#0d6996" }}
                        >Go back to Login</Button>
                        {loading}

                    </View>
                </ScrollView>
            </View>
        );
    }
}
