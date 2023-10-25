import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Svg, Circle, Path, Defs, Pattern, Use, Image } from "react-native-svg";
import BottomNavigation from "../component/BottomNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../FireBase";
import ADDRESS_IP from "../API";
export default function HpUserNotConnected() {
  StatusBar.setBackgroundColor("rgba(31, 31, 41, 1)");
  const navigation = useNavigation();
  const [locationData, setLocationData] = useState([]);
  const [images, setImages] = useState([]);
  const [bestTrips, setbestTrips] = useState([]);

  useEffect(() => {
    StatusBar.setBarStyle("light-content");
  }, []);
  function formatDate(dateString) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
  const hp = () => {
    navigation.navigate("Signup");
  };
  const fetchTripsFromBackend = async () => {
    try {
      const response = await fetch(`http://${ADDRESS_IP}:5000/trips`);
      if (response.ok) {
        const data = await response.json();
        const imageUrls = data.map((trip) =>
          trip.images.length > 0 ? trip.images[0].imageId : "default_image_url"
        );
        setImages(imageUrls);
        setLocationData(data);
        setbestTrips(data.slice(0, 3));
      } else {
        console.error("Failed to fetch trips data from the backend.");
      }
    } catch (error) {
      console.error("Error while fetching trips data:", error);
    }
  };
  useEffect(() => {
    fetchTripsFromBackend();
  }, []);

  return (
    <View style={styles.homeUserconnected}>
      <Text style={styles.thebesttours}>{`The best tours`}</Text>
      <View style={styles.frame9}>
        <Text style={styles.suggestionsforyou}>{`Suggestions for you`}</Text>
        <View style={styles.frame8}>
          <View style={styles.vuesaxOutlineArrowright}></View>
        </View>
      </View>

      <View style={styles.frame27}>
        <ScrollView>
          {bestTrips.map((trip, index) => (
            <View key={index} style={styles.tripContainer}>
              <View style={styles.tripContent}>
                <ScrollView>
                  <View style={styles.frame26}>
                    <View style={styles.frame21}>
                      <Text style={styles.westernDesert}>{trip.location}</Text>
                    </View>
                    <View style={styles.frame22}>
                      <View style={styles.vuesaxOutlineCalendar} />
                      <View style={styles.vuesaxOutlineCalendar}>
                        <Svg
                          style={styles._vuesaxOutlineCalendar}
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <Path
                            d="M5.33334 3.83331C5.06001 3.83331 4.83334 3.60665 4.83334 3.33331V1.33331C4.83334 1.05998 5.06001 0.833313 5.33334 0.833313C5.60668 0.833313 5.83334 1.05998 5.83334 1.33331V3.33331C5.83334 3.60665 5.60668 3.83331 5.33334 3.83331Z"
                            fill="#575B66"
                          />
                          <Path
                            d="M10.6667 3.83331C10.3933 3.83331 10.1667 3.60665 10.1667 3.33331V1.33331C10.1667 1.05998 10.3933 0.833313 10.6667 0.833313C10.94 0.833313 11.1667 1.05998 11.1667 1.33331V3.33331C11.1667 3.60665 10.94 3.83331 10.6667 3.83331Z"
                            fill="#575B66"
                          />
                          <Path
                            d="M5.66667 9.66667C5.58 9.66667 5.49333 9.64668 5.41333 9.61335C5.32667 9.58001 5.26 9.53333 5.19333 9.47333C5.07333 9.34667 5 9.18 5 9C5 8.91334 5.02 8.82667 5.05333 8.74667C5.08667 8.66667 5.13333 8.59334 5.19333 8.52668C5.26 8.46668 5.32667 8.42 5.41333 8.38666C5.65333 8.28666 5.95333 8.34001 6.14 8.52668C6.26 8.65334 6.33333 8.82667 6.33333 9C6.33333 9.04 6.32667 9.08668 6.32 9.13335C6.31333 9.17335 6.3 9.21334 6.28 9.25334C6.26667 9.29334 6.24667 9.33334 6.22 9.37334C6.2 9.40667 6.16667 9.44 6.14 9.47333C6.01333 9.59333 5.84 9.66667 5.66667 9.66667Z"
                            fill="#575B66"
                          />
                          <Path
                            d="M8.00001 9.66664C7.91334 9.66664 7.82668 9.64665 7.74668 9.61332C7.66001 9.57999 7.59334 9.53331 7.52668 9.4733C7.40668 9.34664 7.33334 9.17998 7.33334 8.99998C7.33334 8.91331 7.35334 8.82664 7.38668 8.74664C7.42001 8.66664 7.46668 8.59332 7.52668 8.52665C7.59334 8.46665 7.66001 8.41997 7.74668 8.38663C7.98668 8.27997 8.28668 8.33998 8.47334 8.52665C8.59334 8.65332 8.66668 8.82664 8.66668 8.99998C8.66668 9.03998 8.66001 9.08665 8.65334 9.13332C8.64668 9.17332 8.63334 9.21331 8.61334 9.25331C8.60001 9.29331 8.58001 9.33331 8.55334 9.37331C8.53334 9.40664 8.50001 9.43997 8.47334 9.4733C8.34668 9.59331 8.17334 9.66664 8.00001 9.66664Z"
                            fill="#575B66"
                          />
                          <Path
                            d="M10.3333 9.66664C10.2467 9.66664 10.16 9.64665 10.08 9.61332C9.99332 9.57999 9.92666 9.53331 9.85999 9.4733C9.83332 9.43997 9.80666 9.40664 9.77999 9.37331C9.75332 9.33331 9.73332 9.29331 9.71999 9.25331C9.69999 9.21331 9.68666 9.17332 9.67999 9.13332C9.67332 9.08665 9.66666 9.03998 9.66666 8.99998C9.66666 8.82664 9.73999 8.65332 9.85999 8.52665C9.92666 8.46665 9.99332 8.41997 10.08 8.38663C10.3267 8.27997 10.62 8.33998 10.8067 8.52665C10.9267 8.65332 11 8.82664 11 8.99998C11 9.03998 10.9933 9.08665 10.9867 9.13332C10.98 9.17332 10.9667 9.21331 10.9467 9.25331C10.9333 9.29331 10.9133 9.33331 10.8867 9.37331C10.8667 9.40664 10.8333 9.43997 10.8067 9.4733C10.68 9.59331 10.5067 9.66664 10.3333 9.66664Z"
                            fill="#575B66"
                          />
                          <Path
                            d="M5.66667 12C5.58 12 5.49333 11.98 5.41333 11.9467C5.33333 11.9133 5.26 11.8666 5.19333 11.8066C5.07333 11.68 5 11.5066 5 11.3333C5 11.2466 5.02 11.16 5.05333 11.08C5.08667 10.9933 5.13333 10.92 5.19333 10.86C5.44 10.6133 5.89333 10.6133 6.14 10.86C6.26 10.9867 6.33333 11.16 6.33333 11.3333C6.33333 11.5066 6.26 11.68 6.14 11.8066C6.01333 11.9266 5.84 12 5.66667 12Z"
                            fill="#575B66"
                          />
                          <Path
                            d="M8.00001 12C7.82668 12 7.65334 11.9266 7.52668 11.8066C7.40668 11.68 7.33334 11.5066 7.33334 11.3333C7.33334 11.2466 7.35334 11.16 7.38668 11.08C7.42001 10.9933 7.46668 10.92 7.52668 10.86C7.77334 10.6133 8.22668 10.6133 8.47334 10.86C8.53334 10.92 8.58001 10.9933 8.61334 11.08C8.64668 11.16 8.66668 11.2466 8.66668 11.3333C8.66668 11.5066 8.59334 11.68 8.47334 11.8066C8.34668 11.9266 8.17334 12 8.00001 12Z"
                            fill="#575B66"
                          />
                          <Path
                            d="M10.3333 12C10.16 12 9.98666 11.9267 9.85999 11.8067C9.79999 11.7467 9.75332 11.6733 9.71999 11.5867C9.68666 11.5067 9.66666 11.42 9.66666 11.3333C9.66666 11.2467 9.68666 11.16 9.71999 11.08C9.75332 10.9933 9.79999 10.92 9.85999 10.86C10.0133 10.7067 10.2467 10.6333 10.46 10.68C10.5067 10.6867 10.5467 10.7 10.5867 10.72C10.6267 10.7333 10.6667 10.7533 10.7067 10.78C10.74 10.8 10.7733 10.8333 10.8067 10.86C10.9267 10.9867 11 11.16 11 11.3333C11 11.5067 10.9267 11.68 10.8067 11.8067C10.68 11.9267 10.5067 12 10.3333 12Z"
                            fill="#575B66"
                          />
                          <Path
                            d="M13.6667 6.56H2.33334C2.06001 6.56 1.83334 6.33333 1.83334 6.06C1.83334 5.78666 2.06001 5.56 2.33334 5.56H13.6667C13.94 5.56 14.1667 5.78666 14.1667 6.06C14.1667 6.33333 13.94 6.56 13.6667 6.56Z"
                            fill="#575B66"
                          />
                          <Path
                            d="M10.6667 15.1666H5.33333C2.9 15.1666 1.5 13.7666 1.5 11.3333V5.66665C1.5 3.23331 2.9 1.83331 5.33333 1.83331H10.6667C13.1 1.83331 14.5 3.23331 14.5 5.66665V11.3333C14.5 13.7666 13.1 15.1666 10.6667 15.1666ZM5.33333 2.83331C3.42667 2.83331 2.5 3.75998 2.5 5.66665V11.3333C2.5 13.24 3.42667 14.1666 5.33333 14.1666H10.6667C12.5733 14.1666 13.5 13.24 13.5 11.3333V5.66665C13.5 3.75998 12.5733 2.83331 10.6667 2.83331H5.33333Z"
                            fill="#575B66"
                          />
                        </Svg>
                      </View>
                      <Text style={styles._18Jan2021}>
                        {formatDate(trip.date)}
                      </Text>
                    </View>
                    <View style={styles.frame25}>
                      <View style={styles.frame24}>
                        <View style={styles.vuesaxOutlineLocation} />
                        <Text style={styles.egypt}>{trip.duration}</Text>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </View>
              <TouchableOpacity>
                <ImageBackground
                  key={1}
                  style={styles.image}
                  source={{
                    uri: trip.images[0].imageId,
                  }}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.frame4}>
        <View style={styles.frame3}>
          <Text style={styles.mohammadMahdi}>{`Welcome to Firent`}</Text>
          <Text style={styles.welcomeback}>{`Let's explore together`}</Text>
        </View>
      </View>

      <View style={styles._frame6}>
        <View style={styles.group3470}>
          <TouchableOpacity onPress={hp}>
            <View style={styles.logout}>
              <Svg
                style={styles._vector}
                width="20"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
              >
                <Path
                  d="M7.92641 7.42137L8.95031 8.45022L13.046 4.33473L8.95031 0.219231L7.92636 1.24813L10.2741 3.60721H0.0136108V5.06225H10.2741L7.92641 7.42137Z"
                  fill="#AFAFAF"
                />
              </Svg>

              <Svg
                style={styles.__vector}
                width="19"
                height="21"
                viewBox="0 0 19 21"
                fill="none"
              >
                <Path
                  d="M16.804 16.5707C15.1563 18.2363 12.9655 19.1536 10.6352 19.1536C8.30471 19.1536 6.11361 18.2363 4.46565 16.5707C2.81765 14.905 1.92261 12.6903 1.92261 10.3347C1.92261 7.9793 2.81765 5.76474 4.4657 4.09897C6.1137 2.43321 8.30476 1.51581 10.6352 1.51581C12.9654 1.51581 15.1562 2.43321 16.804 4.09893C16.9183 4.21469 17.0294 4.33357 17.1373 4.45545H18.9881C17.1489 1.79011 14.0937 0.04599 10.6352 0.04599C5.01353 0.04599 0.468506 4.65286 0.468506 10.3347C0.468506 16.0172 5.01353 20.6235 10.6352 20.6235C14.0938 20.6235 17.1492 18.8794 18.9882 16.214H17.1374C17.0295 16.336 16.9184 16.4549 16.804 16.5707Z"
                  fill="#AFAFAF"
                />
              </Svg>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.frame20}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {locationData.map((trip, index) => (
            <View key={index} style={styles.tripContainer}>
              {trip.images.length > 0 && (
                <TouchableOpacity>
                  <ImageBackground
                    key={0}
                    style={styles.imageBackgroundStyle}
                    source={{
                      uri: trip.images[0].imageId,
                    }}
                  >
                    <View style={styles.frame14}>
                      <Text style={styles.nusaPedina}>{trip.text}</Text>
                      <View style={styles.frame13}>
                        <View style={styles.____vuesaxOutlineLocation}>
                          <Svg
                            style={styles._____vuesaxOutlineLocation}
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <Path
                              d="M6 7.085C4.935 7.085 4.065 6.22 4.065 5.15C4.065 4.08 4.935 3.22 6 3.22C7.065 3.22 7.935 4.085 7.935 5.155C7.935 6.225 7.065 7.085 6 7.085ZM6 3.97C5.35 3.97 4.815 4.5 4.815 5.155C4.815 5.81 5.345 6.34 6 6.34C6.655 6.34 7.185 5.81 7.185 5.155C7.185 4.5 6.65 3.97 6 3.97Z"
                              fill="white"
                            />
                          </Svg>
                        </View>
                        <Text style={styles.baliIndonesia}>
                          {trip.location}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.frame17}>
                      <Text style={styles._5}>{trip.rating}</Text>
                      <Svg
                        style={styles.__star3}
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <Path
                          d="M4.52447 0.463526C4.67415 0.00287056 5.32585 0.00286996 5.47553 0.463525L6.23483 2.80041C6.30176 3.00642 6.49374 3.1459 6.71036 3.1459H9.1675C9.65186 3.1459 9.85325 3.76571 9.46139 4.05041L7.47352 5.49468C7.29828 5.622 7.22495 5.84768 7.29188 6.0537L8.05118 8.39058C8.20086 8.85123 7.67362 9.23429 7.28176 8.94959L5.29389 7.50532C5.11865 7.378 4.88135 7.378 4.70611 7.50532L2.71824 8.94959C2.32638 9.23429 1.79914 8.85123 1.94882 8.39058L2.70812 6.0537C2.77505 5.84768 2.70172 5.622 2.52648 5.49468L0.538611 4.05041C0.146754 3.76571 0.348141 3.1459 0.832503 3.1459H3.28964C3.50626 3.1459 3.69824 3.00642 3.76517 2.80041L4.52447 0.463526Z"
                          fill="#EBB513"
                        />
                      </Svg>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              )}
            </View>
          ))}
          <View style={styles.frame29} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeUserconnected: {
    flexShrink: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(31, 31, 41, 1)",
    alignItems: "center",
    rowGap: 0,
  },
  tripContent: {
    backgroundColor: "rgba(19, 19, 22, 1)",
    flexShrink: 0,
    // top: 445,
    height: 120,
    width: "160%",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 15,
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
    flex: 1,
  },
  image: {
    flexDirection: "row",

    marginTop: -110,
    resizeMode: "cover",
    left: 180,
    width: 140,
    height: 100,
  },
  tripContainer: {
    marginRight: 20,
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "175%",
    paddingHorizontal: 20,
    width: "100%",
    height: 90,
  },
  vector: {
    flexShrink: 0,
    overflow: "visible",
  },
  _vector: {
    flexShrink: 0,
    overflow: "visible",
  },
  group3600: {
    flexShrink: 0,
    width: 36,
  },
  __vector: {
    flexShrink: 0,
    overflow: "visible",
  },
  group3595: {
    flexShrink: 0,
    width: 28,
  },

  frame30: {
    top: 702,
    flexShrink: 0,
    width: 381,
    backgroundColor: "rgba(19, 19, 22, 1)",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
    padding: 12,
    borderRadius: 10,
  },
  unsplashUTbcrtjp18g: {
    flexShrink: 0,
    width: 88,
    height: 88,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderRadius: 6,
  },
  frame26: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 12,
  },
  frame21: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 48,
  },
  rockeymountain: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    letterSpacing: 0,
  },
  group35: {
    flexShrink: 0,
    height: 22,
    width: 44,
  },
  rectangle35: {
    position: "absolute",
    flexShrink: 0,
    width: 44,
    height: 22,
    backgroundColor: "rgba(31, 31, 41, 1)",
    borderRadius: 5,
  },
  _8: {
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
    letterSpacing: 0,
  },
  star3: {
    position: "absolute",
    flexShrink: 0,
    top: 4,
    left: 25,
    width: 14,
    height: 14,
    overflow: "visible",
  },
  frame22: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  vuesaxOutlineCalendar: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0,
  },
  _vuesaxOutlineCalendar: {
    position: "absolute",
    flexShrink: 0,
    height: 16,
    width: 16,
  },
  _20Jan2021: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    letterSpacing: 0,
  },
  frame25: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 26,
  },
  frame23: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  vuesaxOutlineDollarsquare: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0,
  },
  _vuesaxOutlineDollarsquare: {
    position: "absolute",
    flexShrink: 0,
    height: 16,
    width: 16,
  },
  x_vuesaxOutlineDollarsquare: {
    position: "absolute",
    flexShrink: 0,
    height: 16,
    width: 16,
  },
  day: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    letterSpacing: 0,
  },
  frame24: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
  },
  vuesaxOutlineLocation: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0,
  },
  _vuesaxOutlineLocation: {
    position: "absolute",
    flexShrink: 0,
    height: 16,
    width: 16,
  },
  canada: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    letterSpacing: 0,
  },
  frame7: {
    position: "absolute",
    flexShrink: 0,
    top: 108,
    left: 15,
    right: 15,
    backgroundColor: "rgba(19, 19, 22, 1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 218,
    padding: 12,
    borderRadius: 10,
  },
  frame6: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  iconlyLightSearch: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0,
  },
  search: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    height: 19,
    left: 3,
    width: 19,
  },
  _search: {
    width: 300,
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(87, 91, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0,
  },
  iconlyLightFilter: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0,
  },
  thebesttours: {
    position: "absolute",
    flexShrink: 0,
    top: 420,
    left: 20,
    width: 150,
    height: 21,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    letterSpacing: 0,
  },
  frame9: {
    position: "absolute",
    flexShrink: 0,
    top: 170,
    left: 24,
    right: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 111,
  },
  suggestionsforyou: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    letterSpacing: 0,
  },
  frame8: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
  },
  seeall: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0,
  },
  vuesaxOutlineArrowright: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0,
  },
  _vuesaxOutlineArrowright: {
    position: "absolute",
    flexShrink: 0,
    height: 16,
    width: 16,
  },
  frame27: {
    flex: 1,
    position: "absolute",
    flexShrink: 0,
    top: 445,
    left: 16,
    right: 16,
    // backgroundColor: "rgba(19, 19, 22, 1)",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  unsplashwkMd_DylG8I: {
    flexShrink: 0,
    width: 88,
    height: 88,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderRadius: 6,
  },
  frame26: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 12,
  },
  frame21: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 48,
  },
  westernDesert: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    letterSpacing: 0,
  },
  group35: {
    flexShrink: 0,
    height: 22,
    width: 44,
  },
  rectangle35: {
    position: "absolute",
    flexShrink: 0,
    width: 44,
    height: 22,
    backgroundColor: "rgba(31, 31, 41, 1)",
    borderRadius: 5,
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
    letterSpacing: 0,
  },
  star3: {
    position: "absolute",
    flexShrink: 0,
    top: 5.5,
    left: 27,
    width: 14,
    height: 14,
    overflow: "visible",
  },
  frame22: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  vuesaxOutlineCalendar: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0,
  },
  _vuesaxOutlineCalendar: {
    position: "absolute",
    flexShrink: 0,
    height: 16,
    width: 16,
  },
  _18Jan2021: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    letterSpacing: 0,
  },
  frame25: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 26,
  },
  frame23: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  vuesaxOutlineDollarsquare: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0,
  },
  _vuesaxOutlineDollarsquare: {
    position: "absolute",
    flexShrink: 0,
    height: 16,
    width: 16,
  },
  frame24: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
  },
  vuesaxOutlineLocation: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0,
  },
  _vuesaxOutlineLocation: {
    position: "absolute",
    flexShrink: 0,
    height: 16,
    width: 16,
  },
  egypt: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    letterSpacing: 0,
  },
  frame28: {
    position: "absolute",
    flexShrink: 0,
    top: 573,
    left: 16,
    right: 16,
    backgroundColor: "rgba(19, 19, 22, 1)",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
    padding: 12,
    borderRadius: 10,
  },
  unsplashUTbcrtjp18g: {
    flexShrink: 0,
    width: 88,
    height: 88,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderRadius: 6,
  },
  _frame26: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 12,
  },
  _frame21: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 48,
  },
  rockeymountain: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    letterSpacing: 0,
  },
  _group35: {
    flexShrink: 0,
    height: 22,
    width: 44,
  },
  _rectangle35: {
    position: "absolute",
    flexShrink: 0,
    width: 44,
    height: 22,
    backgroundColor: "rgba(31, 31, 41, 1)",
    borderRadius: 5,
  },
  _89: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    left: 5,
    width: 19,
    height: 16,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0,
  },
  _87: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    left: 5,
    width: 19,
    height: 16,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0,
  },
  _star3: {
    position: "absolute",
    flexShrink: 0,
    top: 4,
    left: 25,
    width: 14,
    height: 14,
    overflow: "visible",
  },
  _frame22: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  __vuesaxOutlineCalendar: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0,
  },
  ___vuesaxOutlineCalendar: {
    position: "absolute",
    flexShrink: 0,
    height: 16,
    width: 16,
  },
  _20Jan2021: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    letterSpacing: 0,
  },
  _frame25: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 26,
  },
  _frame23: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  __vuesaxOutlineDollarsquare: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0,
  },
  ___vuesaxOutlineDollarsquare: {
    position: "absolute",
    flexShrink: 0,
    height: 16,
    width: 16,
  },
  _day: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    letterSpacing: 0,
  },
  _frame24: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
  },
  __vuesaxOutlineLocation: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0,
  },
  ___vuesaxOutlineLocation: {
    position: "absolute",
    flexShrink: 0,
    height: 16,
    width: 16,
  },
  canada: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    letterSpacing: 0,
  },
  frame4: {
    position: "absolute",
    flexShrink: 0,
    top: 44,
    left: 24,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  ellipse9: {
    flexShrink: 0,
    width: 40,
    height: 40,
    overflow: "visible",
  },
  frame3: {
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 4,
    top: 20,
  },
  welcomeback: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(87, 91, 102, 1)",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0,
  },
  mohammadMahdi: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0,
  },
  frame5: {
    position: "absolute",
    flexShrink: 0,
    top: 50,
    left: 300,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: "rgba(185, 193, 217, 1)",
    borderRadius: 10,
  },
  vector: {
    flexShrink: 0,
    width: 25,
    height: 22,
    overflow: "visible",
  },
  _frame6: {
    position: "absolute",
    flexShrink: 0,
    top: 50,
    left: 350,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: "rgba(185, 193, 217, 1)",
    borderRadius: 10,
  },
  group3470: {
    flexShrink: 0,
    height: 20,
    width: 22,
  },
  logout: {
    position: "absolute",
    flexShrink: 0,
    height: 30,
    width: 22,
    alignItems: "flex-start",
    rowGap: 0,
    // top: 6,
  },
  _vector: {
    position: "absolute",
    flexShrink: 0,
    top: 6,
    right: 0,
    bottom: 8,
    left: 9,
    overflow: "visible",
  },
  __vector: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 2,
    bottom: 1,
    left: 1,
    overflow: "visible",
  },
  frame20: {
    position: "absolute",
    flexShrink: 1,
    top: 225,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 16,
  },
  frame10: {
    marginLeft: 8,
    marginRight: 3,
    flexShrink: 0,
    height: 160,
    width: 140,
  },
  unsplashoR0uERTVyD0: {
    position: "absolute",
    flexShrink: 0,
    width: 140,
    height: 160,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderRadius: 15,
  },
  _unsplashoR0uERTVyD0: {
    position: "absolute",
    flexShrink: 0,
    width: 140,
    height: 160,
    borderRadius: 15,
  },
  frame14: {
    position: "absolute",
    flexShrink: 0,
    top: 118,
    left: 12,
    alignItems: "flex-start",
    justifyContent: "center",
    rowGap: 5,
  },
  nusaPedina: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(233, 244, 242, 0.72)",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0,
  },
  frame13: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  ____vuesaxOutlineLocation: {
    flexShrink: 0,
    height: 12,
    width: 12,
    alignItems: "flex-start",
    rowGap: 0,
  },
  _____vuesaxOutlineLocation: {
    position: "absolute",
    flexShrink: 0,
    height: 12,
    width: 12,
  },
  baliIndonesia: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    letterSpacing: 0,
  },
  frame17: {
    position: "absolute",
    flexShrink: 0,
    top: 8,
    right: 8,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 2,
    padding: 4,
    borderRadius: 5,
  },
  _5: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    letterSpacing: 0,
  },
  __star3: {
    flexShrink: 0,
    width: 12,
    height: 12,
    overflow: "visible",
  },
  frame11: {
    marginLeft: 10,
    flexShrink: 0,
    height: 160,
    width: 140,
    alignItems: "flex-start",
    rowGap: 0,
  },
  unsplashESkw2ayO2As: {
    position: "absolute",
    flexShrink: 0,
    width: 140,
    height: 160,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderRadius: 15,
  },
  __unsplashoR0uERTVyD0: {
    position: "absolute",
    flexShrink: 0,
    width: 140,
    height: 160,
    borderRadius: 15,
  },
  frame16: {
    position: "absolute",
    flexShrink: 0,
    top: 118,
    left: 12,
    alignItems: "flex-start",
    justifyContent: "center",
    rowGap: 5,
  },
  imageBackgroundStyle: {
    width: 175,
    height: 160,
  },
  wachauForest: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0,
  },
  frame15: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  ______vuesaxOutlineLocation: {
    flexShrink: 0,
    height: 12,
    width: 12,
    alignItems: "flex-start",
    rowGap: 0,
  },
  _______vuesaxOutlineLocation: {
    position: "absolute",
    flexShrink: 0,
    height: 12,
    width: 12,
  },
  riverDanubeAustria: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    letterSpacing: 0,
  },
  _frame17: {
    position: "absolute",
    flexShrink: 0,
    top: 8,
    height: 20,
    right: 8,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 2,
    padding: 4,
    borderRadius: 5,
  },
  __8: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    letterSpacing: 0,
  },
  ___star3: {
    flexShrink: 0,
    width: 12,
    height: 12,
    overflow: "visible",
  },
  frame12: {
    marginLeft: 10,
    flexShrink: 0,
    height: 160,
    width: 140,
    alignItems: "flex-start",
    rowGap: 0,
  },
  ___unsplashoR0uERTVyD0: {
    position: "absolute",
    flexShrink: 0,
    width: 140,
    height: 160,
    borderRadius: 15,
  },
  unsplashCgoRzWX4CDg: {
    position: "absolute",
    flexShrink: 0,
    width: 140,
    height: 160,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderRadius: 15,
  },
  ____unsplashoR0uERTVyD0: {
    position: "absolute",
    flexShrink: 0,
    width: 140,
    height: 160,
    borderRadius: 15,
  },
  __frame17: {
    position: "absolute",
    flexShrink: 0,
    top: 8,
    right: 8,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 2,
    padding: 4,
    borderRadius: 5,
  },
  ___8: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    letterSpacing: 0,
  },
  frame19: {
    position: "absolute",
    flexShrink: 0,
    top: 118,
    left: 12,
    alignItems: "flex-start",
    rowGap: 5,
  },
  tromso: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0,
  },
  frame18: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 4,
  },
  ________vuesaxOutlineLocation: {
    flexShrink: 0,
    height: 12,
    width: 12,
    alignItems: "flex-start",
    rowGap: 0,
  },
  _________vuesaxOutlineLocation: {
    position: "absolute",
    flexShrink: 0,
    height: 12,
    width: 12,
  },
  norway: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    letterSpacing: 0,
  },
  frame29: {
    flexShrink: 0,
    height: 160,
    width: 6,
    alignItems: "flex-start",
    rowGap: 0,
  },
  group3482: {
    flex: 1,
    flexShrink: 0,
    top: "93%",
    height: 61,
    width: "100%",
  },
  rectangle12: {
    position: "absolute",
    flexShrink: 0,
    width: 375,
    height: 61,
    overflow: "visible",
  },
  group3476: {
    position: "absolute",
    flexShrink: 0,
    top: 19,
    height: 24,
    left: 24,
    width: 329,
  },
  group36: {
    position: "absolute",
    flexShrink: 0,
    height: 24,
    width: 329,
  },
  image12: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    width: 23,
    height: 23,
  },
  ___vector: {
    position: "absolute",
    flexShrink: 0,
    left: 78,
    width: 18,
    height: 23,
    overflow: "visible",
  },
  image9: {
    position: "absolute",
    flexShrink: 0,
    left: 151,
    width: 23,
    height: 23,
  },
  ____vector: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    left: 307,
    width: 22,
    height: 22,
    overflow: "visible",
  },
  group1: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 22,
    left: 226,
    width: 34,
  },
});
