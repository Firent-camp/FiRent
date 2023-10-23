
import React, { useState,useEffect } from 'react'
import { Image, TextInput, StyleSheet, Text, View, Button } from "react-native";
import { CardField, useStripe } from "@stripe/stripe-react-native";
import { Padding, FontFamily, FontSize, Color, Border } from "../globalcss";
import ADRESS_API from '../API';
const Payment2 = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe;
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = React.useState(null);
  const [totalAmount, setTotalAmount] = React.useState("");  // New state

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`http://${ADRESS_IP}:5000/payment-sheet`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { paymentIntent, ephemeralKey, customer} = await response.json();
    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
      publishableKey,
    } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,

      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Jane Doe',
      }
    });
    if (!error) {
      setLoading(true);
    }
  };

  
const openPaymentSheet = async () => {
  const { error } = await presentPaymentSheet();
  if (error) {
    alert(`Error code: ${error.code}`, error.message);
    console.log(error)
  } else {
    alert('Success', 'Your order is confirmed!');
    console.log("works")

  }
};

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <View style={styles.payment2}>
      {/* <View style={[styles.topAppBar, styles.topAppBarLayout]}>
        <View style={[styles.headerIcon, styles.headerIconFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/arrow-left.png")}
          />
          <Text style={styles.title}>Payment method</Text>
        </View>
        <Image
          style={[styles.moreVerticalIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/more-vertical.png")}
        />
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

      <View style={[styles.continueWrapper, styles.headerIconFlexBox]}>
        <Button title="Pay Now" onPress={handlePay} />
      </View>

      <CardField
        style={{ height: 50, margin: 10 }}
      />

      <View style={[styles.form, styles.formPosition]}>
        <TextInput
          style={[styles.formChild, styles.formPosition]}
          placeholder="Name of card"
          placeholderTextColor={Color.colorWhite}
        />
      </View>

      <View style={[styles.form1, styles.formPosition]}>
        <TextInput
          style={[styles.formChild, styles.formPosition]}
          placeholder="CVV / CVC"
          placeholderTextColor={Color.colorWhite}
        />
      </View>

      <View style={styles.form2}>
        <TextInput
          style={[styles.formChild, styles.formPosition]}
          placeholder="Name"
          placeholderTextColor={Color.colorWhite}
        />
        <View style={[styles.form3, styles.formPosition]}>
          <TextInput
            style={[styles.formChild, styles.formPosition]}
            placeholder="Name"
            placeholderTextColor={Color.colorWhite}
          />
        </View>
      </View>

      <View style={styles.form2}>
        <TextInput
          style={[styles.formChild, styles.formPosition]}
          placeholder="Card number"
          placeholderTextColor={Color.colorWhite}
        />
        <View style={[styles.form3, styles.formPosition]}>
          <TextInput
            style={[styles.formChild, styles.formPosition]}
            placeholder="Expiring date"
            placeholderTextColor={Color.colorWhite}
          />
        </View>
      </View> */}
      <Button
          variant="primary"
          disabled={!loading}
          title="Pay Now"
          onPress={()=>{openPaymentSheet()
          navigation.navigate("Payment3")}}
        />
    </View>
  );
};


const styles = StyleSheet.create({
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
    fontFamily: FontFamily.subtitle14pxmedium,
    fontWeight: "500",
    fontSize: FontSize.subtitle14pxmedium_size,
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
    fontFamily: FontFamily.latoRegular,
    left: 22,
    top: 14,
    fontSize: FontSize.subtitle14pxmedium_size,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  title: {
    fontSize: FontSize.subtitle16pxRegular_size,
    fontFamily: FontFamily.subtitle16pxRegular,
    marginLeft: 8,
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
    fontFamily: FontFamily.subtitle14pxmedium,
    fontWeight: "500",
    fontSize: FontSize.subtitle14pxmedium_size,
  },
  payment: {
    marginLeft: 32,
    color: Color.colorWhite,
    fontFamily: FontFamily.subtitle14pxmedium,
    fontWeight: "500",
    fontSize: FontSize.subtitle14pxmedium_size,
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
  cvvCvc: {
    width: 82,
  },
  form1: {
    top: 525,
  },
  name: {
    width: 40,
  },
  form3: {
    top: 58,
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
    height: 640,
    overflow: "hidden",
  },
});

export default Payment2;
