import { createStackNavigator, createAppContainer } from "react-navigation";
import { LoginScreen } from "../../screens/index";
import { DrawerContainer } from "../Drawer/MainDrawer";
const StackNav = createStackNavigator({
    login: {
        screen: LoginScreen
    },
    user:{
        screen: DrawerContainer
    }
},{
    defaultNavigationOptions:{
        header: null
    }
})

export const StackNavContainer = createAppContainer(StackNav)