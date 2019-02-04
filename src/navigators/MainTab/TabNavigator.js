import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { Platform } from "react-native";
import React from 'react';
import { SalesScreen, SalesYearlyScreen } from "../../screens/index";
const MainTab = createBottomTabNavigator({
    Monthly: {

        screen: SalesScreen,
        navigationOptions:{
            tabBarLabel:"Monthly",
            tabBarIcon: ({tintColor}) =>(
            <Icon name={Platform.OS === "ios" ? "ios-time" : "md-time"} size={30} color={tintColor}/>
            )
        }
    },
    Yearly:{
        screen: SalesYearlyScreen ,
        navigationOptions:{
            tabBarLabel:"Yearly",  
            tabBarIcon:({tintColor}) =>(
                <Icon name={Platform.OS === "ios" ? "ios-trending-up" : "md-trending-up"} size={30} color={tintColor}/>
            )
        }
    }
},{
    tabBarOptions:{
        activeBackgroundColor:"#000",
        inactiveBackgroundColor:"gray",
        inactiveTintColor:"#fff",
        activeTintColor:"#fff",
        labelStyle:{
            fontSize: 15
        }
    }
})

export const MainTabContainer = createAppContainer(MainTab)