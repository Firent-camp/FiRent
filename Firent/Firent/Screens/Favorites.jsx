import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, StyleSheet, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { Svg, Rect, Path } from 'react-native-svg';
import Favoris from '../component/favoris';
import { SafeAreaView } from 'react-native-safe-area-context';
import ADDRESS_IP from '../API';
import axios from 'axios';
export default function Favorites({ navigation, route }) {
    const [wishlists, setWishlists] = useState([]);
    const user = route.params.user;
    const [userCon,setUser]=useState(user)
    StatusBar.setBackgroundColor('rgba(31, 31, 41, 1)');
    // useEffect(() => {
    //   StatusBar.setBarStyle('light-content');
    // }, []);
  
    const fetchWishlists = async () => {
        try {
          const response = await fetch(`http://${ADDRESS_IP}:5000/wishlists/${userCon}`);
          console.log(response);
          if (response.ok) {
            const data = await response.json();
           setWishlists(data)
          } else {
            console.error("Failed to fetch trips data from the backend.");
          }
        } catch (error) {
          console.error("Error while fetching trips data:", error);
        }
      };
      useEffect(() => {
        fetchWishlists();
      }, []);
    return (
        <View style={styles.favorites}>
            <Text style={styles.events}>
                {`Events`}
            </Text>
            <SafeAreaView>
            <Favoris wishlists={wishlists} />            
            </SafeAreaView>
            <Text style={styles.savedtrips}>
                {`Saved trips`}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    favorites: {
        flexShrink: 0,
        height: 900,
        width: 416,
        backgroundColor: "rgba(31, 31, 41, 1)",
        alignItems: "flex-start",
        rowGap: 0,
        borderWidth: 3,
        borderColor: "rgba(30, 30, 30, 1)"
    },
    events: {
        position: "absolute",
        flexShrink: 0,
        top: 110,
        left: 43,
        width: 76,
        height: 19,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 16,
        fontWeight: "600",
        letterSpacing: 0
    },
    group62: {
        position: "absolute",
        flexShrink: 0,
        top: 149,
        height: 102,
        left: 37,
        width: 342
    },
    group38: {
        position: "absolute",
        flexShrink: 0,
        height: 102,
        width: 342
    },
    group25: {
        position: "absolute",
        flexShrink: 0,
        height: 102,
        width: 342
    },
    rectangle7: {
        position: "absolute",
        flexShrink: 0,
        top: 5,
        left: 5,
        width: 141,
        height: 90,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
        borderRadius: 20
    },
    redFishLake: {
        position: "absolute",
        flexShrink: 0,
        top: 11,
        left: 161,
        width: 84,
        height: 18,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 13,
        fontWeight: "600",
        letterSpacing: 0
    },
    search: {
        position: "absolute",
        flexShrink: 0,
        top: 76,
        height: 19,
        left: 162,
        width: 84
    },
    group20: {
        position: "absolute",
        flexShrink: 0,
        top: 0.38299560546875,
        height: 19,
        width: 84
    },
    rectangle3: {
        position: "absolute",
        flexShrink: 0,
        top: 0.38299560546875,
        width: 84,
        height: 19,
        backgroundColor: "rgba(104, 109, 205, 1)",
        borderWidth: 1,
        borderColor: "rgba(104, 109, 205, 1)",
        borderRadius: 20
    },
    bookNow: {
        position: "absolute",
        flexShrink: 0,
        top: 4.38299560546875,
        left: 21,
        width: 44,
        height: 11,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 9,
        fontWeight: "400",
        letterSpacing: 0
    },
    $40Visit: {
        position: "absolute",
        flexShrink: 0,
        top: 54,
        left: 162,
        width: 51,
        height: 17,
        textAlign: "left",
        color: "rgba(104, 109, 205, 1)",
        fontSize: 11,
        fontWeight: "400",
        letterSpacing: 0
    },
    group68: {
        position: "absolute",
        flexShrink: 0,
        top: 34,
        height: 15,
        left: 162,
        width: 43
    },
    idaho: {
        position: "absolute",
        flexShrink: 0,
        top: -0.04254150390625,
        left: 12.999908447265625,
        width: 30,
        height: 15,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 11,
        fontWeight: "400",
        letterSpacing: 0
    },
    vector: {
        position: "absolute",
        flexShrink: 0,
        top: 0.95745849609375,
        left: -0.000091552734375,
        width: 9,
        height: 13,
        overflow: "visible"
    },
    group35: {
        position: "absolute",
        flexShrink: 0,
        top: 7,
        height: 22,
        left: 285,
        width: 44
    },
    rectangle35: {
        position: "absolute",
        flexShrink: 0,
        width: 44,
        height: 22,
        backgroundColor: "rgba(31, 31, 41, 1)",
        borderRadius: 5
    },
    _9: {
        position: "absolute",
        flexShrink: 0,
        top: 4,
        left: 5,
        width: 19,
        height: 14,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0
    },
    star3: {
        position: "absolute",
        flexShrink: 0,
        top: 4,
        left: 25,
        width: 14,
        height: 14,
        overflow: "visible"
    },
    savedtrips: {
        position: "absolute",
        flexShrink: 0,
        top: 59,
        right: 93,
        left: 159,
        height: 24,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 24,
        fontWeight: "600",
        letterSpacing: 0,
        lineHeight: 24
    },
    group3453: {
        position: "absolute",
        flexShrink: 0,
        top: 50,
        height: 38,
        left: 37,
        width: 38
    },
    rectangle13: {
        position: "absolute",
        flexShrink: 0,
        top: 811,
        right: 2,
        width: 411,
        height: 59,
        borderTopWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        backgroundColor: "rgba(19, 19, 22, 1)",
        borderColor: "rgba(19, 19, 22, 1)"
    },
    _vector: {
        position: "absolute",
        flexShrink: 0,
        top: 830,
        right: 284,
        bottom: 19,
        left: 113,
        overflow: "visible"
    },
    __vector: {
        position: "absolute",
        flexShrink: 0,
        top: 831,
        right: 37,
        bottom: 19,
        left: 356,
        overflow: "visible"
    },
    group3604: {
        position: "absolute",
        flexShrink: 0,
        top: 831,
        height: 21,
        left: 267,
        width: 36
    },
    ___vector: {
        position: "absolute",
        flexShrink: 0,
        top: 829,
        right: 355,
        bottom: 20,
        left: 38,
        overflow: "visible"
    },
    union: {
        position: "absolute",
        flexShrink: 0,
        top: 828,
        left: 192,
        width: 28,
        height: 27,
        overflow: "visible"
    }
})