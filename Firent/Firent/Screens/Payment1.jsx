import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Padding, Color, FontFamily, FontSize, Border } from "../globalcss";
import { TextInput } from "react-native-gesture-handler";

const Payment1 = () => {
    const [name, setName] = React.useState('');
  const [country, setCountry] = React.useState('');

  return (
    <View style={styles.payment1} >
      <View style={[styles.topAppBar, styles.topAppBarLayout]}>
        <View style={[styles.headerIcon, styles.headerIconFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/arrow-left.png")}
          />
          <Text style={[styles.title, styles.nameFlexBox]}>Payment method</Text>
        </View>
        <Image
          style={[styles.moreVerticalIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/more-vertical.png")}
        />
      </View>
      <View style={[styles.progressBar, styles.parentFlexBox]}>
        <Image
          style={styles.progressIndicatorIcon}
          contentFit="cover"
          source={require("../assets/progress-indicator.png")}
        />
        <View style={styles.textItem}>
          <Text style={[styles.details, styles.textTypo]}>Details</Text>
          <Text style={[styles.payment, styles.textTypo]}>Payment</Text>
          <Text style={[styles.payment, styles.textTypo]}>Confirm</Text>
        </View>
      </View>
      <Image
        style={[styles.imageIcon, styles.pricePosition]}
        contentFit="cover"
        source={require("../assets/image.png")}
      />
      <View style={[styles.price, styles.pricePosition]}>
        <View>
          <View>
            <View>
              <View>
                <View>
                  <View style={[styles.productParent, styles.parentFlexBox]}>
                    <Text style={[styles.product, styles.nameFlexBox]}>
                      Ivory sun hat
                    </Text>
                    <Text style={[styles.price1, styles.textTypo]}>$49.00</Text>
                  </View>
                  <View style={[styles.taxesParent, styles.parentFlexBox]}>
                    <Text style={[styles.product, styles.nameFlexBox]}>
                      Taxes
                    </Text>
                    <Text style={[styles.price2, styles.textTypo]}>$5.00</Text>
                  </View>
                </View>
                <View style={styles.divider} />
              </View>
              <View style={[styles.taxesParent, styles.parentFlexBox]}>
                <Text style={[styles.product, styles.nameFlexBox]}>
                  Subtotal
                </Text>
                <Text style={[styles.text, styles.textTypo]}>$54.00</Text>
              </View>
            </View>
            <View style={styles.shippingFeeParent}>
              <Text style={[styles.product, styles.nameFlexBox]}>
                Shipping fee
              </Text>
              <Text style={[styles.text1, styles.textTypo]}>$00.00</Text>
            </View>
          </View>
          <View style={styles.divider} />
        </View>
        <View style={styles.totalParent}>
          <Text style={[styles.product, styles.nameFlexBox]}>Total</Text>
          <Text style={[styles.text2, styles.textTypo]}>$54.00</Text>
        </View>
      </View>
      <Pressable
        style={[styles.continueWrapper, styles.headerIconFlexBox]}
        onPress={() => {}}
      >
        <Text style={[styles.continue, styles.textTypo]}>Continue</Text>
      </Pressable>
      <View style={[styles.form, styles.formLayout]}>
      <TextInput
        style={[styles.inputStyle, styles.formChild]}
        placeholder="Name"
        placeholderTextColor="white"
        value={name}
        onChangeText={setName}
      />
    </View>
    <View style={[styles.form1, styles.formLayout]}>
      <TextInput
        style={[styles.inputStyle, styles.formChild]}
        placeholder="Country"
        placeholderTextColor="white"
        value={country}
        onChangeText={setCountry}
      />
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
  nameFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    fontFamily: FontFamily.subtitle14pxmedium,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: 0,
  },
  pricePosition: {
    width: 328,
    left:38,
    position: "absolute",
    marginTop:40,
  },
  formLayout: {
    marginTop:60,
    height: 75,
    width: 170,
    left: 340,
    position: "absolute",
    textDecorationColor:"white",
  },
  title: {
    
    marginLeft: 8,
    fontFamily: FontFamily.subtitle16pxRegular,
    letterSpacing: 0,
    textAlign: "left",
    fontSize: FontSize.subtitle16pxRegular_size,
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
    marginTop:40,
    width: "100%",
    alignSelf: 'center', 
    backgroundColor: Color.colorMediumpurple,
    position: "absolute", 
    top: 0, 
  },
  
  progressIndicatorIcon: {
    marginTop: 20,
    width: 188,
    height: 12,
    alignSelf: 'center',
    left: 23 ,
  },
  details: {
    fontSize: FontSize.subtitle14pxmedium_size,
    color: Color.colorWhite,
    fontWeight: "500",
  },
  payment: {
    marginLeft: 32,
    fontSize: FontSize.subtitle14pxmedium_size,
    color: Color.colorWhite,
    fontWeight: "500",
  },
  textItem: {
    marginTop: 8,
    flexDirection: "row",
    backgroundColor: Color.colorGray_100,
    justifyContent: "center",
    alignSelf:"center",
    left: 24,
  },
  progressBar: {
    top: 96,
    left: 69,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  image: {
    flexShrink: 0,
    width: 328,
    height: 93,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderRadius: 8
    },
  imageIcon: {
    position: "absolute",
    top: 150,
    marginTop:20,
    borderRadius: 8,
    height: 93,
    width: "328px",
    left: 455,
    borderRadius: "8px"
    
  },
  product: {
    fontFamily: FontFamily.subtitle16pxRegular,
    letterSpacing: 0,
    textAlign: "left",
    fontSize: FontSize.subtitle16pxRegular_size,
    margin: 7,
  },
  price1: {
    marginLeft: 177,
    color: Color.colorWhite,
    fontWeight: "500",
    fontSize: FontSize.subtitle16pxRegular_size,
  },
  productParent: {
    flexDirection: "row",
  },
  price2: {
    marginLeft: 241,
    color: Color.colorWhite,
    fontWeight: "500",
    fontSize: FontSize.subtitle16pxRegular_size,
  },
  taxesParent: {
    marginTop: 8,
    flexDirection: "row",
  },
  divider: {
    borderColor: Color.colorMediumpurple,
    borderTopWidth: 1,
    width: 329,
    height: 1,
    borderStyle: "solid",
    marginTop: 8,
  },
  text: {
    marginLeft: 211,
    color: Color.colorWhite,
    fontWeight: "500",
    fontSize: FontSize.subtitle16pxRegular_size,
    
  },
  text1: {
    marginLeft: 181,
    color: Color.colorWhite,
    fontWeight: "500",
    fontSize: FontSize.subtitle16pxRegular_size,
  },
  shippingFeeParent: {
    marginTop: 5,
    flexDirection: "row",
  },
  text2: {
    marginLeft: 238,
    color: Color.colorWhite,
    fontWeight: "500",
    fontSize: FontSize.subtitle16pxRegular_size,
  },
  totalParent: {
    marginTop: 8,
    flexDirection: "row",
  },
  price: {
    top: 267,
  },
  continue: {
    
    color: Color.light,
    fontSize: FontSize.subtitle14pxmedium_size,
  },
  continueWrapper: {
    bottom: 65,
    left: 255,
    borderRadius: Border.br_81xl,
    paddingHorizontal: Padding.p_5xl,
    backgroundColor: Color.colorMediumpurple,
    overflow: "hidden",
  },
  formChild: {
    paddingLeft:10,
    marginLeft: -150,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGray_200,
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    height: 50,
  },
  name: {
    top: 45,
    left: 20,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.subtitle14pxmedium_size,
    position: "absolute",
    
  },
  form: {
    top: 500,
    marginLeft: -151,
    width: 300,
    left: "50%",
    
  },
  form1: {
    top: 577,
    marginLeft: -151,
    width: 300,
    left: "50%",
    
  },
  payment1: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
    backgroundColor: Color.colorGray_100,
    width:"100%",
    height:"100%"
    
  }
});

export default Payment1;
