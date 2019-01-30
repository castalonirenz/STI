import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import React from 'react'
import { Theme } from "../theme/style";
export const Button = props => (
    <TouchableOpacity 
        {...props}
        style={[Theme.Button, props.TouchableStyle]}
        onPress={props.TouchablePress}
    >
        <View>
            <Text style={{color:"#fff"}}>
                {props.children}
            </Text>
        </View>
    </TouchableOpacity>
)