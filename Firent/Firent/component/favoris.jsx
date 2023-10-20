import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Svg, Rect, Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

export default function Favoris() {
    const navigation = useNavigation();

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

            <View style={styles.group3605}>
                <View style={styles.group38}>
                    <Svg style={styles.group25} width="342" height="102" viewBox="0 0 342 102" fill="none" >
                        <Rect x="0.5" y="0.5" width="341" height="101" rx="19.5" fill="#131316" stroke="#131316" />
                    </Svg>
                    <Image
                        style={styles.rectangle7}
                        source={{ uri: "https://www.tunisiatourism.info/thumbs/780-420-pages-1634903451-23649783.jpg" }}
                    />
                    <Text style={styles.redFishLake}>
                        {`RedFish Lake`}
                    </Text>
                    <View style={styles.search}>
                        <TouchableOpacity style={styles.group20} onPress={() => navigation.navigate("Cart")}>
                            <View style={styles.rectangle3} />
                            <Text style={styles.bookNow}>
                                {`Book Now `}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.$40Visit}>
                        {`$40`}<Text style={{ "fontSize": 12, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "color": "rgba(104, 109, 205, 1)" }}>{` `}</Text><Text style={{ "fontSize": 12, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "color": "rgba(255, 255, 255, 1)" }}>{`/`}</Text><Text style={{ "fontSize": 10, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "color": "rgba(255, 255, 255, 1)" }}>{`Visit`}</Text>
                    </Text>
                    <View style={styles.group68}>
                        <Text style={styles.idaho}>
                            {`Idaho`}
                        </Text>
                        <Svg style={styles.vector} width="10" height="13" viewBox="0 0 10 13" fill="none" >
                            <Path d="M4.6732 6.3804C4.99448 6.3804 5.26962 6.25534 5.49861 6.00523C5.7272 5.75554 5.8415 5.45524 5.8415 5.10432C5.8415 4.7534 5.7272 4.45288 5.49861 4.20277C5.26962 3.95308 4.99448 3.82824 4.6732 3.82824C4.35192 3.82824 4.07698 3.95308 3.84838 4.20277C3.61939 4.45288 3.5049 4.7534 3.5049 5.10432C3.5049 5.45524 3.61939 5.75554 3.84838 6.00523C4.07698 6.25534 4.35192 6.3804 4.6732 6.3804ZM4.6732 12.5215C4.59531 12.5215 4.51743 12.5056 4.43954 12.4737C4.36165 12.4418 4.2935 12.3992 4.23509 12.3461C2.81366 10.9743 1.75245 9.70097 1.05147 8.52613C0.35049 7.35086 0 6.25279 0 5.23193C0 3.63683 0.469852 2.36606 1.40955 1.41964C2.34887 0.473213 3.43675 0 4.6732 0C5.90965 0 6.99753 0.473213 7.93685 1.41964C8.87655 2.36606 9.3464 3.63683 9.3464 5.23193C9.3464 6.25279 8.99591 7.35086 8.29493 8.52613C7.59395 9.70097 6.53275 10.9743 5.11131 12.3461C5.0529 12.3992 4.98475 12.4418 4.90686 12.4737C4.82897 12.5056 4.75109 12.5215 4.6732 12.5215Z" fill="#575B66" />
                        </Svg>

                    </View>
                </View>
                <View style={styles.group35}>
                    <View style={styles.rectangle35} />
                    <Text style={styles._9}>
                        {`4.9`}
                    </Text>
                    <Svg style={styles.star3} width="12" height="11" viewBox="0 0 12 11" fill="none" >
                        <Path d="M5.52447 0.463525C5.67415 0.0028693 6.32585 0.00287002 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z" fill="#EBB513" />
                    </Svg>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    group3605: {
        flexShrink: 0,
        height: 102,
        width: 342,
        marginBottom: 10
    },
    container: {
        flexDirection: 'column',
        top: 130,
        height: "100%",
        left: 37,
        marginBottom: 190,
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
        top: 6,
        left: 5,
        width: 141,
        height: 90,
        borderRadius: 20
    },
    redFishLake: {
        position: "absolute",
        flexShrink: 0,
        top: 11,
        left: 161,
        width: 150,
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
        top: 3,
        left: 21,
        width: 60,
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
        left: 13,
        width: 80,
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
        top: 2,
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
        top: 5,
        left: 25,
        width: 14,
        height: 14,
        overflow: "visible"
    }
})