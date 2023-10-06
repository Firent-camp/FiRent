import * as React from "react";
import { Image } from "expo-image";
import { TextInput, StyleSheet, Text, View } from "react-native";
import { Padding, FontFamily, FontSize, Color, Border } from "../globalcss";

const Payment2 = () => {
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
        <Text style={[styles.continue, styles.detailsTypo]}>Pay Now</Text>
      </View>
      <View style={[styles.form, styles.formPosition]}>
        <View style={[styles.formChild, styles.formPosition]} />
        <TextInput
          style={[styles.formChild, styles.nameTypo]}
          placeholder="Name of Card"
          placeholderTextColor={"white"}
        ></TextInput>
      </View>
      <View style={[styles.form1, styles.formPosition]}>
        <TextInput
          style={[styles.formChild, styles.formPosition]}
          placeholder="CVV / CVC"
          placeholderTextColor={"white"}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.form2}>
        <View style={[styles.formChild, styles.formPosition]} />
        <TextInput
          style={[styles.nameOfCard, styles.nameTypo]}
          placeholder="Card Number"
          placeholderTextColor={"white"}
        ></TextInput>
        <View style={[styles.form3, styles.formPosition]}>
          <View style={[styles.formChild, styles.formPosition]} />
          <TextInput style={[styles.expringDate, styles.nameTypo]}
          placeholder="Expiring Date"
          placeholderTextColor={"white"}>
            
          </TextInput>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topAppBarLayout: {
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
    top: 96,
    left: 99,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  imageIcon: {
    top: 175,
    left: 42,
    borderRadius: 8,
    height: 183,
    width: 328,
    position: "absolute",
  },
  continue: {
    color: Color.light,
  },
  continueWrapper: {
    top: 586,
    left: 236,
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
    top: 0,
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
