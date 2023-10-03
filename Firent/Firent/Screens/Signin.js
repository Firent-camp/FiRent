import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function Signin() {
    return (
        <View style={styles.signin}>
            <TouchableOpacity>
                <View style={styles.buttonSignin}>
                    <View style={styles.rectangle8} />
                    <Text style={styles._signin}>Sign in</Text>
                </View>
            </TouchableOpacity>



            <Text style={styles.forgotPassword}>
                {`Forgot Password?`}
            </Text>



            <View style={styles.form}>
                <View style={styles.rectangle11} />
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Name@email.com "
                    placeholderTextColor="white"
                />
            </View>




            <View style={styles._form}>
                <View style={styles.rectangle12} />
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Password "
                    placeholderTextColor="white"
                />
            </View>
            <Text style={styles.welcomeBack}>
                {`Welcome Back !`}
            </Text>
            <View style={styles.mainFlame}>
                <Svg style={styles.flame} width="62" height="75" viewBox="0 0 62 75" fill="none" >
                    <Path d="M31 0C-1.27287 21.0162 -17.4798 75 31 75C79.4797 75 63.2728 21.0162 31 0Z" fill="#FF9601" />
                </Svg>

                <View style={styles.inner}>
                    <Svg style={styles.innerBase} width="28" height="36" viewBox="0 0 28 36" fill="none" >
                        <Path d="M13.9999 36C-11.5001 36 6.49995 4 13.9999 0C21.4999 4 39.4999 36 13.9999 36Z" fill="#FFC803" />
                    </Svg>

                    <Svg style={styles.inner01} width="18" height="23" viewBox="0 0 18 23" fill="none" >
                        <Path d="M17 22C2.49996 22.5 -1.69469 8.26173 2.49996 0C5.47671 7.77356 18.9189 14.6666 17 22Z" fill="#FFC803" />
                    </Svg>

                    <Svg style={styles.inner02} width="12" height="28" viewBox="0 0 12 28" fill="none" >
                        <Path d="M1.19404 27.071C15.2742 23.5711 11.7735 10.7209 7.92954 0.450789C3.95189 7.70876 -2.66441 20.5461 1.19404 27.071Z" fill="#FFC803" />
                    </Svg>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    signin: {
        flexShrink: 0,
        height: 812,
        width: "100%",
        backgroundColor: "rgba(31, 31, 41, 1)",
        alignItems: "flex-start",
        rowGap: 0
    },
    passwordInput: {
        paddingTop: 10,
        paddingLeft: 20,
        height: 40,
        borderColor: 'transparent',
        borderWidth: 1,
        paddingHorizontal: 10,
        fontSize: 16,
        color:"white"
    },
    buttonSignin: {
        position: "absolute",
        flexShrink: 0,
        top: 649,
        height: 50,
        width: 300,
        marginLeft: 50,
    },
    rectangle8: {
        position: "absolute",
        flexShrink: 0,
        width: 300,
        height: 50,
        backgroundColor: "rgba(19, 19, 22, 1)",
        borderRadius: 40
    },
    _signin: {
        position: "absolute",
        flexShrink: 0,
        top: 15,
        left: 126,
        width: 60,
        height: 25,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0
    },
    forgotPassword: {
        position: "absolute",
        flexShrink: 0,
        top: 477,
        right: 37,
        height: 20,
        color: "rgba(104, 109, 205, 1)",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0
    },
    form: {
        position: "absolute",
        flexShrink: 0,
        top: 327,
        height: 50,
        marginLeft: 55,
        width: 300
    },
    rectangle11: {
        position: "absolute",
        flexShrink: 0,
        width: 300,
        height: 50,
        backgroundColor: "rgba(19, 19, 22, 1)",
        borderWidth: 1,
        borderColor: "rgba(19, 19, 22, 1)",
        borderRadius: 5
    },
    nameemailcom: {
        position: "absolute",
        flexShrink: 0,
        top: 17,
        left: 20,
        width: 150,
        height: 25,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: 0
    },
    _form: {
        position: "absolute",
        flexShrink: 0,
        top: 397,
        height: 50,
        marginLeft: 55,
        width: 300
    },
    rectangle12: {
        position: "absolute",
        flexShrink: 0,
        width: 300,
        height: 50,
        backgroundColor: "rgba(19, 19, 22, 1)",
        borderWidth: 1,
        borderColor: "rgba(19, 19, 22, 1)",
        borderRadius: 5
    },
    password: {
        position: "absolute",
        flexShrink: 0,
        top: 17,
        left: 20,
        width: 70,
        height: 25,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: 0
    },
    welcomeBack: {
        position: "absolute",
        flexShrink: 0,
        top: 207,
        marginLeft: "27%",
        width: 193,
        height: 30,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 25,
        fontWeight: "700",
        letterSpacing: 0
    },
    mainFlame: {
        position: "absolute",
        flexShrink: 0,
        top: 42,
        bottom: 642,
        left: 142,
        right: 131,
        alignItems: "flex-start",
        rowGap: 0
    },
    flame: {
        position: "absolute",
        flexShrink: 0,
        top: 26,
        right: 33,
        bottom: 27,
        left: 33,
        overflow: "visible"
    },
    inner: {
        position: "absolute",
        flexShrink: 0,
        top: 60,
        height: 36,
        left: 48,
        width: 31,
        alignItems: "flex-start",
        rowGap: 0
    },
    innerBase: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 2,
        bottom: 0,
        left: 3,
        overflow: "visible"
    },
    inner01: {
        position: "absolute",
        flexShrink: 0,
        top: 14,
        right: 15,
        bottom: 0,
        left: 0,
        overflow: "visible"
    },
    inner02: {
        position: "absolute",
        flexShrink: 0,
        top: 8,
        right: 0,
        bottom: 1,
        left: 21,
        overflow: "visible"
    }
})