import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, TextInput, StyleSheet, ActivityIndicator, StatusBar } from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../FireBase";
import ADDRESS_IP from "../API";
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

      const credentials = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      const user = credentials.user
      const uid = user.uid
      await axios
        .post(`http://${ADDRESS_IP}:5000/users/add`, {
          firebaseId: uid,
          userName: userName,
          email: email,
<<<<<<< HEAD
          address:'Tunisia',
          image:"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
=======
          address: 'Tunisia'
>>>>>>> f788a16d43e106fd61c97f42df23c8c654531e6b
        })
        .then((res) => {
          console.log(res.data);
          navigation.navigate('Signin');
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

  StatusBar.setBackgroundColor('rgba(31, 31, 41, 1)');
  useEffect(() => {
      StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mainFlame}>
        <Svg style={styles.flame} width="62" height="75" viewBox="0 0 62 75" fill="none">
          <Path d="M31 0C-1.27287 21.0162 -17.4798 75 31 75C79.4797 75 63.2728 21.0162 31 0Z" fill="#FF9601" />
        </Svg>
        <View style={styles.inner}>
          <Svg style={styles.innerBase} width="28" height="36" viewBox="0 0 28 36" fill="none" >
            <Path d="M13.9999 36C-11.5001 36 6.49995 4 13.9999 0C21.4999 4 39.4999 36 13.9999 36Z" fill="#FFC803" />
          </Svg>
          <Svg style={styles.inner01} width="18" height="23" viewBox="0 0 18 23" fill="none" >
            <Path d="M17 22C2.49996 22.5 -1.69469 8.26173 2.49996 0C5.47671 7.77356 18.9189 14.6666 17 22Z" fill="#FFC803" />
          </Svg>
          <Svg style={styles.inner02} width="12" height="28" viewBox="0 0 12 28" fill="none" >
            <Path d="M1.19404 27.071C15.2742 23.5711 11.7735 10.7209 7.92954 0.450789C3.95189 7.70876 -2.66441 20.5461 1.19404 27.071Z" fill="#FFC803" />
          </Svg>
        </View>
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
  inner: {
    position: "absolute",
    flexShrink: 0,
    top: 30,
    height: 36,
    left: 14,
    width: 31,
    alignItems: "flex-start",
    rowGap: 0
    },
    innerBase: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 2,
    bottom: 0,
    left: 3,
    overflow: "visible"
    },
    inner01: {
    position: "absolute",
    flexShrink: 0,
    top: 14,
    right: 15,
    bottom: 0,
    left: 0,
    overflow: "visible"
    },
    inner02: {
    position: "absolute",
    flexShrink: 0,
    top: 8,
    right: 0,
    bottom: 1,
    left: 21,
    overflow: "visible"
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
