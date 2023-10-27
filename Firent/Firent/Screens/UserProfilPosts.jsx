import React, { useEffect, useState } from "react";
import { useRoute } from '@react-navigation/native';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Svg, Path, Line, Rect } from "react-native-svg";
import ImageGrid from "./ImageGrid";
import Posts from "../component/Posts";
import { ScrollView } from "react-native-gesture-handler";

export default function UserProfilPosts({ route ,navigation}) {
  const userDetail = route.params.userDetail;
  StatusBar.setBackgroundColor("rgba(31, 31, 41, 1)");
  useEffect(() => {
    StatusBar.setBarStyle("light-content");
  }, []);
  const hp = () => {
    navigation.navigate('HomeUserconnected'); 
};
  return (
    <View style={styles.userprofilimages}>
      <Svg
        style={styles.line9}
        width="416"
        height="1"
        viewBox="0 0 416 1"
        fill="none"
      >
        <Path
          d="M-1 0.727051L417 0.727051"
          stroke="#545454"
          strokeWidth="0.54595"
          strokeLinecap="round"
        />
      </Svg>

      <Svg
        style={styles.line8}
        width="44"
        height="3"
        viewBox="0 0 44 3"
        fill="none"
      >
        <Line
          x1="1.0919"
          y1="1.9081"
          x2="42.5841"
          y2="1.9081"
          stroke="#686DCD"
          strokeWidth="2.1838"
          strokeLinecap="round"
        />
      </Svg>

      <View style={styles.menu}>
        <Svg
          style={styles.timeLine}
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.672852 1.52861C0.672852 0.985873 1.11283 0.545898 1.65556 0.545898H19.3443C19.8871 0.545898 20.327 0.985872 20.327 1.52861V19.2174C20.327 19.7601 19.8871 20.2001 19.3443 20.2001H1.65556C1.11283 20.2001 0.672852 19.7601 0.672852 19.2174V1.52861ZM2.63827 6.43631V2.51132H6.57834V6.43631H2.63827ZM2.63827 8.40173V12.3385H6.57834V8.40173H2.63827ZM2.63827 14.304V18.2347H6.57834V14.304H2.63827ZM8.54376 18.2347H12.4804V14.304H8.54376V18.2347ZM14.4458 18.2347H18.3616V14.304H14.4458V18.2347ZM18.3616 12.3385V8.40173H14.4458V12.3385H18.3616ZM18.3616 6.43631V2.51132H14.4458V6.43631H18.3616ZM12.4804 2.51132H8.54376V6.43631H12.4804V2.51132ZM8.54376 12.3385V8.40173H12.4804V12.3385H8.54376Z"
            fill="white"
          />
        </Svg>
        <Text style={styles.posts}>{`Posts`}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Userprofilimages", {
              userDetail: userDetail,
            })
          }
        >
          <Svg
            style={styles._timeLine}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.105713 0.98271C0.105713 0.439974 0.545687 0 1.08842 0H18.7772C19.3199 0 19.7599 0.439974 19.7599 0.982709V18.6715C19.7599 19.2142 19.3199 19.6542 18.7772 19.6542H1.08842C0.545687 19.6542 0.105713 19.2142 0.105713 18.6715V0.98271ZM2.07113 5.89042V1.96542H6.0112V5.89042H2.07113ZM2.07113 7.85583V11.7926H6.0112V7.85583H2.07113ZM2.07113 13.7581V17.6888H6.0112V13.7581H2.07113ZM7.97662 17.6888H11.9133V13.7581H7.97662V17.6888ZM13.8787 17.6888H17.7945V13.7581H13.8787V17.6888ZM17.7945 11.7926V7.85583H13.8787V11.7926H17.7945ZM17.7945 5.89042V1.96542H13.8787V5.89042H17.7945ZM11.9133 1.96542H7.97662V5.89042H11.9133V1.96542ZM7.97662 11.7926V7.85583H11.9133V11.7926H7.97662Z"
              fill="white"
            />
          </Svg>

          <Text style={styles.images}>{`Images`}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.message}>
      <TouchableOpacity style={styles.group3578} onPress={() =>
                  navigation.navigate("Conversation")
                }>        
            <View style={styles.frame2840} />
          <Svg
            style={styles.vector}
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <Path
              d="M8.25223 9.41902C8.25223 9.66336 8.3493 9.89769 8.52207 10.0705C8.69485 10.2432 8.92918 10.3403 9.17352 10.3403C9.41786 10.3403 9.6522 10.2432 9.82497 10.0705C9.99775 9.89769 10.0948 9.66336 10.0948 9.41902C10.0948 9.17468 9.99775 8.94034 9.82497 8.76757C9.6522 8.59479 9.41786 8.49773 9.17352 8.49773C8.92918 8.49773 8.69485 8.59479 8.52207 8.76757C8.3493 8.94034 8.25223 9.17468 8.25223 9.41902V9.41902ZM12.0909 9.41902C12.0909 9.66336 12.188 9.89769 12.3608 10.0705C12.5336 10.2432 12.7679 10.3403 13.0122 10.3403C13.2566 10.3403 13.4909 10.2432 13.6637 10.0705C13.8365 9.89769 13.9335 9.66336 13.9335 9.41902C13.9335 9.17468 13.8365 8.94034 13.6637 8.76757C13.4909 8.59479 13.2566 8.49773 13.0122 8.49773C12.7679 8.49773 12.5336 8.59479 12.3608 8.76757C12.188 8.94034 12.0909 9.17468 12.0909 9.41902ZM4.41352 9.41902C4.41352 9.66336 4.51059 9.89769 4.68336 10.0705C4.85614 10.2432 5.09047 10.3403 5.33481 10.3403C5.57916 10.3403 5.81349 10.2432 5.98626 10.0705C6.15904 9.89769 6.2561 9.66336 6.2561 9.41902C6.2561 9.17468 6.15904 8.94034 5.98626 8.76757C5.81349 8.59479 5.57916 8.49773 5.33481 8.49773C5.09047 8.49773 4.85614 8.59479 4.68336 8.76757C4.51059 8.94034 4.41352 9.17468 4.41352 9.41902V9.41902ZM17.1043 6.08702C16.6705 5.05633 16.0486 4.1312 15.256 3.33659C14.4688 2.54657 13.5344 1.91861 12.5055 1.48825C11.4499 1.04488 10.329 0.820312 9.17352 0.820312H9.13514C7.97201 0.826071 6.84535 1.05639 5.78586 1.50936C4.76584 1.94414 3.84014 2.57321 3.06038 3.36154C2.27536 4.15423 1.65925 5.07552 1.23315 6.10238C0.791703 7.1657 0.569058 8.2962 0.574816 9.45932C0.581329 10.7923 0.896676 12.1056 1.49611 13.2961V16.2135C1.49611 16.4477 1.58913 16.6723 1.7547 16.8378C1.92028 17.0034 2.14485 17.0964 2.37901 17.0964H5.29835C6.48891 17.6959 7.8022 18.0112 9.13514 18.0177H9.17544C10.3251 18.0177 11.4403 17.7951 12.4902 17.3594C13.5138 16.9342 14.4448 16.3135 15.231 15.5322C16.0237 14.7471 16.6475 13.8297 17.0832 12.8067C17.5361 11.7472 17.7665 10.6205 17.7722 9.45741C17.778 8.28852 17.5515 7.15418 17.1043 6.08702V6.08702ZM14.2041 14.4938C12.8587 15.8258 11.0737 16.559 9.17352 16.559H9.14089C7.98352 16.5533 6.83383 16.2654 5.81849 15.7241L5.65727 15.6377H2.95482V12.9353L2.86844 12.774C2.32719 11.7587 2.03928 10.609 2.03353 9.45165C2.02585 7.53805 2.75712 5.74154 4.09875 4.38839C5.43846 3.03525 7.22922 2.2867 9.14281 2.27902H9.17544C10.1351 2.27902 11.066 2.4652 11.9432 2.83371C12.7992 3.19263 13.5669 3.70894 14.2272 4.3692C14.8855 5.02754 15.4037 5.7972 15.7627 6.65323C16.135 7.53997 16.3212 8.48046 16.3174 9.45165C16.3058 11.3633 15.5554 13.1541 14.2041 14.4938V14.4938Z"
              fill="white"
            />
          </Svg>

          <Text style={styles._message}>Message</Text>
          <Svg
            style={styles._vector}
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <Path
              d="M8.25223 9.41902C8.25223 9.66336 8.3493 9.89769 8.52207 10.0705C8.69485 10.2432 8.92918 10.3403 9.17352 10.3403C9.41786 10.3403 9.6522 10.2432 9.82497 10.0705C9.99775 9.89769 10.0948 9.66336 10.0948 9.41902C10.0948 9.17468 9.99775 8.94034 9.82497 8.76757C9.6522 8.59479 9.41786 8.49773 9.17352 8.49773C8.92918 8.49773 8.69485 8.59479 8.52207 8.76757C8.3493 8.94034 8.25223 9.17468 8.25223 9.41902V9.41902ZM12.0909 9.41902C12.0909 9.66336 12.188 9.89769 12.3608 10.0705C12.5336 10.2432 12.7679 10.3403 13.0122 10.3403C13.2566 10.3403 13.4909 10.2432 13.6637 10.0705C13.8365 9.89769 13.9335 9.66336 13.9335 9.41902C13.9335 9.17468 13.8365 8.94034 13.6637 8.76757C13.4909 8.59479 13.2566 8.49773 13.0122 8.49773C12.7679 8.49773 12.5336 8.59479 12.3608 8.76757C12.188 8.94034 12.0909 9.17468 12.0909 9.41902ZM4.41352 9.41902C4.41352 9.66336 4.51059 9.89769 4.68336 10.0705C4.85614 10.2432 5.09047 10.3403 5.33481 10.3403C5.57916 10.3403 5.81349 10.2432 5.98626 10.0705C6.15904 9.89769 6.2561 9.66336 6.2561 9.41902C6.2561 9.17468 6.15904 8.94034 5.98626 8.76757C5.81349 8.59479 5.57916 8.49773 5.33481 8.49773C5.09047 8.49773 4.85614 8.59479 4.68336 8.76757C4.51059 8.94034 4.41352 9.17468 4.41352 9.41902V9.41902ZM17.1043 6.08702C16.6705 5.05633 16.0486 4.1312 15.256 3.33659C14.4688 2.54657 13.5344 1.91861 12.5055 1.48825C11.4499 1.04488 10.329 0.820312 9.17352 0.820312H9.13514C7.97201 0.826071 6.84535 1.05639 5.78586 1.50936C4.76584 1.94414 3.84014 2.57321 3.06038 3.36154C2.27536 4.15423 1.65925 5.07552 1.23315 6.10238C0.791703 7.1657 0.569058 8.2962 0.574816 9.45932C0.581329 10.7923 0.896676 12.1056 1.49611 13.2961V16.2135C1.49611 16.4477 1.58913 16.6723 1.7547 16.8378C1.92028 17.0034 2.14485 17.0964 2.37901 17.0964H5.29835C6.48891 17.6959 7.8022 18.0112 9.13514 18.0177H9.17544C10.3251 18.0177 11.4403 17.7951 12.4902 17.3594C13.5138 16.9342 14.4448 16.3135 15.231 15.5322C16.0237 14.7471 16.6475 13.8297 17.0832 12.8067C17.5361 11.7472 17.7665 10.6205 17.7722 9.45741C17.778 8.28852 17.5515 7.15418 17.1043 6.08702V6.08702ZM14.2041 14.4938C12.8587 15.8258 11.0737 16.559 9.17352 16.559H9.14089C7.98352 16.5533 6.83383 16.2654 5.81849 15.7241L5.65727 15.6377H2.95482V12.9353L2.86844 12.774C2.32719 11.7587 2.03928 10.609 2.03353 9.45165C2.02585 7.53805 2.75712 5.74154 4.09875 4.38839C5.43846 3.03525 7.22922 2.2867 9.14281 2.27902H9.17544C10.1351 2.27902 11.066 2.4652 11.9432 2.83371C12.7992 3.19263 13.5669 3.70894 14.2272 4.3692C14.8855 5.02754 15.4037 5.7972 15.7627 6.65323C16.135 7.53997 16.3212 8.48046 16.3174 9.45165C16.3058 11.3633 15.5554 13.1541 14.2041 14.4938V14.4938Z"
              fill="white"
            />
          </Svg>
        </TouchableOpacity>
      </View>
      <Text style={styles.jackofallMasterofDesign}>
      {userDetail.details.address}
      </Text>
      <ScrollView style={styles.jokarta}>
        <Posts />
      </ScrollView>

      <View style={styles.group3586}>
        <TouchableOpacity  onPress={hp}> 
          <Svg
            style={styles.fleche}
            width="39"
            height="38"
            viewBox="0 0 39 38"
            fill="none"
          >
            <Rect width="38.1013" height="38" rx="6" fill="#131316" />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.1462 10.5042C24.4795 10.8271 24.6667 11.2651 24.6667 11.7217C24.6667 12.1784 24.4795 12.6163 24.1462 12.9392L18.2915 18.6101L24.1462 24.2809C24.47 24.6057 24.6492 25.0407 24.6452 25.4923C24.6411 25.9438 24.4542 26.3757 24.1245 26.695C23.7949 27.0143 23.349 27.1954 22.8828 27.1993C22.4166 27.2033 21.9675 27.0297 21.6322 26.716L14.5205 19.8276C14.1872 19.5047 14 19.0667 14 18.6101C14 18.1535 14.1872 17.7155 14.5205 17.3926L21.6322 10.5042C21.9656 10.1814 22.4178 10 22.8892 10C23.3606 10 23.8128 10.1814 24.1462 10.5042Z"
              fill="#686DCD"
            />
          </Svg>
        </TouchableOpacity>

        <View style={styles.information}>
          <View style={styles.group3571}>
            <View style={styles.frame3298}>
              <View style={styles.frame2806}>
              <Text style={styles.sabrineGaceur}>
  {userDetail.details.userName + ' ' + userDetail.details.lastName}
