import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Svg, Path } from "react-native-svg";
import { FIREBASE_AUTH } from "../FireBase";

import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

import { useNavigation } from "@react-navigation/native";

export default function Signin({ route }) {
  const navigation = useNavigation();
  const [test, settest] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userGetter } = route.params;
  console.log(userGetter, "userGtter");

  const resetPassword = () => {
    sendPasswordResetEmail(FIREBASE_AUTH, email)
      .then((res) => {
        alert("password reset email has been sent successfully");
      })
      .catch((error) => {
        alert("Please enter a valid email", error);
      });
  };

  const navigateToSignUp = () => {
    navigation.navigate("Signup"); // Assuming "SignUp" is the name of your SignUp screen in your navigator
  };

  const signIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      console.log(response);

      onAuthStateChanged(FIREBASE_AUTH, (user) => {
        console.log("userFromAuth", user);
      });

      userGetter(response.user.uid);
      settest(response.user.uid);

      navigation.navigate("HomeUserconnected", { data1: response.user.uid });
    } catch (error) {
      alert(`Sign-in failed: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Svg
        style={styles.flame}
        width="62"
        height="75"
        viewBox="0 0 62 75"
        fill="none"
      >
        <Path
          d="M31 0C-1.27287 21.0162 -17.4798 75 31 75C79.4797 75 63.2728 21.0162 31 0Z"
          fill="#FF9601"
        />
      </Svg>
      <View style={styles.inner}>
        <Svg
          style={styles.innerBase}
          width="28"
          height="36"
          viewBox="0 0 28 36"
          fill="none"
        >
          <Path
            d="M13.9999 36C-11.5001 36 6.49995 4 13.9999 0C21.4999 4 39.4999 36 13.9999 36Z"
            fill="#FFC803"
          />
        </Svg>
        <Svg
          style={styles.inner01}
          width="18"
          height="23"
          viewBox="0 0 18 23"
          fill="none"
        >
          <Path
            d="M17 22C2.49996 22.5 -1.69469 8.26173 2.49996 0C5.47671 7.77356 18.9189 14.6666 17 22Z"
            fill="#FFC803"
          />
        </Svg>
        <Svg
          style={styles.inner02}
          width="12"
          height="28"
          viewBox="0 0 12 28"
          fill="none"
        >
          <Path
            d="M1.19404 27.071C15.2742 23.5711 11.7735 10.7209 7.92954 0.450789C3.95189 7.70876 -2.66441 20.5461 1.19404 27.071Z"
            fill="#FFC803"
          />
        </Svg>
      </View>
      <Text style={styles.title}>Welcome Back!</Text>

      <TextInput
        style={styles.input}
        placeholder="Name@email.com"
        placeholderTextColor="white"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="white"
        secureTextEntry={true}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      <Text style={styles.link} onPress={resetPassword}>
        Forgot Password?
      </Text>
      <Text style={styles.link} onPress={navigateToSignUp}>
        Don't have an account ? Signup here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgba(31, 31, 41, 1)",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  inner: {
    position: "absolute",
    flexShrink: 0,
    top: 90,
    height: 36,
    left: 190,
    width: 31,
    alignItems: "flex-start",
    rowGap: 0,
  },
  innerBase: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 2,
    bottom: 0,
    left: 3,
    overflow: "visible",
  },
  inner01: {
    position: "absolute",
    flexShrink: 0,
    top: 14,
    right: 15,
    bottom: 0,
    left: 0,
    overflow: "visible",
  },
  inner02: {
    position: "absolute",
    flexShrink: 0,
    top: 8,
    right: 0,
    bottom: 1,
    left: 21,
    overflow: "visible",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    marginBottom: 150,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(19, 19, 22, 1)",
    borderRadius: 5,
    marginBottom: 20,
    color: "white",
    paddingHorizontal: 20,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(104, 109, 205, 1)", // A shade of blue, you can adjust this
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
  },
  link: {
    marginTop: 20,
    color: "rgba(104, 109, 205, 1)",
    fontSize: 12,
    fontWeight: "400",
  },
  flame: {
    marginTop: 40,
  },

  signUpButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});
