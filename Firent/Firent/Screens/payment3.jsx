import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Padding, FontFamily, Color, FontSize, Border } from "../globalcss";

const Payment3 = () => {
  return (
    <View style={styles.payment3}>
      <View style={[styles.topAppBar, styles.topAppBarLayout]}>
        <View style={[styles.headerIcon, styles.headerIconFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/arrow-left.png")}
          />
          <Text style={[styles.title, styles.titleTypo]}>Payment method</Text>
        </View>
        <Image
          style={[styles.moreVerticalIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/more-vertical.png")}
        />
      </View>
      <View style={[styles.progressBar, styles.progressBarFlexBox]}>
        <Image
          style={styles.progressIndicatorIcon}
          contentFit="cover"
          source={require("../assets/progress-indicator.png")}
        />
        <View style={styles.textItem}>
          <Text style={[styles.details, styles.detailsTypo]}>Details</Text>
          <Text style={[styles.payment, styles.detailsTypo]}>Payment</Text>
          <Text style={[styles.payment, styles.detailsTypo]}>Confirm</Text>
        </View>
      </View>
      <View style={[styles.sucessSignParent, styles.progressBarFlexBox]}>
        <Image
          style={styles.sucessSignIcon}
          contentFit="cover"
          source={require("../assets/sucess-sign.png")}
        />
        <View style={[styles.confirmText, styles.progressBarFlexBox]}>
          <Text style={[styles.success, styles.titleTypo]}>Success!</Text>
          <Text style={styles.greatPurchasethankYou}>
            Great purchase.Thank you for your purchase
          </Text>
        </View>
      </View>
      <View style={[styles.continueWrapper, styles.headerIconFlexBox]}>
        <Text style={[styles.continue, styles.detailsTypo]}>Done</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topAppBarLayout: {
    height: 48,
    left: 0,
  },
  headerIconFlexBox: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  titleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.largeH2,
    color: Color.colorWhite,
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  progressBarFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  detailsTypo: {
    fontFamily: FontFamily.subtitle14pxmedium,
    fontWeight: "500",
    fontSize: FontSize.subtitle14pxmedium_size,
    textAlign: "left",
    letterSpacing: 0,
  },
  title: {
    fontSize: FontSize.subtitle16pxRegular_size,
    marginLeft: 8,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.largeH2,
  },
  headerIcon: {
    top: 0,
    width: 186,
    paddingHorizontal: 0,
    height: 48,
    left: 0,
  },
  moreVerticalIcon: {
    top: 12,
    left: 320,
    position: "absolute",
  },
  topAppBar: {
    top: 32,
    width: 360,
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
  },
  payment: {
    marginLeft: 32,
    color: Color.colorWhite,
    fontFamily: FontFamily.subtitle14pxmedium,
    fontWeight: "500",
  },
  textItem: {
    marginTop: 8,
    flexDirection: "row",
  },
  progressBar: {
    top: 96,
    left: 69,
    position: "absolute",
  },
  sucessSignIcon: {
    width: 180,
    height: 180,
  },
  success: {
    fontSize: FontSize.largeH2_size,
    letterSpacing: 0.2,
  },
  greatPurchasethankYou: {
    letterSpacing: 0.1,
    fontSize: FontSize.subtitle14pxmedium_size,
    marginTop: 8,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.largeH2,
  },
  confirmText: {
    marginTop: 16,
  },
  sucessSignParent: {
    top: 195,
    left: 36,
    position: "absolute",
  },
  continue: {
    color: Color.light,
  },
  continueWrapper: {
    top: 484,
    left: 139,
    borderRadius: Border.br_81xl,
    paddingHorizontal: Padding.p_5xl,
    backgroundColor: Color.colorMediumpurple,
    overflow: "hidden",
  },
  payment3: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
    backgroundColor: Color.colorGray_100,
    width:"100%",
    height:"100%"
  },
});

export default Payment3;
