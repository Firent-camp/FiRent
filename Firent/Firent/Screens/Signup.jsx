import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../FireBase";

const Signup = ({navigation}) => {
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
      await axios
        .post("http://192.168.103.12:5000/users/add", {
          firebaseId: FIREBASE_AUTH.uid,
          userName: userName,
          email: email,
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
    <View style={styles.signup}>
        <View style={styles.buttonSignUp} onTouchEnd={signUp}>
    <View style={styles.rectangle8} />
    <Text style={styles.signUp}>
        {`Sign Up`}
    </Text>
    
</View>

        <View style={styles.form}>
            <View style={styles.rectangle11} />
            <TextInput 
                style={styles.username}
                placeholder="User name"
                value={userName}
                onChangeText={setUserName}
                placeholderTextColor="white"
            />
        </View>

        <View style={styles._form}>
            <View style={styles._rectangle11} />
            <TextInput 
                style={styles.password}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="white"
            />
        </View>

        <View style={styles.__form}>
            <View style={styles.__rectangle11} />
            <TextInput 
                style={styles.retypePassword}
                placeholder="Re-type Password"
                secureTextEntry={true}
                value={retypePassword}
                onChangeText={setRetypePassword}
                placeholderTextColor="white"
            />
        </View>

        <View style={styles.___form}>
            <View style={styles.rectangle12} />
            <TextInput 
                style={styles.email}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="white"
            />
        </View>

        <Text style={styles.letsstartyourJourneytogether}>
            {`Let’s start your \nJourney together! `}
        </Text>
        
        {/* RN-Flow:: can be replaced with <MainFlame frame={"myVar"} /> */}
        <View style={styles.mainFlame}>
            <Svg style={styles.flame} width="62" height="75" viewBox="0 0 62 75" fill="none">
                <Path d="M31 0C-1.27287 21.0162 -17.4798 75 31 75C79.4797 75 63.2728 21.0162 31 0Z" fill="#FF9601"/>
            </Svg>
            <View style={styles.inner}>
                <Svg style={styles.innerBase} width="28" height="36" viewBox="0 0 28 36" fill="none">
                    <Path d="M14.0001 36C-11.4999 36 6.50007 4 14.0001 0C21.5 4 39.5001 36 14.0001 36Z" fill="#FFC803"/>
                </Svg>
                <Svg style={styles.inner01} width="18" height="23" viewBox="0 0 18 23" fill="none">
                    <Path d="M17 22C2.50002 22.5 -1.69463 8.26173 2.50002 0C5.47677 7.77356 18.919 14.6666 17 22Z" fill="#FFC803"/>
                </Svg>
                <Svg style={styles.inner02} width="12" height="28" viewBox="0 0 12 28" fill="none">
                    <Path d="M1.19416 27.071C15.2743 23.5711 11.7736 10.7209 7.92966 0.450789C3.95201 7.70876 -2.66428 20.5461 1.19416 27.071Z" fill="#FFC803"/>
                </Svg>
            </View>

        </View>
        <Text style={styles.alreadyhaveanaccount} onPress={()=>{
          navigation.navigate("Signin")
        }} >
{`Already have an account ?`}
</Text>
    </View>
);}

const styles = StyleSheet.create({
  signup: {
    flexShrink: 0,
    height: 812,
    width: "100%",
    backgroundColor: "rgba(31, 31, 41, 1)",
    alignItems: "flex-start",
    rowGap: 0,
  },
  buttonSignUp: {
    position: "absolute",
    flexShrink: 0,
    top: 650,
    height: 50,
    left: 38,
    width: 300,
  },
  rectangle8: {
    position: "absolute",
    flexShrink: 0,
    width: 300,
    height: 50,
    backgroundColor: "rgba(19, 19, 22, 1)",
    borderRadius: 40,
  },
  signUp: {
    position: "absolute",
    flexShrink: 0,
    top: 15,
    left: 126,
    width: 65,
    height: 25,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",

    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0,
  },
  form: {
    position: "absolute",
    flexShrink: 0,
    top: 246,
    height: 50,
    left: 38,
    width: 300,
  },
  rectangle11: {
    position: "absolute",
    flexShrink: 0,
    width: 300,
    height: 50,
    backgroundColor: "rgba(19, 19, 22, 1)",
    borderWidth: 1,
    borderColor: "rgba(19, 19, 22, 1)",
    borderRadius: 5,
  },
  username: {
    position: "absolute",
    flexShrink: 0,
    top: 17,
    left: 20,
    width: 75,
    height: 25,
    textAlign: "left",
    

    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0,
  },
  _form: {
    position: "absolute",
    flexShrink: 0,
    top: 388,
    height: 50,
    left: 38,
    width: 300,
    
  },
  _rectangle11: {
    position: "absolute",
    flexShrink: 0,
    width: 300,
    height: 50,
    backgroundColor: "rgba(19, 19, 22, 1)",
    borderWidth: 1,
    borderColor: "rgba(19, 19, 22, 1)",
    borderRadius: 5,
  },
  password: {
    position: "absolute",
    flexShrink: 0,
    top: 17,
    left: 20,
    width: 75,
    height: 25,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",

    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0,
  },
  __form: {
    position: "absolute",
    flexShrink: 0,
    top: 458,
    height: 50,
    left: 38,
    width: 300,
  },
  __rectangle11: {
    position: "absolute",
    flexShrink: 0,
    width: 300,
    height: 50,
    backgroundColor: "rgba(19, 19, 22, 1)",
    borderWidth: 1,
    borderColor: "rgba(19, 19, 22, 1)",
    borderRadius: 5,
  },
  retypePassword: {
    position: "absolute",
    flexShrink: 0,
    top: 17,
    left: 20,
    width: 125,
    height: 25,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",

    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0,
  },
  ___form: {
    position: "absolute",
    flexShrink: 0,
    top: 318,
    height: 50,
    left: 39,
    width: 300,
  },
  rectangle12: {
    position: "absolute",
    flexShrink: 0,
    width: 300,
    height: 50,
    backgroundColor: "rgba(19, 19, 22, 1)",
    borderWidth: 1,
    borderColor: "rgba(19, 19, 22, 1)",
    borderRadius: 5,
  },
  email: {
    position: "absolute",
    flexShrink: 0,
    top: 17,
    left: 20,
    width: 44,
    height: 17,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",

    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0,
  },
  letsstartyourJourneytogether: {
    position: "absolute",
    flexShrink: 0,
    top: 134,
    right: 75,
    left: 82,
    height: 60,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",

    fontSize: 25,
    fontWeight: "600",
    letterSpacing: 0,
  },
  mainFlame: {
    position: "absolute",
    flexShrink: 0,
    top: 13,
    bottom: 671,
    left: 123,
    right: 124,
    alignItems: "flex-start",
    rowGap: 0,
  },
  flame: {
    position: "absolute",
    flexShrink: 0,
    top: 26,
    right: 33,
    bottom: 27,
    left: 33,
    overflow: "visible",
  },
  inner: {
    position: "absolute",
    flexShrink: 0,
    top: 60,
    height: 36,
    left: 48,
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
  alreadyhaveanaccount: {
    position: "absolute",
    flexShrink: 0,
    top: 528,
    right: 37,
    left: 201,
    height: 14,
    textAlign: "left",
    color: "rgba(104, 109, 205, 1)",
    fontFamily: "Lato",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
    }
});

export default Signup;
