import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Theme } from "..//theme/style";
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

class stocks extends Component {
    state = {
        data: []
    }


    componentDidMount() {
        console.log("Mounted")
        axios.get("https://castalonirenz.000webhostapp.com/showStocks.php")
            .then(response => {
                console.log(response)
                this.setState({ data: response.data })
                console.log(this.state.data)
            })
            .catch(error => {
                console.log(error)
            })

    }
    componentDidUpdate(prevProps, prevState) {

        if (prevState.data !== this.state.data) {
            console.log("Component Update")
            axios.get("https://castalonirenz.000webhostapp.com/showStocks.php")
                .then(response => {

                    console.log(response, "RESPONSE")
                    this.setState({ data: response.data })
                    console.log(this.state.data, "STATE")


                })
                .catch(error => {
                    console.log(error)
                })
        }

    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={Theme.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                        <Icon name="md-menu" size={30} color="#000"></Icon>
                    </TouchableOpacity>
                    <Text>This would be my header</Text></View>
                <ScrollView>
                    <View style={styles.dataContainer}>
                        {this.state.data.map((items, key) => (
                            <View key={key} style={styles.data}>
                                <Text> {items.code} </Text>
                                <Text> {items.brand} </Text>
                                <Text> {items.supplier} </Text>
                                <Text> {items.type} </Text>
                                <Text> {items.name} </Text>
                                <Text> {items.size} </Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    data: {
        backgroundColor: "#fff",
        elevation: 20,
        width: "80%",
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    dataContainer: {
        flex: 1,
        backgroundColor: "#b2d2ca",
        alignItems: 'center',
    }

})

export default stocks;
