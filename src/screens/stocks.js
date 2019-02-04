import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Picker } from 'react-native';
import { Theme } from "..//theme/style";
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import RF from "react-native-responsive-fontsize"
import { Button } from "../component/Button";
class stocks extends Component {
    state = {
        data: [],
        PickerData: ""
    }


    componentDidMount() {

        axios.get("https://nasal-shifts.000webhostapp.com/showStocks.php")
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
        console.log('Updating Component')
    }

    _onSelect = () => {
        console.log("Selected")
       
        axios.post("https://nasal-shifts.000webhostapp.com/selected.php", {
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
                    <Text style={[Theme.textHeader, { marginLeft: "35%", color: "#fff" }]}>STOCKS</Text></View>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ width: "100%" }}>

                    <View style={styles.dataContainer}>
                        <View style={{ width: "90%", flexDirection:"row" ,alignItems: "center", justifyContent:"space-around" }}>
                            <Picker
                                selectedValue={this.state.PickerData}
                                style={{ height: 50, width: "40%", marginTop: 10 }}
                                onValueChange={(itemValue, itemIndex)=>this.setState({PickerData: itemValue})}>
                                <Picker.Item label="Beverages" value="Beverages" />
                                <Picker.Item label="Gas" value="Gas" />
                                <Picker.Item label="Laptop" value="laptop" />
                            </Picker>
                                <Button 
                                style={{width: 80}}
                                TouchablePress={this._onSelect}>
                                    Sort
                                </Button>
                        </View>

                        {this.state.data.map((items, key) => (
                            <View key={key} style={styles.data}>

                                <View style={{ flexDirection: "row" }}>
                                    <Text style={Theme.textHeader}>Barcode: </Text>
                                    <Text style={Theme.textHeader}> {items.code} </Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={Theme.textHeader}>Stock: </Text>
                                    <Text style={Theme.textHeader}> {items.stocks} </Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.text}>Name: </Text>
                                    <Text style={styles.text}> {items.name} </Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.text}>Brand: </Text>
                                    <Text style={styles.text}> {items.brand} </Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.text}>Supplier: </Text>
                                    <Text style={styles.text}> {items.supplier} </Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.text}>Type: </Text>
                                    <Text style={styles.text}> {items.type} </Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.text}>size: </Text>
                                    <Text style={styles.text}> {items.size} </Text>
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

export default stocks;
