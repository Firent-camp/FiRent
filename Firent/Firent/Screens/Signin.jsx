import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { FIREBASE_AUTH } from '../FireBase';
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { onAuthStateChanged } from "firebase/auth";

export default function Signin({navigation,route}) {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
const {userGetter} = route.params
console.log(userGetter,"userGtter");
    const resetPassword = () => {
        sendPasswordResetEmail(FIREBASE_AUTH, email)
          .then((res) => {
            alert('password reset email has been sent successfully') 
          })
          .catch((error) => {
            alert('Please enter a valid email', error);
          });
      }
   

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);

            onAuthStateChanged(FIREBASE_AUTH, (user) => {
                console.log("userFromAuth", user);
              })
          const response = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
          userGetter(response.user.uid)
    
        } catch (error) {
            alert(`Sign-in failed: ${error.message}`);
        } 
    };

    return (
        <View style={styles.container}>
            <Svg style={styles.flame} width="62" height="75" viewBox="0 0 62 75" fill="none">
                <Path d="M31 0C-1.27287 21.0162 -17.4798 75 31 75C79.4797 75 63.2728 21.0162 31 0Z" fill="#FF9601"/>
            </Svg>
            
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
    
            <Text style={styles.link} onPress={resetPassword}>Forgot Password?</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',  
        backgroundColor: "rgba(31, 31, 41, 1)",
        alignItems: "center",
        justifyContent: 'flex-start',  
        padding: 20
    },
    title: {
        fontSize: 25,
        fontWeight: "700",
        color: "rgba(255, 255, 255, 1)",
        marginBottom: 150
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
        backgroundColor: "rgba(19, 19, 22, 1)",
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
    }
});
