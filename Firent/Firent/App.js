import React, { useEffect, useState } from "react";
import { StatusBar, Image, View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Signin from "./Screens/Signin";
import Signup from "./Screens/Signup";
import Chat from "./Screens/Chat";
import Login from "./Screens/login";
import checkEmail from "./Screens/checkEmail";
import details from "./Screens/details";
import LocationDetails from "./Screens/locationDetails";
import list from "./Screens/list";

import { FIREBASE_AUTH } from "./FireBase";
import Conversation from "./Screens/Conversation";
const Stack = createStackNavigator();
const InsideStack = createStackNavigator();

function InsideLayout({route}) {
const {user} = route.params
console.log(user,"uuuuuuserrr");
 
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="todos" component={Conversation} initialParams={{user}} />
      <InsideStack.Screen name="details" component={details} />
      <InsideStack.Screen name="Chat" component={Chat} />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
console.log(user,"id user");
  const userGetter = (data) => {
    setUser(data)
    console.log(user,"user");
  }

  ;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signup">
        {user ? (
          <Stack.Screen
            name="Inside"
            component={InsideLayout}
            initialParams={{user}}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            {/* <Stack.Screen name="checkEmail" component={checkEmail} /> */}

            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen
              name="Signin"
              component={Signin}
              // Pass the userGetter function as a prop
              initialParams={{ userGetter }}
            />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="conver" component={Conversation} />

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
