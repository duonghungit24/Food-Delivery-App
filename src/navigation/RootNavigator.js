import React, {useContext} from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator'
import {SignInContext} from '../contexts/authContext'
import AppStack from './AppStack';
export default function RootStack() {
    const {signedIn} = useContext(SignInContext)
    return (
        // <NavigationContainer>
        signedIn.userToken === null ? <AuthNavigator/> : <AppStack />
        // </NavigationContainer>
    )
}