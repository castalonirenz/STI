import {
    createDrawerNavigator,
    createAppContainer,
    DrawerItems
  } from "react-navigation";
  import React, { Component } from "react";
  import {
    View,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    Image,
    Text,
    TouchableOpacity
  } from "react-native";
import { SalesScreen, StockScreen } from "../../screens/index";

  const CustomDrawerComponent = props => (
   
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/logo.png")}
        resizeMode="contain"
        style={{
          height: 150,
          backgroundColor: "#b2d2ca",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {/* <Image
          resizeMode="contain"
          style={{ height: "50%", width: "50%" }}
          source={require("../../assets/yonduSmall.png")}
        /> */}
      </ImageBackground>
      <ScrollView>
        <DrawerItems 
        {...props} />
      </ScrollView>
    </SafeAreaView>
  );
  
  const Drawer = createDrawerNavigator(
    {
      'Sales': {
        screen: SalesScreen
      },
      "Stocks":{
        screen: StockScreen
      }
      ,
      "Reports":{
        screen: SalesScreen
      },
      "Logout":{
        screen: SalesScreen
      }
    },
    {
      contentComponent: CustomDrawerComponent,
      contentOptions: {
        activeTintColor: "#298F78",
        inactiveTintColor:"#969797",
        labelStyle: {
          fontSize: 15,
          fontWeight:"normal"
        }
      }
    }
  );
  
  export const DrawerContainer = createAppContainer(Drawer);