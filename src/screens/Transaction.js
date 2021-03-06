import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Picker } from 'react-native';
import { Theme } from "..//theme/style";
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import RF from "react-native-responsive-fontsize"
import { Button } from "../component/Button";
class Transaction extends Component {
    state = {
        data: [],
        PickerData: ""
    }


    componentDidMount() {

        axios.get("http://itsdatabase.info/showTransaction.php")
        .then(response => {
            console.log(response.data, "ON PICKED")
            if (response.data === "No Results Found.") {
                alert('No Data')
            }
            else {
                this.setState({ data: response.data })

            }

        })


    }
    componentDidUpdate() {
        axios.get("http://itsdatabase.info/showTransaction.php")
        .then(response => {
            console.log(response.data, "ON PICKED")
            if (response.data === "No Results Found.") {
                alert('No Data')
            }
            else {
                this.setState({ data: response.data })

            }

        })
    }

    _onSelect = () => {
        console.log("Selected")
       
        axios.post("http://itsdatabase.info/showTransaction.php", {
            selectedData: this.state.PickerData
        })
            .then(response => {
                console.log(response, "ON PICKED")
                if (response.data === "No Results Found.") {
                    alert('No Item')
                }
                else {
                    this.setState({ data: response.data })

                }

            })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={Theme.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                        <Icon name="md-menu" size={30} color="#fff"></Icon>
                    </TouchableOpacity>
                    <Text style={[Theme.textHeader, { marginLeft: "30%", color: "#fff" }]}>TRANSACTION</Text></View>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ width: "100%" }}>

                    <View style={styles.dataContainer}>
                        {this.state.data.map((items, key) => (
                            <View key={key} style={styles.data}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={Theme.textHeader}>Invoice: </Text>
                                    <Text style={Theme.textHeader}> {items.invoice} </Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.text}>ID: </Text>
                                    <Text style={styles.text}> {items.id} </Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.text}>Type: </Text>
                                    <Text style={styles.text}> {items.type} </Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.text}>Code: </Text>
                                    <Text style={styles.text}> {items.code} </Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.text}>Brand: </Text>
                                    <Text style={styles.text}> {items.brand} </Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.text}>Name: </Text>
                                    <Text style={styles.text}> {items.name} </Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.text}>Size: </Text>
                                    <Text style={styles.text}> {items.size} {items.unit}</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.text}>Quantity: </Text>
                                    <Text style={styles.text}> {items.quantity} </Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.text}>Price: </Text>
                                    <Text style={styles.text}> {items.price} </Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.text}>Total: </Text>
                                    <Text style={styles.text}> {items.total} </Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.text}>Date: </Text>
                                    <Text style={styles.text}> {items.date} </Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.text}>Time: </Text>
                                    <Text style={styles.text}> {items.time} </Text>
                                </View>
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
        width: "90%",
        marginTop: 20,
        paddingLeft: 20,
        borderLeftWidth: 5,
        borderLeftColor: "#000",
        marginBottom: 5,

    },
    dataContainer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
    },

    text: {
        // color:"#000",
        fontSize: RF(2.0)
    }

})

export default Transaction;
