import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Svg, Circle, Path, Defs, Pattern, Use, Image } from "react-native-svg";
import BottomNavigation from "../component/BottomNavigation";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../FireBase";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";
import ADDRESS_IP from "../API";
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log('Data stored successfully:', key, value);
  } catch (e) {
    console.error('Error storing data:', e);
  }
};
export default function HomeUserconnected({ route }) {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const { user  } = route.params;
  
  const [users, setUsers] = useState([]);
  const [userDetail, setUserDetail] = useState({});
  const [locationData, setLocationData] = useState([]);
  const [images, setImages] = useState([]);
  const [bestTrips, setbestTrips] = useState([]);
  storeData('user', user);
  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `http://${ADDRESS_IP}:5000/users/firebase/${user}`
      );
      if (response.status === 200) {
        setUserDetail(response.data);
      } else {
        console.error("Failed to fetch user data. Status:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const logout1 = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      navigation.navigate("Splash");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  function formatDate(dateString) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
  const navigateToScreen5 = () => {
    navigation.navigate("EditProfile", { details: userDetail });
  };
  StatusBar.setBackgroundColor("rgba(31, 31, 41, 1)");
  StatusBar.setBarStyle("light-content");
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

  useEffect(() => {
    if (isFocused) {
      fetchUserData();
    }
  }, [isFocused]);
 

  return (
    <View style={styles.homeUserconnected}>
      <View style={styles.frame7}>
        <View style={styles.frame6}>
         
          
        </View>
        <View style={styles.iconlyLightFilter} />
      </View>
      <Text style={styles.thebesttours}>{`The best tours`}</Text>
      <View style={styles.frame9}>
        <Text style={styles.suggestionsforyou}>{`Suggestions for you`}</Text>
        <View style={styles.frame8}>
          <View>
          <TouchableOpacity onPress={() => navigation.navigate("Trips", {  locationData })}>
            <Text style={styles.seeall}>See all</Text>
          </TouchableOpacity>
          </View>
          
          <View style={styles.vuesaxOutlineArrowright}>
            <Svg
              style={styles._vuesaxOutlineArrowright}
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <Path
                d="M5.93998 14.28C5.81332 14.28 5.68665 14.2333 5.58665 14.1333C5.39332 13.94 5.39332 13.62 5.58665 13.4267L9.93332 9.08C10.2533 8.76 10.2533 8.24 9.93332 7.92L5.58665 3.57333C5.39332 3.38 5.39332 3.06 5.58665 2.86666C5.77998 2.67333 6.09998 2.67333 6.29332 2.86666L10.64 7.21333C10.98 7.55333 11.1733 8.01333 11.1733 8.5C11.1733 8.98666 10.9866 9.44666 10.64 9.78666L6.29332 14.1333C6.19332 14.2267 6.06665 14.28 5.93998 14.28Z"
                fill="white"
              />
            </Svg>
          </View>
        </View>
      </View>

      <View style={styles.frame27}>
        <ScrollView>
          {bestTrips.map((trip, index) => (
            <View style={styles.frame26}>
              <View style={styles.test}>
                <View style={styles.frame21}>
                  <Text style={styles.westernDesert}>{trip.location}</Text>
                  <View style={styles.group35}>
                    <View style={styles.rectangle35} />
                    <Text style={styles._9}>{trip.rating}</Text>
                    <Svg
                      style={styles.star3}
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                    >
                      <Path
                        d="M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z"
                        fill="#EBB513"
                      />
                    </Svg>
                  </View>
                </View>

                <View style={styles.frame22}>
                  {/* RN-Flow:: can be replaced with <VuesaxOutlineCalendar /> */}
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
                    {" "}
                    {formatDate(trip.date)}
                  </Text>
                </View>

                <View style={styles.frame25}>
                  <View style={styles.frame23}>
                    {/* RN-Flow:: can be replaced with <VuesaxOutlineDollarsquare /> */}
                    <View style={styles.vuesaxOutlineDollarsquare}>
                      <Svg
                        style={styles._vuesaxOutlineDollarsquare}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <Path
                          d="M8.93335 11.6133H7.26001C6.16668 11.6133 5.28001 10.6933 5.28001 9.55999C5.28001 9.28666 5.50668 9.05999 5.78001 9.05999C6.05335 9.05999 6.28001 9.28666 6.28001 9.55999C6.28001 10.14 6.72001 10.6133 7.26001 10.6133H8.93335C9.36668 10.6133 9.72668 10.2267 9.72668 9.75999C9.72668 9.17999 9.52001 9.06666 9.18001 8.94666L6.49335 7.99999C5.97335 7.81999 5.27335 7.43332 5.27335 6.23999C5.27335 5.21332 6.08001 4.38666 7.06668 4.38666H8.74001C9.83335 4.38666 10.72 5.30666 10.72 6.43999C10.72 6.71332 10.4933 6.93999 10.22 6.93999C9.94668 6.93999 9.72001 6.71332 9.72001 6.43999C9.72001 5.85999 9.28001 5.38666 8.74001 5.38666H7.06668C6.63335 5.38666 6.27335 5.77332 6.27335 6.23999C6.27335 6.81999 6.48001 6.93332 6.82001 7.05332L9.50668 7.99999C10.0267 8.17999 10.7267 8.56666 10.7267 9.75999C10.72 10.78 9.92001 11.6133 8.93335 11.6133Z"
                          fill="#575B66"
                        />
                        <Path
                          d="M8 12.5C7.72667 12.5 7.5 12.2733 7.5 12V4C7.5 3.72667 7.72667 3.5 8 3.5C8.27333 3.5 8.5 3.72667 8.5 4V12C8.5 12.2733 8.27333 12.5 8 12.5Z"
                          fill="#575B66"
                        />
                        <Path
                          d="M10 15.1666H6.00001C2.38001 15.1666 0.833344 13.62 0.833344 9.99998V5.99998C0.833344 2.37998 2.38001 0.833313 6.00001 0.833313H10C13.62 0.833313 15.1667 2.37998 15.1667 5.99998V9.99998C15.1667 13.62 13.62 15.1666 10 15.1666ZM6.00001 1.83331C2.92668 1.83331 1.83334 2.92665 1.83334 5.99998V9.99998C1.83334 13.0733 2.92668 14.1666 6.00001 14.1666H10C13.0733 14.1666 14.1667 13.0733 14.1667 9.99998V5.99998C14.1667 2.92665 13.0733 1.83331 10 1.83331H6.00001Z"
                          fill="#575B66"
                        />
                      </Svg>
                    </View>
                    <Text style={styles.day}>
                      {trip.duration}
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "400",
                          textAlign: "left",
                          letterSpacing: 0,
                          color: "rgba(255, 255, 255, 1)",
                        }}
                      >{` `}</Text>
                    </Text>
                  </View>
                  <View style={styles.frame24}>
                    {/* RN-Flow:: can be replaced with <VuesaxOutlineLocation /> */}
                    <View style={styles.vuesaxOutlineLocation}>
                      <Svg
                        style={styles._vuesaxOutlineLocation}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <Path
                          d="M8.00001 9.44667C6.58001 9.44667 5.42001 8.29334 5.42001 6.86667C5.42001 5.44 6.58001 4.29333 8.00001 4.29333C9.42001 4.29333 10.58 5.44667 10.58 6.87334C10.58 8.3 9.42001 9.44667 8.00001 9.44667ZM8.00001 5.29333C7.13335 5.29333 6.42001 6 6.42001 6.87334C6.42001 7.74667 7.12668 8.45334 8.00001 8.45334C8.87335 8.45334 9.58001 7.74667 9.58001 6.87334C9.58001 6 8.86668 5.29333 8.00001 5.29333Z"
                          fill="#575B66"
                        />
                        <Path
                          d="M8 15.1733C7.01333 15.1733 6.01999 14.8 5.24666 14.06C3.28 12.1666 1.10666 9.14665 1.92666 5.55331C2.66666 2.29331 5.51333 0.833313 8 0.833313C8 0.833313 8 0.833313 8.00666 0.833313C10.4933 0.833313 13.34 2.29331 14.08 5.55998C14.8933 9.15331 12.72 12.1666 10.7533 14.06C9.97999 14.8 8.98666 15.1733 8 15.1733ZM8 1.83331C6.06 1.83331 3.56666 2.86665 2.90666 5.77331C2.18666 8.91331 4.16 11.62 5.94666 13.3333C7.1 14.4466 8.90666 14.4466 10.06 13.3333C11.84 11.62 13.8133 8.91331 13.1067 5.77331C12.44 2.86665 9.93999 1.83331 8 1.83331Z"
                          fill="#575B66"
                        />
                      </Svg>
                    </View>
                    <Text style={styles.egypt}>{trip.location}</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity>
                <ImageBackground
                  key={0}
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
        <TouchableOpacity onPress={navigateToScreen5}>
          <Svg
            style={styles.ellipse9}
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <Circle
              cx="20"
              cy="20"
              r="19.5"
              fill="url(#pattern0)"
              stroke="#575B66"
            />
            <Defs>
              <Pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <Use
                  xlinkHref="#image0_1_880"
                  transform="translate(0 -0.00857499) scale(0.000330688)"
                />
              </Pattern>
              <Image
                id="image0_1_880"
                width="3024"
                height="4032"
                xlinkHref={userDetail.image}
              />
            </Defs>
          </Svg>
        </TouchableOpacity>

        <View style={styles.frame3}>
          <Text style={styles.welcomeback}>{`Welcome back`}</Text>
          <Text style={styles.mohammadMahdi}>
            {`${userDetail.userName} ${userDetail.lastName}`}
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.frame5} onPress={() => {
              navigation.navigate("Favorites",{user});
            }}>
        <Svg
          style={styles.vector}
          width="22"
          height="22"
          viewBox="0 0 25 22"
          fill="none"
        >
          <Path
            d="M11.613 20.0868L11.6123 20.0862C8.38341 17.2779 5.74447 14.979 3.90692 12.8228C2.07412 10.6721 1.09668 8.72862 1.09668 6.64C1.09668 3.23155 3.87734 0.54599 7.47168 0.54599C9.50312 0.54599 11.4555 1.45554 12.7241 2.87314L13.0967 3.28953L13.4693 2.87314C14.7378 1.45554 16.6902 0.54599 18.7217 0.54599C22.316 0.54599 25.0967 3.23155 25.0967 6.64C25.0967 8.72862 24.1192 10.6721 22.2864 12.8228C20.4489 14.979 17.81 17.2779 14.5811 20.0862L14.5803 20.0868L13.0967 21.3822L11.613 20.0868Z"
            stroke="#AFAFAF"
          />
        </Svg>
      </TouchableOpacity>

      <View style={styles._frame6}>
        <View style={styles.group3470}>
          <TouchableOpacity onPress={logout1}>
            <View style={styles.logout}>
              <Svg
                style={styles._vector}
                width="14"
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
              {trip.images.length > 0 && ( // Check if the images array is not empty
                <TouchableOpacity
                  key={0} // Using a unique key for the image
                  onPress={() =>
                    navigation.navigate("LocationDetails", { trip: trip ,user})
                  }
                >
                  <ImageBackground
                    key={0} // Using a unique key for the image
                    style={styles.imageBackgroundStyle}
                    source={{
                      uri: trip.images[0].imageId,
                    }}
                  >
                    <View style={styles._unsplashoR0uERTVyD0} />
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
      <View style={styles.nav}>
      <BottomNavigation details={userDetail} locationData={locationData} />
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
  nav: {
    marginTop: 120,
  },
  test: {
    marginTop: 45,
    left: -30,

  },
  image: {
    flexDirection: "row",
    marginTop: -80,
    resizeMode: "cover",
    left: -165,
    width: 120,
    height: 80,
  },
  tripContainer: {
    marginRight: 15,
    // Add any desired margin or padding
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "100%",
    paddingHorizontal: 50,
    width: "100%",
    height: 9,
    marginTop: 45,
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
    // backgroundColor: "rgba(19, 19, 22, 1)",
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
    rowGap: 10,
    backgroundColor: "rgba(19, 19, 22, 1)",
  },
  frame21: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 48,
    left: 100,
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
    left: 20,
    right: 15,
    // backgroundColor: "rgba(19, 19, 22, 1)",
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
    top: 404,
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
    top: 180,
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
    position: "absolute",
    flexShrink: 0,
    top: 400,
    left: 14,
    right: 16,

    // backgroundColor: "rgba(19, 19, 22, 1)",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 15,
    padding: 15,
    borderRadius: 12,
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
    marginLeft: 170,

    //best tripp cader
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
    backgroundColor: "rgba(19, 19, 22, 1)",
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
    height: 22,
    width: 22,
  },
  logout: {
    position: "absolute",
    flexShrink: 0,
    height: 22,
    width: 22,
    alignItems: "flex-start",
    rowGap: 0,
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
    width: 175, // Adjust width as needed
    height: 160, // Adjust height as needed
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
