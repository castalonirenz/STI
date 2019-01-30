import { StyleSheet } from "react-native";
import RF from "react-native-responsive-fontsize"
export const Theme = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor:"#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    Button:{
        width: 150,
        borderRadius: 30,
        backgroundColor:"#000",
        height: 40,
        alignItems:"center",
        justifyContent:"center"
    },
    Input:{
        width:"100%",
        backgroundColor:"#d3dbdc",
      
        borderRadius:30,
        height: 50,
        textAlign:"center",
        marginTop: 20,
    },
    header:{
        width: "100%",
         backgroundColor: "#000", 
         height: 50,
         alignItems:"center",
         flexDirection: 'row',
         paddingLeft: 20,
    },
    textHeader: {
        fontSize: RF(2.5),
        fontWeight: 'bold',
        color: "#000"
    },
})