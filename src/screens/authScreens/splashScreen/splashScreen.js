import React , { useEffect} from 'react'
import { View , Text} from 'react-native'
const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('SignInWellcomeScreen')
        },3000)
    })
    return (
        <View>
            <Text> splash screen</Text>
        </View>
    );
}

export default SplashScreen;