import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Picker } from 'react-native';
import { Theme } from "../theme/style";
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import RF from "react-native-responsive-fontsize"
import { Button } from "../component/Button";
import DatePicker from 'react-native-datepicker'
var moment = require('moment')
class Sales extends Component {
    state = {
        data: [],
        PickerData: "",
        dateOne: "2011-05-15",
        dateTwo: "2019-01-20",
        isDateTimePickerVisible: false,
        isDateTimePickerVisibleTwo: false,
    }


    componentDidMount() {

        axios.get("https://nasal-shifts.000webhostapp.com/showTransaction.php")
            .then(response => {
                console.log(response, "ON PICKED")
                if (response.data === "No Results Found.") {
                    alert('No Data')
                }
                else {
                    this.setState({ data: response.data })

                }

            })

    }
    componentDidUpdate() {
        console.log('Updating Component')
    }

    _onSelect = () => {
        // console.log("Selected")
        // console.log(this.state.PickerData)
        axios.post("https://nasal-shifts.000webhostapp.com/selected.php", {
            dateOne: this.state.dateOne,
            dateTwo: this.state.dateTwo
        })
            .then(response => {
                console.log(response, "ON SELECT")
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
                    <Text style={[Theme.textHeader, { marginLeft: "35%", color: "#fff" }]}>SALES</Text></View>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ width: "100%" }}>

                    <View style={styles.dataContainer}>
                        <Text>Date From:</Text>
                        <DatePicker
                            style={{ width: 200 }}
                            date={this.state.dateOne}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="2000-01-01"
                            maxDate="2099-01-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }

                            }}
                            onDateChange={(date) => { this.setState({ dateOne: date }) }}
                        />


                        <Text>Date To:</Text>
                        <DatePicker
                            style={{ width: 200 }}
                            date={this.state.dateTwo}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="2000-01-01"
                            maxDate="2099-01-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }

                            }}
                            onDateChange={(date) => { this.setState({ dateTwo: date }) }}
                        />



                        <Button TouchablePress={this._onSelect} TouchableStyle={{ marginTop: 20 }}>
                            Sort
                            </Button>
                        {this.state.data.map((items, key) => (
                            <View key={key} style={styles.data}>

                                <View style={{ flexDirection: "row" }}>
                                    <Text style={Theme.textHeader}>ID: </Text>
                                    <Text style={Theme.textHeader}> {items.id} </Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={Theme.textHeader}>Invoice: </Text>
                                    <Text style={Theme.textHeader}> {items.invoice} </Text>
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
                                    <Text style={styles.text}> {items.size} </Text>
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
        marginTop: 20
    },

    text: {
        // color:"#000",
        fontSize: RF(2.0)
    }

})

export default Sales;
