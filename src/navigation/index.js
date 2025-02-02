import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import WelcomeScreen from '../screens/Welcome'
import Regions from '../screens/regions/List'
import NewCustomer from '../screens/customers/New'
import EditCustomer from '../screens/customers/Edit'
import CustomerListByRegion from '../screens/customers/ListByRegion'

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
                <Stack.Screen
                    name='Edit Customer'
                    component={EditCustomer}
                />
                <Stack.Screen
                    name='List Customers by Region'
                    component={CustomerListByRegion}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation