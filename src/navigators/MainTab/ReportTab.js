import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { Platform } from "react-native";
import React from 'react';
import { ReplaceScreen, TransactionScreen, ReturnsScreen } from "../../screens/index";
const MainTab = createBottomTabNavigator({
    Transaction: {

        screen: TransactionScreen,
        navigationOptions:{
            tabBarLabel:"Transactions   ",
            tabBarIcon: ({tintColor}) =>(
            <Icon name={Platform.OS === "ios" ? "ios-done-all" : "md-done-all"} size={30} color={tintColor}/>
            )
        }
    },
    // Replace:{
    //     screen: ReplaceScreen ,
    //     navigationOptions:{
    //         tabBarLabel:"Replace",  
    //         tabBarIcon:({tintColor}) =>(
    //             <Icon name={Platform.OS === "ios" ? "ios-shuffle" : "md-shuffle"} size={30} color={tintColor}/>
    //         )
    //     }
    // }
    // ,
    Returns:{
        screen: ReturnsScreen ,
        navigationOptions:{
            tabBarLabel:"Returns",  
            tabBarIcon:({tintColor}) =>(
                <Icon name={Platform.OS === "ios" ? "ios-redo" : "md-redo"} size={30} color={tintColor}/>
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

export const ReportTabContainer = createAppContainer(MainTab)