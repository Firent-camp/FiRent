import React, { useEffect, useState } from "react";
import { StatusBar, Image, View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Signin from "./Screens/Signin";
import Splash from "./Screens/Splash";
import Login from "./Screens/login";
import checkEmail from "./Screens/checkEmail";
import details from "./Screens/details";
import LocationDetails from "./Screens/locationDetails";
import list from "./Screens/list";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./FireBase";
import Signup from "./Screens/Signup";
import Payment1 from "./Screens/Payment1";
import Payment2 from "./Screens/Payment2";
const Stack = createStackNavigator();
const InsideStack = createStackNavigator();




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
      <Stack.Navigator initialRouteName="Payment2">
        {user ? (
          <Stack.Screen
            name="Inside"
            component={InsideLayout}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen name="checkEmail" component={checkEmail} />

            {/* <Stack.Screen name="Splash" component={Splash} /> */}
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Payment1" component={Payment1} options={{headerShown:false}} />
            <Stack.Screen name="Payment2" component={Payment2} options={{headerShown:false}} />

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
