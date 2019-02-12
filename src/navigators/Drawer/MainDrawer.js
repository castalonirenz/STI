import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems,
  NavigationActions,
  withNavigation
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
import { SalesScreen, StockScreen, CriticalScreen } from "../../screens/index";
import { MainTabContainer} from "../MainTab/TabNavigator";
import { ReportTabContainer } from "../MainTab/ReportTab";
 _onLogout = () => {
  let empty = []

    AsyncStorage.clear();
    console.log("Clear")
    props.navigation.navigate('login')
 
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
      <TouchableOpacity onPress={()=>props.navigation.navigate('login')}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
);

const Drawer = createDrawerNavigator(
  {
    'Sales': {
      screen: SalesScreen
    },
    "Stocks": {
      screen: StockScreen
    }
    ,
    "Reports": {
      screen: ReportTabContainer
    },
    "Critical Level":{
      screen: CriticalScreen
    }
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