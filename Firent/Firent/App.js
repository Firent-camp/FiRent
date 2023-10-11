import React, { useEffect, useState } from "react";
import { StatusBar, Image, View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import Signin from "./Screens/Signin";
import Signup from "./Screens/Signup";
import Chat from "./Screens/Chat";
import Login from "./Screens/login";
import homePage from "./Screens/homePage";
import checkEmail from "./Screens/checkEmail";
import details from "./Screens/details";
import LocationDetails from "./Screens/locationDetails";
import list from "./Screens/list";
import Conversation from "./Screens/Conversation";
import Payment1 from "./Screens/Payment1";
import Payment2 from "./Screens/Payment2";
import Payment3 from "./Screens/payment3";
// Firebase
import { FIREBASE_AUTH } from "./FireBase";


const Stack = createStackNavigator();
const InsideStack = createStackNavigator();

function InsideLayout({ route }) {
  const { user } = route.params;
  console.log(user, "uuuuuuserrr");
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="todos" component={Conversation} initialParams={{ user }} />
      <InsideStack.Screen name="details" component={details} />
      <InsideStack.Screen name="Chat" component={Chat} />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  console.log(user, "id user");

  const userGetter = (data) => {
    setUser(data);
    console.log(user, "user");
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        {user ? (
          <Stack.Screen name="Inside" component={InsideLayout} options={{ headerShown: false }} />
        ) : (
          <>
            <Stack.Screen name="homePage" component={homePage} options={{ headerShown: false }} />
            <Stack.Screen name="checkEmail" component={checkEmail} options={{ headerShown: false }} />
            <Stack.Screen name="LocationDetails" component={LocationDetails} options={{ headerShown: false }} StatusBar />
            <Stack.Screen name="Signin" component={Signin} initialParams={{ userGetter }} options={{ headerShown: false }} />
            <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="conver" component={Conversation} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Payment1" component={Payment1} options={{ headerShown: false }} />
            <Stack.Screen name="Payment2" component={Payment2} options={{ headerShown: false }} />
            <Stack.Screen name="Payment3" component={Payment3} options={{ headerShown: false }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
