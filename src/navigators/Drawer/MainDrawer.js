import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems,
  NavigationActions
} from "react-navigation";
import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { SalesScreen, StockScreen } from "../../screens/index";
import { MainTabContainer } from "../MainTab/TabNavigator";

_onLogout = () => {
  let empty = []
  try {
    AsyncStorage.clear();
    console.log("Clear")
    
  }
  catch (error) {
    alert(error)
    console.log(error)
  }
}
const CustomDrawerComponent = props => (

  <SafeAreaView style={{ flex: 1 }}>
    <ImageBackground
      source={require("../../assets/logo.png")}
      resizeMode="contain"
      style={{
        height: 150,
        backgroundColor: "#000",
        borderRightColor: "#fff",
        borderWidth: 3,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
    </ImageBackground>
    <ScrollView>
      <DrawerItems
        {...props} />
      <TouchableOpacity onPress={this._onLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
);

const Drawer = createDrawerNavigator(
  {
    'Sales': {
      screen: MainTabContainer
    },
    "Stocks": {
      screen: StockScreen
    }
    ,
    "Reports": {
      screen: SalesScreen
    },
    // "Logout":{
    //   screen: SalesScreen
    // }
  },
  {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: "#298F78",
      inactiveTintColor: "#969797",
      labelStyle: {
        fontSize: 15,
        fontWeight: "normal"
      }
    }
  }
);

export const DrawerContainer = createAppContainer(Drawer);