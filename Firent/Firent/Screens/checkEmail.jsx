import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Circle, Path } from 'react-native-svg';

export default function Validationpassword() {
    return (
        <View style={styles.validationpassword}>
            <View style={styles.text}>
                <Text style={styles.pleasecheckyouremail}>
                    {`Please check your email`}
                </Text>
                <Text style={styles.description}>
                No worries! We've sent you an email with instructions on how to reset your password. 
                </Text>
            </View>
            <Svg style={styles.ellipse5} width="100" height="100" viewBox="0 0 100 100" fill="none" >
                <Circle cx="50" cy="50" r="49" stroke="#686DCD" strokeWidth="2" />
            </Svg>

            <Svg style={styles.vector} width="37" height="28" viewBox="0 0 37 28" fill="none" >
                <Path d="M4 14.6667L13.6667 24L33 4" stroke="#686DCD" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            </Svg>

            <View style={styles.mainFlame}>
                <Svg style={styles.flame} width="62" height="75" viewBox="0 0 62 75" fill="none" >
                    <Path d="M31 0C-1.27287 21.0162 -17.4798 75 31 75C79.4797 75 63.2728 21.0162 31 0Z" fill="#FF9601" />
                </Svg>

                <View style={styles.inner}>
                    <Svg style={styles.innerBase} width="28" height="36" viewBox="0 0 28 36" fill="none" >
                        <Path d="M14.0001 36C-11.4999 36 6.50007 4 14.0001 0C21.5 4 39.5001 36 14.0001 36Z" fill="#FFC803" />
                    </Svg>

                    <Svg style={styles.inner01} width="18" height="23" viewBox="0 0 18 23" fill="none" >
                        <Path d="M17 22C2.50002 22.5 -1.69463 8.26173 2.50002 0C5.47677 7.77356 18.919 14.6666 17 22Z" fill="#FFC803" />
                    </Svg>

                    <Svg style={styles.inner02} width="12" height="28" viewBox="0 0 12 28" fill="none" >
                        <Path d="M1.19416 27.071C15.2743 23.5711 11.7736 10.7209 7.92966 0.450789C3.95201 7.70876 -2.66428 20.5461 1.19416 27.071Z" fill="#FFC803" />
                    </Svg>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    validationpassword: {
        flexShrink: 0,
        height: 812,
        width: "100%",
        backgroundColor: "rgba(31, 31, 41, 1)",
        alignItems: "flex-start",
        rowGap: 0
    },
    text: {
        position: "absolute",
        flexShrink: 0,
        top: 435,
        height: 94,
        left: 90,
        width: 250
    },
    pleasecheckyouremail: {
        position: "absolute",
        flexShrink: 0,
        left: 23,
        width: 200,
        height: 25,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0
    },
    description: {
        position: "absolute",
        flexShrink: 0,
        left:3,
        top: 38,
        width: 235,
        height: 76,
        textAlign: "center",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 16,
        fontWeight: "400",
        letterSpacing: 0
    },
    ellipse5: {
        position: "absolute",
        flexShrink: 0,
        top: 273,
        right: 137,
        left: 160,
        height: 100,
        overflow: "visible"
    },
    vector: {
        position: "absolute",
        flexShrink: 0,
        top: 313,
        right: 173,
        bottom: 479,
        left: 195,
        overflow: "visible"
    },
    mainFlame: {
        position: "absolute",
        flexShrink: 0,
        top: 43,
        bottom: 641,
        left: 145,
        right: 123,
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