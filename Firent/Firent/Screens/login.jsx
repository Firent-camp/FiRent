import React, { useState, useCallback } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Button,
  KeyboardAvoidingView
} from 'react-native';
import axios from 'axios';
import { FIREBASE_AUTH } from '../FireBase';
import {
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const Login = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [lastName,setLastName]=useState("")
  const [userName,setUserName]=useState("")
  const [address,setAddress]=useState("")


  const [loading, setLoading] = useState(false);

  const handleChange = useCallback((name, value) => {
    setCredentials(prevState => ({ ...prevState, [name]: value }));
  }, []);



   const saveUserDataToDatabase = async (userData) => {
    try {
      console.log(userData, "this is it");
      const response = await axios.post("http://192.168.103.12:5000/users/add",{
        userData
    }
      )
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      console.log(userData,"userData");
      return await response.json();
    } catch (error) {
      console.error("Error saving user data:", error);
      throw error;
    }
  };

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
      console.log(response);
    } catch (error) {
      alert(`Sign-in failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      await axios.post("http://192.168.103.12:5000/users/add",{
        firebaseId:FIREBASE_AUTH.uid,
        name:name,
        email:email,
        userName:userName,
        lastName:lastName,
        address:address
    }
      )
      .then((res)=>{
        console.log(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })

    } catch (error) {
      alert(`Sign-up failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = () => {
    sendPasswordResetEmail(FIREBASE_AUTH, email)
      .then((res) => {
        console.log(email, "email")
        alert('password reset email has been sent successfully')
      })
      .catch((error) => {
        alert('Please enter a valid email', error);
      });
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <TextInput
        style={styles.input}
        placeholder="User Name"
        value={userName}
        onChangeText={(userName) => setUserName(userName)}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(name) => setName(name)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={(lastName) => setLastName(lastName)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(password) => setPassword(password)}
      />

<TextInput
        style={styles.input}
        placeholder="Adress"
        value={address}
        onChangeText={(address) => setAddress(address)}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Button title="Login" onPress={signIn} />
          <Button title="Sign Up" onPress={signUp} />
        </>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default Login;
