

import React, {Component} from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { StackNavContainer } from "./src/navigators/Stack/Main";
export default class App extends Component {
  render() {
    return (
    <SwitchNavContainer/>
    );
  }
}

const SwitchNav = createSwitchNavigator({
  Auth: StackNavContainer
})

const SwitchNavContainer = createAppContainer(SwitchNav)