import React, { useEffect, useState } from "react";
import { StatusBar, Image, View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Signin from "./Screens/Signin";
import Splash from "./Screens/Splash";
import Login from "./Screens/login";
import checkEmail from "./Screens/checkEmail";
import details from "./Screens/details";
import list from "./Screens/list";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./FireBase";
const Stack = createStackNavigator();
const InsideStack = createStackNavigator();
// import Signin from "./Screens/Signin";
import Signup from "./Screens/Signup"

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="todos" component={list} />
      <InsideStack.Screen name="details" component={details} />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("user", user);
      setUser(user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        {user ? (
          <Stack.Screen
            name="Inside"
            component={InsideLayout}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen name="checkEmail" component={checkEmail} />

            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown:false }} />


            <Stack.Screen
              name="login"
              component={Login}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
