import React from 'react'
import { TextInput, View } from "react-native";
import { Theme } from "../theme/style";
export const Input = props => (

    <TextInput
        {...props}
        style={[Theme.Input, props.style]}
        onChangeText={props.onChangeText}
        value={props.value}
    >

    </TextInput>

)