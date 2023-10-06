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

function InsideLayout({ route }) {
  const { user } = route.params;

  return (
    <InsideStack.Navigator>
      <InsideStack.Screen
        name="todos"
        component={Conversation}
        initialParams={{ user }}
      />
      <InsideStack.Screen name="details" component={details} />
      <InsideStack.Screen name="Chat" component={Chat} />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const userGetter = (data) => {
    setUser(data);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        {user ? (
          <Stack.Screen
            name="Inside"
            component={InsideLayout}
            initialParams={{ user }}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            {/* <Stack.Screen
              name="checkEmail"
              component={checkEmail}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="LocationDetails"
              component={LocationDetails}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="Signin"
              component={Signin}
              initialParams={{ userGetter }}
            />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen
              name="Conversation"
              component={Conversation}
              initialParams={{ user }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
