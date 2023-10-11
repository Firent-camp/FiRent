import * as React from "react";
import { Image, TextInput, StyleSheet, Text, View, Button } from "react-native";
import { CardField, useStripe } from "@stripe/stripe-react-native";
import { Padding, FontFamily, FontSize, Color, Border } from "../globalcss";

const Payment2 = () => {
  const { confirmPayment } = useStripe();
  const [clientSecret, setClientSecret] = React.useState(null);
  const [totalAmount, setTotalAmount] = React.useState("");  // New state

  const fetchPaymentIntent = async () => {
    try {
      const response = await fetch("http://your_server_url/create-payment-intent", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: Number(totalAmount) }),  // Convert string to number
      });
      const data = await response.json();
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error("Error fetching clientSecret:", error);
    }
  }

  const handlePay = async () => {
    if (!clientSecret) {
      console.error("Client secret is missing");
      return;
    }

    const { error } = await confirmPayment(clientSecret, {
      type: 'Card',
    });

    if (error) {
      console.error("Payment failed: ", error);
    } else {
      console.log("Payment succeeded!");
    }
  };

  return (
    <View style={styles.payment2}>
      <View style={[styles.topAppBar, styles.topAppBarLayout]}>
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
      </View>
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
  moreVerticalIcon: {
    top: 12,
    left: 370,
    position: "absolute",
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
