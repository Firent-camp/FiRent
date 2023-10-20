import React, { useEffect } from 'react';
import { View, ImageBackground, Text, StyleSheet,TouchableOpacity, StatusBar } from 'react-native';
import {  } from 'react-native-svg';

export default function Splash() {
    StatusBar.setBackgroundColor('rgba(31, 31, 41, 1)')
    useEffect(() => {
        // Set status bar style to light-content (for light elements on a dark background)
        StatusBar.setBarStyle('light-content');
    }, []);
    return (
    		<View style={styles.splash}>
      			<ImageBackground style={styles.e0bb3fe3d2570f2cc68719abdd75ca9111} source={{uri: /* dummy image */ 'https://i.pinimg.com/736x/7a/26/ba/7a26ba10e73253a65af8276496f615ea.jpg'}}/>
      			<View style={styles.buttonSignUp}>
                    <TouchableOpacity>
        				<View style={styles.rectangle8}/>
        				<Text style={styles.letsstart}>
          					{`Let’s start`}
        				</Text>
                        </TouchableOpacity>
      			</View>
    		</View>
    )
}

const styles = StyleSheet.create({
  	splash: {
    flexShrink: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(31, 31, 41, 1)",
    alignItems: "center",
    rowGap: 0
},
  	e0bb3fe3d2570f2cc68719abdd75ca9111: {
    position: "absolute",
    flexShrink: 0,
    width: "100%",
    height: "100%"
},
  	buttonSignUp: {
    position: "absolute",
    flexShrink: 0,
    top: 671,
    height: 50,
    left: 48,
    width: 300
},
  	rectangle8: {
    position: "absolute",
    flexShrink: 0,
    width: 300,
    height: 50,
    backgroundColor: "rgba(19, 19, 22, 1)",
    borderRadius: 40
},
  	letsstart: {
    position: "absolute",
    flexShrink: 0,
    top: 15,
    left: 114,
    width: 90,
    height: 19,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0
}
})