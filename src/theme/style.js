import { StyleSheet } from "react-native";

export const Theme = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor:"#b2d2ca",
        alignItems: 'center',
        justifyContent: 'center',
    },
    Button:{
        width: 150,
        borderRadius: 30,
        backgroundColor:"#3f7cff",
        height: 40,
        alignItems:"center",
        justifyContent:"center"
    },
    Input:{
        width:"100%",
        backgroundColor:"#fff",
        borderRadius:30,
        height: 50,
        textAlign:"center",
        marginTop: 20,
    },
    header:{
        width: "100%",
         backgroundColor: "#fff", 
         height: 50,
         alignItems:"center",
         flexDirection: 'row',
         paddingLeft: 20,
    }
})