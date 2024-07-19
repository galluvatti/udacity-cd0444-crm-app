import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import WelcomeScreen from '../screens/Welcome'
import Regions from '../screens/regions/List'
import NewCustomer from '../screens/customers/New'

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Welcome'}>
                <Stack.Screen
                    name='Welcome'
                    component={WelcomeScreen}
                />
                <Stack.Screen
                    name='List of Regions'
                    component={Regions}
                />
                <Stack.Screen
                    name='Create Customer'
                    component={NewCustomer}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation