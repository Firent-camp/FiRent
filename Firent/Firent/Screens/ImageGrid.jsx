import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { } from 'react-native-svg';
export default function ImageGrid() {
    return (
<View style={styles.row}>
            <Image
                style={styles.__images}
                source={{ uri: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg" }}
            />
            <Image
                style={styles.__images}
                source={{ uri: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg" }}
            />
            <Image
                style={styles.__images}
                source={{ uri: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg" }}
            />
            
           
            </View>
    )
}
const styles = StyleSheet.create({
    __images: {
        margin: 10,
        width: 108,
        height: 141,
        borderRadius: 15
        
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})