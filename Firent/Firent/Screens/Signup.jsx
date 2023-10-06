import React, { useState } from "react";
import { Text, TouchableOpacity, View, TextInput, StyleSheet, ActivityIndicator } from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../FireBase";

const Signup = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    setLoading(true);
    if (password !== retypePassword) {
      alert("Passwords do not match");
      setLoading(false);
      return;
    }
    try {
      await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      await axios.post("http://192.168.103.12:5000/users/add", {
        firebaseId: FIREBASE_AUTH.uid,
        userName: userName,
        email: email,
      });
    } catch (error) {
      alert(`Sign-up failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainFlame}>
        <Svg style={styles.flame} width="62" height="75" viewBox="0 0 62 75" fill="none">
          <Path d="M31 0C-1.27287 21.0162 -17.4798 75 31 75C79.4797 75 63.2728 21.0162 31 0Z" fill="#FF9601"/>
        </Svg>
      </View>

      <Text style={styles.headerText}>
        Let’s start your Journey together!
      </Text>

      <TextInput
        style={styles.input}
        placeholder="User name"
        value={userName}
        onChangeText={setUserName}
        placeholderTextColor="white"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="white"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="white"
      />

      <TextInput
        style={styles.input}
        placeholder="Re-type Password"
        secureTextEntry={true}
        value={retypePassword}
        onChangeText={setRetypePassword}
        placeholderTextColor="white"
      />

      <TouchableOpacity style={styles.buttonSignUp} onPress={signUp}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.alreadyAccountText} onPress={() => navigation.navigate("Signin")}>
        Already have an account?
      </Text>

      {loading && <ActivityIndicator size="large" color="#00ff00" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(31, 31, 41, 1)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  headerText: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(19, 19, 22, 1)",
    borderRadius: 5,
    color: "white",
    fontSize: 14,
    fontWeight: "400",
    paddingLeft: 20,
    marginBottom: 10,
  },
  buttonSignUp: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(19, 19, 22, 1)",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  signUpText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  alreadyAccountText: {
    color: "rgba(104, 109, 205, 1)",
    fontSize: 12,
    fontWeight: "400",
    marginTop: 20,
  },
  mainFlame: {
    marginBottom: 10,
  },
  flame: {
    marginBottom: 20,
  },
});

export default Signup;
