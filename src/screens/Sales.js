import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Theme } from "../theme/style";
import Icon from 'react-native-vector-icons/Ionicons'
class Sales extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={Theme.header}>
        <TouchableOpacity onPress={()=>this.props.navigation.toggleDrawer()}>
        <Icon name="md-menu" size={30} color="#000"></Icon>
        </TouchableOpacity>
        <Text>This would be my header</Text></View>
        <View style={Theme.Container}>
          <Text> Sales </Text>
        </View>
      </View>
    );
  }
}

export default Sales;
