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
import { FIREBASE_AUTH } from "./FireBase";
import Conversation1 from "./Screens/Conversation1";
import EditProfile from "./Screens/EditProfile";
import ThreadList from "../Firent/components/forum/ThreadListItem";
import CommentListItem from "../Firent/components/forum/CommonListItem";

const Stack = createStackNavigator();
const InsideStack = createStackNavigator();
import Conversation from "./Screens/Conversation";
import Payment1 from "./Screens/Payment1";
import Payment2 from "./Screens/Payment2";
import Payment3 from "./Screens/payment3";

export default function App() {
  const [user, setUser] = useState(null);

  console.log(user, "id user");

  const userGetter = (data) => {
    setUser(data);
    console.log(user, "user");
  };

  useEffect(() => {
    // Check if user is logged in and navigate accordingly
    if (user) {
      // Navigate to "Threads" screen
      // You can also add more navigation logic here if needed
    }
  }, [user]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Payment3">
        {user ? (
          <>
            <Stack.Screen
              name="Threads"
              component={ThreadList}
              options={{ title: "Forum Threads" }}
            />
            <Stack.Screen
              name="Comments"
              component={CommentListItem}
              options={{ title: "Thread Comments" }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="homePage"
              component={homePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="checkEmail"
              component={checkEmail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LocationDetails"
              component={LocationDetails}
              options={{ headerShown: false }}
              StatusBar
            />
            <Stack.Screen
              name="Signin"
              component={Signin}
              initialParams={{ userGetter }}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen
              name="Payment1"
              component={Payment1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payment2"
              component={Payment2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payment3"
              component={Payment3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Conversation1"
              component={Conversation1}
              initialParams={{ user }}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
