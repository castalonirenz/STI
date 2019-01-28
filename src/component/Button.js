import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import React from 'react'
import { Theme } from "../theme/style";
export const Button = props => (
    <TouchableOpacity style={Theme.Button}
        {...props}
        onPress={props.TouchablePress}
    >
        <View>
            <Text style={{color:"#fff"}}>
                {props.children}
            </Text>
        </View>
    </TouchableOpacity>
)