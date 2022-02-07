import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Colors, Parameters, Title} from '../../global/styles';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
export default function SignInWellcomeScreen() {
    return (
        <View>
            <View>
                <Text>Khám phá mọi nhà hàng</Text>
                <Text>Khắp mọi nơi </Text>
            </View>
        </View>
    )
}