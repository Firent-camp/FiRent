import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Svg, Rect, Path } from "react-native-svg";
import { ScrollView } from "react-native";
import OurTrips from "../component/OurTrips";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Trips({ navigation, route }) {
  const { locationData } = route.params;
  const [data, setData] = useState(locationData);

  return (
    <View style={styles.trips}>
      <View style={styles.group3612}>
        
        <View style={styles.group3612}>
          <View style={styles.group3}>
            <Text style={styles.ourtrips}>{`Our trips`}</Text>
          </View>
          
        </View>
      </View>
      <SafeAreaView style={styles.scrollView}>
        <TouchableOpacity
          style={styles.frame50}
          onPress={() => {
            navigation.navigate("HomeUserconnected");
          }}
        >
          <View style={styles.vuesaxOutlineArrowleft}>
            <Svg
              style={styles._vuesaxOutlineArrowleft}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <Path
                d="M15 20.67C14.81 20.67 14.62 20.6 14.47 20.45L7.95003 13.93C6.89003 12.87 6.89003 11.13 7.95003 10.07L14.47 3.55C14.76 3.26 15.24 3.26 15.53 3.55C15.82 3.84 15.82 4.32 15.53 4.61L9.01003 11.13C8.53003 11.61 8.53003 12.39 9.01003 12.87L15.53 19.39C15.82 19.68 15.82 20.16 15.53 20.45C15.38 20.59 15.19 20.67 15 20.67Z"
                fill="white"
              />
            </Svg>
          </View>
        </TouchableOpacity>
        <ScrollView>
          <OurTrips data={data} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  trips: {
    flexShrink: 0,
    height: 900,
    width: "100%",
    backgroundColor: "rgba(31, 31, 41, 1)",
    alignItems: "flex-start",
    rowGap: 0,
    borderWidth: 3,
    borderColor: "rgba(30, 30, 30, 1)",
  },
  _vuesaxOutlineArrowleft: {
    position: "absolute",
    flexShrink: 0,
    height: 24,
    width: 24,
  },
  vuesaxOutlineArrowleft: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0,
  },
  frame50: {
    position: "absolute",
    flexShrink: 0,
    top: 35,
    left: 16,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 10,
    padding: 8,
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 1)",
    borderRadius: 10,
  },
  scrollView: {
    paddingTop: 70,
    flex: 1,
    width: "100%",
    marginBottom: 20,
    height: "100%",
  },
  group3612: {
    position: "absolute",
    flexShrink: 0,
    top: 20,
    height: 38,
    left: 15,
    width: 240,
  },

  group3: {
    position: "absolute",
    flexShrink: 0,
    top: 5,
    height: 24,
    left: 120,
    width: 120,
  },
  ourtrips: {
    position: "absolute",
    flexShrink: 0,
    top: -0.44927978515625,
    width: 120,
    height: 24,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 24,
  },
});
