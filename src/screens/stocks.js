import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Picker } from 'react-native';
import { Theme } from "..//theme/style";
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

class stocks extends Component {
    state = {
        data: [],
        PickerData: ""
    }


    componentDidMount() {
       
        axios.get("https://castalonirenz.000webhostapp.com/showStocks.php")
            .then(response => {
                console.log("Mounted", response)
                this.setState({ data: response.data })
            })
            .catch(error => {
                console.log(error)
            })

    }
    componentDidUpdate() {
        console.log('Updating Component')
            axios.post("https://castalonirenz.000webhostapp.com/selected.php",{
            selectedData: this.state.PickerData
        })
        .then(response=>{
            console.log(response, "ON PICKED")
            if(response.data === "No Results Found."){
                alert('No Item')
            }
            else{
                this.setState({data:  response.data})
            }
            
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={Theme.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                        <Icon name="md-menu" size={30} color="#000"></Icon>
                    </TouchableOpacity>
                    <Text style={[styles.text, { marginLeft: "35%" }]}>STOCKS</Text></View>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ width: "100%" }}>

                    <View style={styles.dataContainer}>
                        <Picker
                            selectedValue={this.state.PickerData}
                            style={{ height: 50, width: "60%", marginTop: 10 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({PickerData: itemValue})
                              }>
                            <Picker.Item label="Beverages" value="Beverages" />
                            <Picker.Item label="Gas" value="Gas" />
                            <Picker.Item label="Laptop" value="laptop" />
                            
                        </Picker>
                        {this.state.data.map((items, key) => (
                            <View key={key} style={styles.data}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.text}>Barcode: </Text>
                                    <Text> {items.code} </Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text>Brand: </Text>
                                    <Text> {items.brand} </Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text>Supplier: </Text>
                                    <Text> {items.supplier} </Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text>Type: </Text>
                                    <Text> {items.type} </Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text>Name: </Text>
                                    <Text> {items.name} </Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text>size: </Text>
                                    <Text> {items.size} </Text>
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
        width: "80%",

        marginTop: 20,
        // borderRadius: 10,
        marginBottom: 5,

    },
    dataContainer: {
        flex: 1,
        backgroundColor: "#b2d2ca",
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#000"
    }

})

export default stocks;
