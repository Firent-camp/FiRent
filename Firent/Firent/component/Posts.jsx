import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { } from 'react-native-svg';

export default function Posts() {
    return (
        <View style={styles.container}>

            <View style={styles.frame3302}>
                <View style={styles.frame67}>
                    <View style={styles.group3515}>
                        <Text style={styles.sowhoamIInthisworldofvirtualconnectionsitsso}>
                            {`Those who’ve chosen to call Desert Mountain home have so much in common: a love of nature, a sense of adventure, and a strong moral code. Coming together from near and far in the high Sonoran Desert, our Members have found community in our one-of-a-kind culture`}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.frame3302}>
                <View style={styles.frame67}>
                    <View style={styles.group3515}>
                        <Text style={styles.sowhoamIInthisworldofvirtualconnectionsitsso}>
                            {`Work, Travel, Save, Repeat. `}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.frame3302}>
                <View style={styles.frame67}>
                    <View style={styles.group3515}>
                        <Text style={styles.sowhoamIInthisworldofvirtualconnectionsitsso}>
                            {`Can we just skip to the part of my life where I travel the world?`}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.frame3302}>
                <View style={styles.frame67}>
                    <View style={styles.group3515}>
                        <Text style={styles.sowhoamIInthisworldofvirtualconnectionsitsso}>
                            {`The worst thing about being a tourist is having other tourists recognize you as a tourist.`}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.frame3302}>
                <View style={styles.frame67}>
                    <View style={styles.group3515}>
                        <Text style={styles.sowhoamIInthisworldofvirtualconnectionsitsso}>
                            {`We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures we can have if only we seek them with our eyes open.`}
                        </Text>
                    </View>
                </View>
            </View>
            
        </View>

    )
}

const styles = StyleSheet.create({
    frame3302: {
        flexShrink: 0,
        height: 100,
        width: "100%",
        paddingTop: 13.102791786193848,
        marginBottom: 10,
        backgroundColor: "rgba(19, 19, 22, 1)",
        alignItems: "center",
        rowGap: 13.102791786193848,
        paddingHorizontal: 0
    },
    container: {
        flexDirection: 'column', // This sets the flexDirection to 'column'
        alignItems: 'center',
    },
    frame67: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingBottom: 10,

        alignItems: "flex-start",
        rowGap: 8.735194206237793,
        paddingVertical: 0,
        paddingHorizontal: 17.470388412475586
    },
    group3515: {
        flexShrink: 0,
        height: 53,
        width: 382
    },
    sowhoamIInthisworldofvirtualconnectionsitsso: {
        position: "absolute",
        flexShrink: 0,
        left: -0.470458984375,
        width: 350,
        height: 80,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 17.470388412475586,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 26.205583572387695
    }
})