</Text>
              </View>
              <View style={styles.frame2809}>
                <View style={styles._frame2809}>
                  <Text style={styles.myVar}>{`7`}</Text>
                  <Text style={styles._posts}>{`Posts`}</Text>
                </View>
                <View style={styles.frame2811}>
                  <Text style={styles._myVar}>{`24`}</Text>
                  <Text style={styles._______images}>{`Images`}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.group3587}>
        <Image
  style={styles.profilpic}
  source={{
    uri: userDetail.details.image,
  }}
/>
          <View style={styles.editprofil}>
            <View style={styles.group3585}>
              <TouchableOpacity style={styles.group3584}>
                <View style={styles.group3580}>
                  {/* <Svg
                    style={styles.ellipse11}
                    width="35"
                    height="34"
                    viewBox="0 0 35 34"
                    fill="none"
                  >
                    <Path
                      d="M32.5 16.9505C32.5 24.8568 25.86 31.4011 17.5 31.4011C9.13995 31.4011 2.5 24.8568 2.5 16.9505C2.5 9.0443 9.13995 2.5 17.5 2.5C25.86 2.5 32.5 9.0443 32.5 16.9505Z"
                      fill="#F5F5F5"
                      stroke="white"
                      strokeWidth="5"
                    />
                  </Svg> */}

                  <View style={styles.lineDesignEditline}>
                    {/* <Svg
                      style={styles.group}
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                    >
                      <Path
                        d="M3.24995 10.8985L10.9667 3.42403L9.89082 2.38194L2.17408 9.85639V10.8985H3.24995ZM3.88071 12.3724H0.652344V9.24544L9.35289 0.818073C9.49557 0.67991 9.68907 0.602295 9.89082 0.602295C10.0926 0.602295 10.2861 0.67991 10.4288 0.818073L12.5813 2.90299C12.7239 3.04119 12.804 3.22861 12.804 3.42403C12.804 3.61945 12.7239 3.80687 12.5813 3.94508L3.88071 12.3724V12.3724ZM0.652344 13.8464H14.348V15.3204H0.652344V13.8464Z"
                        fill="black"
                      />
                    </Svg> */}
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userprofilimages: {
    flexShrink: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(31, 31, 41, 1)",
    alignItems: "flex-start",
    rowGap: 0,
  },
  line9: {
    position: "absolute",
    flexShrink: 0,
    top: 314,
    left: -1,
    width: 418,
    minHeight: 0.001,
    overflow: "visible",
  },
  line8: {
    position: "absolute",
    flexShrink: 0,
    top: 314,
    left: 115,
    width: 44,
    minHeight: 0.001,
    overflow: "visible",
  },
  jokarta: {
    top: 420,
    left: 15,
    marginBottom: 450,
  },
  menu: {
    position: "absolute",
    flexShrink: 0,
    top: 347,
    height: 52,
    left: 120,
    width: 176,
  },
  timeLine: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    left: 11,
    width: 20,
    height: 20,
    overflow: "visible",
  },
  posts: {
    position: "absolute",
    flexShrink: 0,
    top: 25,
    width: 41,
    height: 27,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.286590576171875,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 26.205583572387695,
  },
  _timeLine: {
    position: "absolute",
    flexShrink: 0,
    left: 137,
    width: 20,
    height: 20,
    overflow: "visible",
  },
  images: {
    position: "absolute",
    flexShrink: 0,
    top: 24,
    left: 117,
    width: 59,
    height: 27,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.286590576171875,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 26.205583572387695,
  },
  message: {
    position: "absolute",
    flexShrink: 0,
    top: 242,
    height: 49,
    left: 112,
    width: 191,
  },
  group3578: {
    position: "absolute",
    flexShrink: 0,
    height: 49,
    width: 191,
  },
  frame2840: {
    position: "absolute",
    flexShrink: 0,
    width: 191,
    height: 48.84,
    backgroundColor: "rgba(104, 109, 205, 1)",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    columnGap: 8.735194206237793,
    paddingVertical: 10.91899299621582,
    paddingHorizontal: 16.378488540649414,
    borderRadius: 54.59496307373047,
  },
  vector: {
    position: "absolute",
    flexShrink: 0,
    top: 16,
    left: 43,
    width: 17,
    height: 17,
    overflow: "visible",
  },
  _message: {
    position: "absolute",
    flexShrink: 0,
    top: 11,
    left: 70,
    width: 80,
    height: 27,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.470388412475586,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 26.205583572387695,
  },
  _vector: {
    position: "absolute",
    flexShrink: 0,
    top: 16,
    left: 43,
    width: 17,
    height: 17,
    overflow: "visible",
  },
  jackofallMasterofDesign: {
    position: "absolute",
    flexShrink: 0,
    top: 204,
    left: 180,
    width: 260,
    height: 27,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.286590576171875,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 26.205583572387695,
  },
  group3588: {
    position: "absolute",
    flexShrink: 0,
    top: 432,
    height: 300,
    left: 30,
    width: 356,
  },
  _images: {
    position: "absolute",
    flexShrink: 0,
    width: 108,
    height: 141,
    borderRadius: 15,
  },
  __images: {
    position: "absolute",
    flexShrink: 0,
    left: 126,
    width: 108,
    height: 141,
    borderRadius: 15,
  },
  ___images: {
    position: "absolute",
    flexShrink: 0,
    left: 248,
    width: 108,
    height: 141,
    borderRadius: 15,
  },
  ____images: {
    position: "absolute",
    flexShrink: 0,
    top: 159,
    width: 108,
    height: 141,
    borderRadius: 15,
  },
  _____images: {
    position: "absolute",
    flexShrink: 0,
    top: 159,
    left: 126,
    width: 108,
    height: 141,
    borderRadius: 15,
  },
  ______images: {
    position: "absolute",
    flexShrink: 0,
    top: 159,
    left: 248,
    width: 108,
    height: 141,
    borderRadius: 15,
  },
  group3586: {
    position: "absolute",
    flexShrink: 0,
    top: 55,
    height: 124,
    left: 23,
    width: 377,
  },
  fleche: {
    position: "absolute",
    flexShrink: 0,
    height: 38,
    width: 38,
  },
  information: {
    position: "absolute",
    flexShrink: 0,
    height: 109,
    left: 222,
    width: 155,
  },
  group3571: {
    position: "absolute",
    flexShrink: 0,
    height: 109,
    width: 155,
  },
  frame3298: {
    position: "absolute",
    flexShrink: 0,
    width: 155,
    alignItems: "flex-start",
    rowGap: 8.735194206237793,
  },
  frame2806: {
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 0,
  },
  sabrineGaceur: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.470388412475586,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 26.205583572387695,
  },
  frame2809: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 13.102791786193848,
  },
  _frame2809: {
    flexShrink: 0,
    backgroundColor: "rgba(19, 19, 22, 1)",
    alignItems: "center",
    rowGap: -2.1837985515594482,
    padding: 13.102791786193848,
    borderRadius: 21.83798599243164,
  },
  myVar: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.470388412475586,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 26.205583572387695,
  },
  _posts: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.102791786193848,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 21.83798599243164,
  },
  frame2811: {
    flexShrink: 0,
    backgroundColor: "rgba(19, 19, 22, 1)",
    alignItems: "center",
    rowGap: -2.1837985515594482,
    padding: 13.102791786193848,
    borderRadius: 21.83798599243164,
  },
  _myVar: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.470388412475586,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 26.205583572387695,
  },
  _______images: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.102791786193848,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 21.83798599243164,
  },
  group3587: {
    position: "absolute",
    flexShrink: 0,
    height: 124,
    left: 64,
    width: 103,
  },
  profilpic: {
    position: "absolute",
    flexShrink: 0,
    width: 95,
    height: 124,
    borderRadius: 15,
  },
  editprofil: {
    position: "absolute",
    flexShrink: 0,
    top: 90,
    height: 34,
    left: 68,
    width: 35,
  },
  group3585: {
    position: "absolute",
    flexShrink: 0,
    height: 34,
    width: 35,
  },
  group3584: {
    position: "absolute",
    flexShrink: 0,
    height: 34,
    width: 35,
  },
  group3580: {
    position: "absolute",
    flexShrink: 0,
    height: 34,
    width: 35,
  },
  ellipse11: {
    position: "absolute",
    flexShrink: 0,
    width: 35,
    height: 34,
    overflow: "visible",
  },
  lineDesignEditline: {
    position: "absolute",
    flexShrink: 0,
    top: 8,
    height: 18,
    left: 8,
    width: 18,
    alignItems: "flex-start",
    rowGap: 0,
  },
  group: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 15,
    left: 2,
    width: 14,
  },
});
