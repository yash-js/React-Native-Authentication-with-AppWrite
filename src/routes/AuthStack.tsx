import React from 'react'
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type AuthStackParamList = {
    SignUp: undefined;
    Login: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
                headerBackTitleVisible: false
            }}
        >
            <Stack.Screen
                name='Login'
                component={Login}
            />
            <Stack.Screen
                name='SignUp'
                component={SignUp}
            />
        </Stack.Navigator>
    )
}

export default AuthStack