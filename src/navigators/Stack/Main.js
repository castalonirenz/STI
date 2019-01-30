import { createStackNavigator, createAppContainer } from "react-navigation";
import { LoginScreen, ForgetScreen } from "../../screens/index";
import { DrawerContainer } from "../Drawer/MainDrawer";
const StackNav = createStackNavigator({
    login: {
        screen: LoginScreen
    },
    forget:{
        screen: ForgetScreen
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