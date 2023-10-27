import React, { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Svg, Path } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavigation from "../component/BottomNavigation";
import { useStripe } from "@stripe/stripe-react-native";
import ADDRESS_IP from "../API";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LocationDetails({ navigation, route }) {
  const [locationData, setLocationData] = useState([]);
  const trip = route.params.trip;
  const user = route.params.user;

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      console.log("Data stored successfully:", key, value);
    } catch (e) {
      console.error("Error storing data:", e);
    }
  };


  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [selectedImage, setSelectedImage] = useState(trip.images[0].imageId);
  const [loading, setLoading] = useState(false);

  StatusBar.setBackgroundColor("rgba(31, 31, 41, 1)");
  useEffect(() => {
    StatusBar.setBarStyle("light-content");
  }, []);

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`http://${ADDRESS_IP}:5000/payment-sheet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { paymentIntent, ephemeralKey, customer } = await response.json();
    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer, publishableKey } =
      await fetchPaymentSheetParams();
    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: "Jane Doe",
      },
    });
    if (!error) {
      setLoading(true);
    } else {
      console.error("Error initializing payment sheet:", error);
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  const addToWishlist = async (userId, tripId) => {
    try {
      const response = await fetch(`http://${ADDRESS_IP}:5000/wishlists`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          tripId: tripId,
        }),
      });

      if (response.ok) {
        console.log("Item added to the wishlist successfully");
      } else {
        console.error("Failed to add item to the wishlist");
      }
    } catch (error) {
      console.error("Error adding item to the wishlist:", error);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.locationDetails}>
        <View style={styles.frame61}>
          {trip.images.map((image, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setSelectedImage(image.imageId);
              }}
            >
              <View style={styles.frame55}>
                <ImageBackground
                  style={styles.unsplashDD1fSz2HF1s}
                  source={{
                    uri: image.imageId,
                  }}
                ></ImageBackground>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.frame54}>
          <ImageBackground
            style={styles._unsplashDD1fSz2HF1s}
            source={{ uri: selectedImage }}
          />
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
          <TouchableOpacity
            style={styles.frame51}
            onPress={() => addToWishlist(user, trip.id)} 
          >
            
            <View style={styles.vuesaxOutlineArchiveadd}>
              <Svg
                style={styles._vuesaxOutlineArchiveadd}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <Path
                  d="M19.0699 22.75C18.5599 22.75 17.9999 22.6 17.4599 22.29L12.5799 19.58C12.2899 19.42 11.7199 19.42 11.4299 19.58L6.54995 22.29C5.55995 22.84 4.54995 22.9 3.77995 22.44C3.00995 21.99 2.56995 21.08 2.56995 19.95V5.86C2.56995 3.32 4.63995 1.25 7.17995 1.25H16.8299C19.3699 1.25 21.4399 3.32 21.4399 5.86V19.95C21.4399 21.08 20.9999 21.99 20.2299 22.44C19.8799 22.65 19.4799 22.75 19.0699 22.75ZM11.9999 17.96C12.4699 17.96 12.9299 18.06 13.2999 18.27L18.1799 20.98C18.6899 21.27 19.1599 21.33 19.4599 21.15C19.7599 20.97 19.9299 20.54 19.9299 19.95V5.86C19.9299 4.15 18.5299 2.75 16.8199 2.75H7.17995C5.46995 2.75 4.06995 4.15 4.06995 5.86V19.95C4.06995 20.54 4.23995 20.98 4.53995 21.15C4.83995 21.32 5.30995 21.27 5.81995 20.98L10.6999 18.27C11.0699 18.06 11.5299 17.96 11.9999 17.96Z"
                  fill="white"
                />
              </Svg>
            </View>
          </TouchableOpacity>
          <View style={styles.frame53}>
            <Text style={styles.nusaPedina}>{trip.location}</Text>
            <View style={styles.frame52}>
              <View style={styles.vuesaxOutlineLocation}>
                <Svg
                  style={styles._vuesaxOutlineLocation}
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <Path
                    d="M7.99998 9.94667C6.57998 9.94667 5.41998 8.79334 5.41998 7.36667C5.41998 5.94 6.57998 4.79333 7.99998 4.79333C9.41998 4.79333 10.58 5.94667 10.58 7.37334C10.58 8.8 9.41998 9.94667 7.99998 9.94667ZM7.99998 5.79333C7.13332 5.79333 6.41998 6.5 6.41998 7.37334C6.41998 8.24667 7.12665 8.95334 7.99998 8.95334C8.87332 8.95334 9.57998 8.24667 9.57998 7.37334C9.57998 6.5 8.86665 5.79333 7.99998 5.79333Z"
                    fill="white"
                  />
                  <Path
                    d="M8 15.6733C7.01333 15.6733 6.01999 15.3 5.24666 14.56C3.28 12.6667 1.10666 9.64668 1.92666 6.05334C2.66666 2.79334 5.51333 1.33334 8 1.33334C8 1.33334 8 1.33334 8.00666 1.33334C10.4933 1.33334 13.34 2.79334 14.08 6.06001C14.8933 9.65334 12.72 12.6667 10.7533 14.56C9.97999 15.3 8.98666 15.6733 8 15.6733ZM8 2.33334C6.06 2.33334 3.56666 3.36668 2.90666 6.27334C2.18666 9.41334 4.16 12.12 5.94666 13.8333C7.1 14.9467 8.90666 14.9467 10.06 13.8333C11.84 12.12 13.8133 9.41334 13.1067 6.27334C12.44 3.36668 9.93999 2.33334 8 2.33334Z"
                    fill="white"
                  />
                </Svg>
              </View>
              <Text style={styles.baliIndonesia}>{trip.location}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.description}>{trip.text}</Text>
        <View style={styles.frame44}>
          <View style={styles.frame41}>
            <View style={styles.frame35}>
              <View style={styles.vuesaxBoldClock}>
                <Svg
                  style={styles._vuesaxBoldClock}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <Path
                    d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.35 15.57C16.21 15.81 15.96 15.94 15.7 15.94C15.57 15.94 15.44 15.91 15.32 15.83L12.22 13.98C11.45 13.52 10.88 12.51 10.88 11.62V7.52C10.88 7.11 11.22 6.77 11.63 6.77C12.04 6.77 12.38 7.11 12.38 7.52V11.62C12.38 11.98 12.68 12.51 12.99 12.69L16.09 14.54C16.45 14.75 16.57 15.21 16.35 15.57Z"
                    fill="#686DCD"
                  />
                </Svg>
              </View>
            </View>
            <View style={styles.frame38}>
              <Text style={styles.duration}>{`Duration`}</Text>
              <Text style={styles.days}>{trip.duration}</Text>
            </View>
          </View>
          <View style={styles.frame42}>
            <View style={styles.frame36}>
              <View style={styles.vuesaxBoldRouting2}>
                <Svg
                  style={styles._vuesaxBoldRouting2}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <Path
                    d="M11.9987 19.75H9.31872C8.15872 19.75 7.14872 19.05 6.74872 17.97C6.33872 16.89 6.63872 15.7 7.50872 14.93L15.4987 7.94C15.9787 7.52 15.9887 6.95 15.8487 6.56C15.6987 6.17 15.3187 5.75 14.6787 5.75H11.9987C11.5887 5.75 11.2487 5.41 11.2487 5C11.2487 4.59 11.5887 4.25 11.9987 4.25H14.6787C15.8387 4.25 16.8487 4.95 17.2487 6.03C17.6587 7.11 17.3587 8.3 16.4887 9.07L8.49872 16.06C8.01872 16.48 8.00872 17.05 8.14872 17.44C8.29872 17.83 8.67872 18.25 9.31872 18.25H11.9987C12.4087 18.25 12.7487 18.59 12.7487 19C12.7487 19.41 12.4087 19.75 11.9987 19.75Z"
                    fill="#686DCD"
                  />
                  <Path
                    d="M19.9988 15H16.9988C15.8988 15 14.9988 15.9 14.9988 17V20C14.9988 21.1 15.8988 22 16.9988 22H19.9988C21.0988 22 21.9988 21.1 21.9988 20V17C21.9988 15.9 21.0988 15 19.9988 15ZM18.5088 19.5C17.9588 19.5 17.5088 19.05 17.5088 18.5C17.5088 17.95 17.9488 17.5 18.5088 17.5H18.5188C19.0688 17.5 19.5188 17.95 19.5188 18.5C19.5188 19.05 19.0688 19.5 18.5088 19.5Z"
                    fill="#686DCD"
                  />
                  <Path
                    d="M5.46875 2C3.53875 2 1.96875 3.57 1.96875 5.5C1.96875 7.43 3.53875 9 5.46875 9C7.39875 9 8.96875 7.43 8.96875 5.5C8.96875 3.57 7.40875 2 5.46875 2ZM5.50875 6.5C4.95875 6.5 4.50875 6.05 4.50875 5.5C4.50875 4.95 4.94875 4.5 5.50875 4.5H5.51875C6.06875 4.5 6.51875 4.95 6.51875 5.5C6.51875 6.05 6.06875 6.5 5.50875 6.5Z"
                    fill="#686DCD"
                  />
                </Svg>
              </View>
            </View>
            <View style={styles.frame39}>
              <Text style={styles.distance}>{"Location"}</Text>
              <Text style={styles.kM}>{trip.location}</Text>
            </View>
          </View>
          <View style={styles.frame43}>
            <View style={styles.frame37}>
              <View style={styles.vuesaxBoldRanking}>
                <Svg
                  style={styles._vuesaxBoldRanking}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <Path
                    d="M13.3 8.11001L14.62 10.75C14.8 11.11 15.28 11.47 15.68 11.53L18.07 11.93C19.6 12.19 19.96 13.29 18.86 14.39L17 16.26C16.69 16.57 16.51 17.18 16.61 17.62L17.14 19.93C17.56 21.75 16.59 22.46 14.98 21.51L12.74 20.18C12.33 19.94 11.67 19.94 11.26 20.18L9.00997 21.5C7.39997 22.45 6.42997 21.74 6.84997 19.92L7.37997 17.61C7.47997 17.18 7.29997 16.57 6.98997 16.25L5.13997 14.4C4.03997 13.3 4.39997 12.19 5.92997 11.94L8.31997 11.54C8.71997 11.47 9.19997 11.12 9.37997 10.76L10.7 8.12001C11.41 6.68001 12.59 6.68001 13.3 8.11001Z"
                    fill="#686DCD"
                  />
                  <Path
                    d="M6 9.75C5.59 9.75 5.25 9.41 5.25 9V2C5.25 1.59 5.59 1.25 6 1.25C6.41 1.25 6.75 1.59 6.75 2V9C6.75 9.41 6.41 9.75 6 9.75Z"
                    fill="#686DCD"
                  />
                  <Path
                    d="M18 9.75C17.59 9.75 17.25 9.41 17.25 9V2C17.25 1.59 17.59 1.25 18 1.25C18.41 1.25 18.75 1.59 18.75 2V9C18.75 9.41 18.41 9.75 18 9.75Z"
                    fill="#686DCD"
                  />
                  <Path
                    d="M12 4.75C11.59 4.75 11.25 4.41 11.25 4V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V4C12.75 4.41 12.41 4.75 12 4.75Z"
                    fill="#686DCD"
                  />
                </Svg>
              </View>
            </View>
            <View style={styles.frame40}>
              <Text style={styles.rating}>{`Rating`}</Text>
              <Text style={styles._5}>{trip.rating}</Text>
            </View>
          </View>
        </View>
        <View style={styles.frame46}>
          <Text style={styles.travelsummary}>{trip.location}</Text>
        </View>
        <Text
          style={
            styles.ifyouwishtoexperiencebreezybeachesswayingpalmtreesandquirkybeachshacksmakeyourwaytoBaliOurBalitourisdottedwithvolcanicmountainsiconicricepaddiesandvibrantnightlifeNowthatyouhavebookedyourexperientialtourpackage
          }
        ></Text>
        <View style={styles.frame3725} />
        <View style={styles.frame49}>
          <View style={styles.frame48}>
            <Text style={styles.$250}>{trip.current} DT</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              // openPaymentSheet();
              navigation.navigate("Cart", { trip });
            }}
          >
            <View style={styles.frame47}>
              <Text style={styles.bookNow}>{`Book Now`}</Text>
              <View style={styles.vuesaxBoldArrowcircleright}>
                <Svg
                  style={styles._vuesaxBoldArrowcircleright}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <Path
                    d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM14.79 12.53L11.26 16.06C11.11 16.21 10.92 16.28 10.73 16.28C10.54 16.28 10.35 16.21 10.2 16.06C9.91 15.77 9.91 15.29 10.2 15L13.2 12L10.2 9C9.91 8.71 9.91 8.23 10.2 7.94C10.49 7.65 10.97 7.65 11.26 7.94L14.79 11.47C15.09 11.76 15.09 12.24 14.79 12.53Z"
                    fill="white"
                  />
                </Svg>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  locationDetails: {
    flexShrink: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(31, 31, 41, 1)",
    alignItems: "flex-start",
    rowGap: 0,
  },
  scrollView: {
    backgroundColor: "black",
    height: 800,
  },
  frame61: {
    position: "absolute",
    flexShrink: 0,
    top: 375,
    left: 12,
    right: 12,
    backgroundColor: "rgba(19, 19, 22, 1)",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    padding: 14,
    borderRadius: 10,
  },
  frame55: {
    flexShrink: 0,
    height: 52,
    width: 52,
    alignItems: "flex-start",
    rowGap: 0,
  },
  unsplashDD1fSz2HF1s: {
    position: "absolute",
    flexShrink: 0,
    width: 52,
    height: 52,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderRadius: 6,
  },
  frame56: {
    flexShrink: 0,
    height: 52,
    width: 52,
    alignItems: "flex-start",
    rowGap: 0,
  },
  unsplashioJVccFmWxE: {
    position: "absolute",
    flexShrink: 0,
    width: 52,
    height: 52,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderRadius: 6,
  },
  frame57: {
    flexShrink: 0,
    height: 52,
    width: 52,
    alignItems: "flex-start",
    rowGap: 0,
  },
  unsplashlh6cxuDOS8s: {
    position: "absolute",
    flexShrink: 0,
    width: 52,
    height: 52,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderRadius: 6,
  },
  frame58: {
    flexShrink: 0,
    height: 52,
    width: 52,
    alignItems: "flex-start",
    rowGap: 0,
  },
  unsplashBi_5VsaOLnI: {
    position: "absolute",
    flexShrink: 0,
    width: 52,
    height: 52,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderRadius: 6,
  },
  frame59: {
    flexShrink: 0,
    height: 52,
    width: 52,
    alignItems: "flex-start",
    rowGap: 0,
  },
  unsplash5MV818tzxeo: {
    position: "absolute",
    flexShrink: 0,
    width: 52,
    height: 52,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderRadius: 6,
  },
  frame60: {
    flexShrink: 0,
    height: 52,
    width: 52,
    alignItems: "flex-start",
    rowGap: 0,
  },
  unsplash2WlTWZLnRc: {
    position: "absolute",
    flexShrink: 0,
    width: 52,
    height: 52,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderRadius: 6,
  },
  frame62: {
    flexShrink: 0,
    height: 52,
    width: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "flex-start",
    rowGap: 0,
  },
  frame54: {
    position: "absolute",
    flexShrink: 0,
    top: 42,
    height: 317,
    left: 12,
    right: 12,
    alignItems: "flex-start",
    rowGap: 0,
  },
  _unsplashDD1fSz2HF1s: {
    position: "absolute",
    flexShrink: 0,
    right: 0,
    left: 0,
    height: 317,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderRadius: 20,
  },
  unsplashoR0uERTVyD0: {
    position: "absolute",
    flexShrink: 0,
    right: 0,
    left: 0,
    height: 317,
    borderRadius: 20,
  },
  frame50: {
    position: "absolute",
    flexShrink: 0,
    top: 16,
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
  vuesaxOutlineArrowleft: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0,
  },
  _vuesaxOutlineArrowleft: {
    position: "absolute",
    flexShrink: 0,
    height: 24,
    width: 24,
  },
  _frame54: {
    position: "absolute",
    flexShrink: 0,
    top: 16,
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
  __vuesaxOutlineArrowleft: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0,
  },
  ___vuesaxOutlineArrowleft: {
    position: "absolute",
    flexShrink: 0,
    height: 24,
    width: 24,
  },
  frame51: {
    position: "absolute",
    flexShrink: 0,
    top: 16,
    right: 16,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 10,
    padding: 8,
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 1)",
    borderRadius: 10,
  },
  vuesaxOutlineArchiveadd: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0,
  },
  _vuesaxOutlineArchiveadd: {
    position: "absolute",
    flexShrink: 0,
    height: 24,
    width: 24,
  },
  frame53: {
    position: "absolute",
    flexShrink: 0,
    top: 243,
    left: 16,
    alignItems: "flex-start",
    rowGap: 8,
  },
  nusaPedina: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    letterSpacing: 0,
  },
  frame52: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
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
  baliIndonesia: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    letterSpacing: 0,
  },
  description: {
    position: "absolute",
    flexShrink: 0,
    top: 575,
    left: 20,
    width: 150,
    height: 44,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 0,
  },
  frame44: {
    position: "absolute",
    flexShrink: 0,
    top: 518,
    left: 16,
    right: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 23,
  },
  frame41: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  frame35: {
    flexShrink: 0,
    backgroundColor: "rgba(19, 19, 22, 1)",
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 10,
    padding: 8,
    borderRadius: 6,
  },
  vuesaxBoldClock: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0,
  },
  _vuesaxBoldClock: {
    position: "absolute",
    flexShrink: 0,
    height: 24,
    width: 24,
  },
  frame38: {
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 3,
  },
  duration: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(87, 91, 102, 1)",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0,
  },
  days: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0,
  },
  frame42: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  frame36: {
    flexShrink: 0,
    backgroundColor: "rgba(19, 19, 22, 1)",
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 10,
    padding: 8,
    borderRadius: 6,
  },
  vuesaxBoldRouting2: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0,
  },
  _vuesaxBoldRouting2: {
    position: "absolute",
    flexShrink: 0,
    height: 24,
    width: 24,
  },
  frame39: {
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 3,
  },
  distance: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(87, 91, 102, 1)",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0,
  },
  kM: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0,
  },
  frame43: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6,
  },
  frame37: {
    flexShrink: 0,
    backgroundColor: "rgba(19, 19, 22, 1)",
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 10,
    padding: 8,
    borderRadius: 6,
  },
  vuesaxBoldRanking: {
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0,
  },
  _vuesaxBoldRanking: {
    position: "absolute",
    flexShrink: 0,
    height: 24,
    width: 24,
  },
  frame40: {
    flexShrink: 0,
    alignItems: "flex-start",
    rowGap: 3,
  },
  rating: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(87, 91, 102, 1)",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0,
  },
  _5: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0,
  },
  frame46: {
    position: "absolute",
    flexShrink: 0,
    top: 475,
    left: 20,
    right: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 120,
  },
  travelsummary: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 0,
  },
  frame45: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  seemore: {
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
  ifyouwishtoexperiencebreezybeachesswayingpalmtreesandquirkybeachshacksmakeyourwaytoBaliOurBalitourisdottedwithvolcanicmountainsiconicricepaddiesandvibrantnightlifeNowthatyouhavebookedyourexperientialtourpackage:
    {
      position: "absolute",
      flexShrink: 0,
      top: 620,
      right: 16,
      left: 16,
      height: 102,
      textAlign: "left",
      color: "rgba(163, 171, 191, 1)",
      fontSize: 14,
      fontWeight: "400",
      letterSpacing: 0,
    },
  frame3725: {
    position: "absolute",
    flexShrink: 0,
    top: 527,
    height: 100,
    left: 175,
    width: 100,
    alignItems: "flex-start",
    rowGap: 0,
  },
  frame49: {
    position: "absolute",
    flexShrink: 0,
    top: 741,
    left: 24,
    right: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 62,
  },
  frame48: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  $250: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "500",
    letterSpacing: 0,
  },
  day: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(163, 171, 191, 1)",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0,
  },
  frame47: {
    flexShrink: 0,
    backgroundColor: "rgba(104, 109, 205, 1)",
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 4,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  bookNow: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 0,
  },
  vuesaxBoldArrowcircleright: {
    top: 5,
    left: 5,
    flexShrink: 0,
    height: 24,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0,
  },
  _vuesaxBoldArrowcircleright: {
    position: "absolute",
    flexShrink: 0,
    height: 24,
    width: 24,
  },
});
