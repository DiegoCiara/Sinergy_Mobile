import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Example from "../screens/example";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return(
        <Navigator>
        <Screen
            name="example"
            component={Home}
        />
        <Screen
            name="example"
            component={Example}
        />
        </Navigator>
    )
}