import * as React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  Pressable,
  TextInput,
} from "react-native";
import { Image } from "expo-image";

const UserProfil = () => {
  return (
    <View style={styles.userProfil}>
      <Text style={styles.editProfile}>Edit Profile</Text>
      <View style={[styles.ellipseParent, styles.groupItemPosition]}>
        <ImageBackground
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/ellipse2.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
      </View>
      <Image
        style={[styles.solarcameraMinimalisticBoldIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/solarcameraminimalisticbold.png")}
      />
      <View style={[styles.nameParent, styles.nameParentLayout]}>
        <Text style={styles.name}>Name</Text>
        <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
          <TextInput style={[styles.groupInner, styles.groupInnerPosition]} />
          <Text style={[styles.melissa, styles.melissaTypo]}>{`Melissa `}</Text>
        </View>
      </View>
      <View style={[styles.lastNameParent, styles.nameParentLayout]}>
        <Text style={styles.name}>Last name</Text>
        <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
          <TextInput style={[styles.groupInner, styles.groupInnerPosition]} />
          <Text style={[styles.melissa, styles.melissaTypo]}>karfouss</Text>
        </View>
      </View>
      <View style={[styles.passwordParent, styles.nameParentLayout]}>
        <Text style={styles.name}>Password</Text>
        <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
          <TextInput style={[styles.groupInner, styles.groupInnerPosition]} />
          <Text style={[styles.melissa, styles.melissaTypo]}>************</Text>
        </View>
      </View>
      <View style={[styles.dateOfBirthParent, styles.nameParentLayout]}>
        <Text style={styles.name}>Date of Birth</Text>
        <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
          <TextInput style={[styles.groupInner, styles.groupInnerPosition]} />
          <Text style={[styles.melissa, styles.melissaTypo]}>23/05/1995</Text>
        </View>
      </View>
      <View style={[styles.emailParent, styles.nameParentLayout]}>
        <Text style={styles.name}>Email</Text>
        <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
          <TextInput style={[styles.groupInner, styles.groupInnerPosition]} />
          <Text style={[styles.melissa, styles.melissaTypo]}>
            melpeters@gmail.com
          </Text>
        </View>
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleLayout]}>
        <Pressable
          style={[styles.rectanglePressable, styles.rectangleLayout]}
        />
        <Text style={[styles.saveChanges, styles.melissaTypo]}>
          Save changes
        </Text>
      </View>
      <Pressable style={[styles.groupPressable, styles.rectangleViewLayout]}>
        <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
        <Image
          style={[styles.vectorIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupItemPosition: {
    height: 176,
    width: 171,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  nameParentLayout: {
    height: 69,
    width: 342,
    left: 24,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 44,
    width: 342,
    position: "absolute",
  },
  groupInnerPosition: {
    backgroundColor: "#131316",
    borderRadius: 6,
    left: 0,
    top: 0,
  },
  melissaTypo: {
    fontFamily: "Inter-Medium",
    fontWeight: "400",
    top: "50%",
    textAlign: "left",
    color: "#fff",
    position: "absolute",
  },
  rectangleLayout: {
    height: 45,
    width: 221,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 38,
    width: 38,
    position: "absolute",
  },
  editProfile: {
    marginLeft: -53,
    top: 40,
    textAlign: "left",
    color: "#fff",
    fontFamily: "Inter-Bold",
    fontWeight: "700",
    lineHeight: 18,
    fontSize: 20,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    marginTop: -85.72,
    marginLeft: -82.42,
    width: 166,
    height: 170,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  groupItem: {
    marginTop: -87.99,
    marginLeft: -85.74,
  },
  ellipseParent: {
    marginTop: -314,
    marginLeft: -86,
  },
  solarcameraMinimalisticBoldIcon: {
    top: 200,
    left: 250,
    width: 25,
    height: 25,
  },
  name: {
    fontSize: 14,
    lineHeight: 14,
    left: 0,
    top: 0,
    textAlign: "left",
    color: "#fff",
    fontFamily: "Inter-Bold",
    fontWeight: "700",
    position: "absolute",
  },
  groupInner: {
    borderStyle: "solid",
    borderColor: "rgba(84, 76, 76, 0.14)",
    borderWidth: 1,
    height: 44,
    width: 342,
    position: "absolute",
  },
  melissa: {
    marginTop: -6,
    left: 15,
    fontSize: 14,
    lineHeight: 12,
  },
  rectangleParent: {
    top: 25,
    left: 0,
  },
  nameParent: {
    top: 250,
  },
  lastNameParent: {
    top: 340,
  },
  passwordParent: {
    top: 430,
  },
  dateOfBirthParent: {
    top: 520,
  },
  rectanglePressable: {
    backgroundColor: "#686dcd",
    borderRadius: 6,
    height: 45,
    width: 221,
    left: 0,
    top: 0,
  },
  saveChanges: {
    marginTop: -8.5,
    marginLeft: -66.5,
    lineHeight: 18,
    fontSize: 20,
    left: "50%",
    fontFamily: "Inter-Medium",
    fontWeight: "40",
  },
  rectangleParent1: {
    top: 730, // Decrease this value
    left: 90,
  },
  emailParent: {
    top: 610,
  },
  rectangleView: {
    backgroundColor: "#131316",
    borderRadius: 6,
    left: 0,
    top: 0,
  },
  vectorIcon: {
    height: "43.81%",
    width: "26.25%",
    top: "28.08%",
    right: "37.01%",
    bottom: "28.11%",
    left: "36.74%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  groupPressable: {
    top: 57,
    left: 20,
  },
  userProfil: {
    backgroundColor: "#1f1f29",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UserProfil;