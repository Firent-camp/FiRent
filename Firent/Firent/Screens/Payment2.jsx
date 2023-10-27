import React, { useState, useEffect } from "react";
import {
  Image,
  TextInput,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { CardField, useStripe } from "@stripe/stripe-react-native";
import { Padding, FontFamily, FontSize, Color, Border } from "../globalcss";
import ADDRESS_IP from "../API";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Payment2 = () => {

  const navigation = useNavigation();
  const [trip, setTrip] = useState(null);
  const [user, setUser] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiringDate, setExpiringDate] = useState("");
  const [cvv, setCvv] = useState("");
const [total,setTotal]=useState(null)
  useEffect(() => {
    const retrieveTotalData = async () => {
      try {
        const tripData = await AsyncStorage.getItem("trip");
        const userData = await AsyncStorage.getItem("user");
        const tripTotal =await AsyncStorage.getItem("total")
        if (tripData !== null) {
          const data = JSON.parse(tripData);
          setTrip(data);
        }
        if (tripTotal !== null) {
          const data = JSON.parse(tripTotal);
          setTotal(data);
        }
        if (userData !== null) {
          const user = JSON.parse(userData);
          setUser(user);
        }
      } catch (e) {
        console.error("Error retrieving data:", e);
      }
    };

    retrieveTotalData();
  }, []);

  const handlePayment = () => {
    if (!cardName.trim() || !cardNumber.trim() || !expiringDate.trim() || !cvv.trim()) {
      console.log("Empty fields detected. Please fill in all input fields.");
    } else {
      const paymentData = {
        cardName,
        cardNumber,
        expiringDate,
        cvv,
        current:total,
        userId: user ,
        tripId: trip.id,
      };

      fetch(`http://${ADDRESS_IP}:5000/payment/payments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      })
        .then((response) => response.json())
        .then(() => {
          navigation.navigate("Payment3");
        })
        .catch((error) => {
          console.error("Error creating payment:", error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.payment2}>
          <View style={[styles.topAppBar, styles.topAppBarLayout]}>
            <View style={[styles.headerIcon, styles.headerIconFlexBox]}>
              <Text style={styles.title}>Payment method</Text>
            </View>
          </View>
          <View style={styles.progressBar}>
            <Image
              style={styles.progressIndicatorIcon}
              contentFit="cover"
              source={require("../assets/progress-indicator2.png")}
            />
            <View style={styles.textItem}>
              <Text style={[styles.details, styles.detailsTypo]}>Details</Text>
              <Text style={[styles.payment, styles.detailsTypo]}>Payment</Text>
              <Text style={[styles.payment, styles.detailsTypo]}>Confirm</Text>
            </View>
          </View>

          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/cardimg.png")}
          />
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <View>
              <TouchableOpacity
              style={styles.frame50}
              onPress={() => {
                navigation.navigate("Payment1");
              }}
              >
                <Image
                  style={styles.iconLayout}
                  source={require("../assets/arrow-left.png")}
                  />
              </TouchableOpacity>
                  </View>
            <View style={[styles.continueWrapper, styles.headerIconFlexBox]}>
            <Button
              title="Pay Now"
              onPress={() => {
                handlePayment();
              }}
            />
          </View>
            <View style={[styles.form, styles.formPosition]}>
              <TextInput
                style={[styles.formChild, styles.formPosition]}
                placeholder="Name of card"
                placeholderTextColor={Color.colorWhite}
                value={cardName}
                onChangeText={(text) => setCardName(text)}
              />
            </View>
            <View style={styles.form4}>
              <TextInput
                style={[styles.formChild, styles.formPosition]}
                placeholder="Number of card"
                placeholderTextColor={Color.colorWhite}
                value={cardNumber}
                onChangeText={(text) => setCardNumber(text)}
              />
            </View>
            <View style={[styles.form1, styles.formPosition]}>
              <TextInput
                style={[styles.formChild, styles.formPosition]}
                placeholder="CVV / CVC"
                placeholderTextColor={Color.colorWhite}
                value={cvv}
                onChangeText={(text) => setCvv(text)}
              />
            </View>
            <View style={styles.form2}>
              <View style={[styles.form3, styles.formPosition]}>
                <TextInput
                  style={[styles.formChild, styles.formPosition]}
                  placeholder="Expiring date"
                  placeholderTextColor={Color.colorWhite}
                  value={expiringDate}
                  onChangeText={(text) => setExpiringDate(text)}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  frame50: {
    position: "absolute",
    flexShrink: 0,
    top: 50,
    left: 8,
    columnGap: 10,
    padding: 8,
  },
  container: {
    // flex: 1,
    backgroundColor: "#1f1f29",
  },
  scrollContent: {
    flexGrow: 1,
  },
  topAppBarLayout: {
    top: 45,
    height: 48,
    left: 0,
    width: "100%",
  },
  headerIconFlexBox: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  moreVerticalIcon: {
    top: 12,
    left: 370,
    position: "absolute",
  },
  detailsTypo: {
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: 0,
  },
  formPosition: {
    height: 41,
    left: "50%",
    marginLeft: -164,
    width: 328,
    position: "absolute",
  },
  nameTypo: {
    height: 14,
    left: 22,
    top: 14,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  title: {
    fontSize: FontSize.subtitle16pxRegular_size,
    marginLeft: 35,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.colorWhite,
  },
  headerIcon: {
    width: 186,
    paddingHorizontal: 0,
    top: 0,
    height: 48,
    left: 0,
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  topAppBar: {
    top: 32,
    width: "100%",
    backgroundColor: Color.colorMediumpurple,
    overflow: "hidden",
    position: "absolute",
  },
  progressIndicatorIcon: {
    width: 188,
    height: 12,
  },
  details: {
    color: Color.colorWhite,
    fontWeight: "500",
  },
  payment: {
    marginLeft: 32,
    color: Color.colorWhite,
    fontWeight: "500",
  },
  textItem: {
    marginTop: 8,
    flexDirection: "row",
  },
  progressBar: {
    top: 110,
    left: 99,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  imageIcon: {
    top: 195,
    left: 42,
    borderRadius: 8,
    height: 205,
    width: 328,
    position: "absolute",
  },
  continue: {
    color: Color.light,
  },
  continueWrapper: {
    top: 750,
    left: 270,
    borderRadius: Border.br_81xl,
    paddingHorizontal: Padding.p_5xl,
    backgroundColor: Color.colorMediumpurple,
    overflow: "hidden",
  },
  formChild: {
    marginTop: 0,
    paddingLeft: 10,
    marginLeft: -150,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGray_200,
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    borderStyle: "solid",
    top: 105,
    height: 50,
  },
  nameOfCard: {
    width: 92,
    height: 39,
  },
  form: {
    top: 355,
  },

  form1: {
    top: 525,
  },
  name: {
    width: 40,
  },
  form4: {
    width: 100,
    height: 39,
    marginLeft: 155,
    top: 410,
  },
  form3: {
    top: 55,

    width: 100,
    height: 39,
    marginLeft: 164,
  },
  form2: {
    top: 412,
    height: 99,
    left: "50%",
    marginLeft: -164,
    width: 328,
    position: "absolute",
  },
  expringDate: {
    width: 109,
  },
  payment2: {
    backgroundColor: "#1f1f29",
    flex: 1,
    width: "100%",
    height: 900,
    overflow: "hidden",
  },
});

export default Payment2;
