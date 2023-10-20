import React, { useState } from "react";
import { Text, TouchableOpacity, View, TextInput, StyleSheet, ActivityIndicator } from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../FireBase";
import ADRESS_API from "../API";

const Signup = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    setLoading(true);
    if (password !== retypePassword) {
      alert("Passwords do not match");
      setLoading(false);
      return;
    }
    try {

     const credentials =  await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
     const user = credentials.user
     const uid = user.uid
     console.log(uid,"uid");
      await axios
        .post(`http://${ADRESS_API}:5000/users/add`, {
          firebaseId: uid,
          userName: userName,
          email: email,
          address:'Tunisia',
          image:"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
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
