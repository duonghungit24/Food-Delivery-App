import React, {useContext} from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator'
import {ActivityIndicator} from 'react-native'
import {SignInContext, useUserContext} from '../contexts/authContext'
import AppStack from './AppStack';
export default function RootStack() {
    // const {signedIn} = useContext(SignInContext)
    const { user, loading } = useUserContext();
    console.log(loading);
    return (
        <>
          {loading ? <ActivityIndicator style={{flex: 1}} size="large" color="red"/> : <>{!user ? <AuthNavigator/> : <AppStack />}</>}
        </>
        // <NavigationContainer>
        
        // </NavigationContainer>
    )
}