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
                source={{ uri: "https://www.planetware.com/wpimages/2021/06/tunisia-travel-guide-inspirational-ideas-planning-trip-tunisia-camel-caraval-sahara.jpg" }}
            />
            <Image
                style={styles.__images}
                source={{ uri: "https://www.civitatis.com/f/tunez/tunez/tunez-m.jpg" }}
            />
            <Image
                style={styles.__images}
                source={{ uri: "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/53/13/2b.jpg" }}
            />
            <Image
                style={styles.__images}
                source={{ uri: "https://againstthecompass.com/wp-content/uploads/2020/04/tunisia-travel-guide.jpg" }}
            />
            <Image
                style={styles.__images}
                source={{ uri: "https://thetunisianway.com/wp-content/uploads/2021/08/Tunisian-sweets-pastry-popular-traditional-samsa.jpg" }}
            />
            <Image
                style={styles.__images}
                source={{ uri: "https://www.saharansky.com/file/2019/07/SAHARANSKY-NEWYEAR1.jpg" }}
            />
            <Image
                style={styles.__images}
                source={{ uri: "https://www.tunisiatourism.info/uploads/editor/90048507-1550071551.jpg" }}
            />
            <Image
                style={styles.__images}
                source={{ uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/9a/49/9e/caption.jpg?w=500&h=400&s=1" }}
            />
            <Image
                style={styles.__images}
                source={{ uri: "https://i.pinimg.com/originals/cd/f2/83/cdf283e3e4dbe2f2a864805996258244.jpg" }}
            />
            <Image
                style={styles.__images}
                source={{ uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/2c/1f/0c/20190117-115244-largejpg.jpg?w=1200&h=900&s=1" }}
            />
            <Image
                style={styles.__images}
                source={{ uri: "https://travelshelper.com/wp-content/uploads/2021/11/Tunis-Travel-Guide-Travel-S-Helper.jpg" }}
            />
            <Image
                style={styles.__images}
                source={{ uri: "https://globalgrasshopper.com/wp-content/uploads/2014/02/Sidi-Bou-Said-1-1000x552.jpg" }}
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