import React, { useEffect, useState } from "react";
// import { StatusBar, Image, View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import ADRESS_API from "./API";
// Screens
import Signin from "./Screens/Signin";
import Signup from "./Screens/Signup";
import Chat from "./Screens/Chat";
// import Login from "./Screens/login";
import HomeUserconnected from "./Screens/HomeUserconnected";
import checkEmail from "./Screens/checkEmail";
import LocationDetails from "./Screens/locationDetails";
// import list from "./Screens/list";
// import { FIREBASE_AUTH } from "./FireBase";
import Conversation1 from "./Screens/Conversation1";
import Conversation from "./Screens/Conversation";
import EditProfile from "./Screens/EditProfile";
import ThreadList from "../Firent/components/forum/ThreadListItem";
import Cart from "./Screens/Cart";
import CommentListItem from "../Firent/components/forum/CommonListItem";
import HpUserNotConnected from "./Screens/HpUserNotConnected";
// import Conversation from "./Screens/Conversation";
import Payment1 from "./Screens/Payment1";
import Payment2 from "./Screens/Payment2";
import Payment3 from "./Screens/payment3";
import Userprofilimages from "./Screens/UserProfilImages";
import UserProfilPosts from "./Screens/UserProfilPosts";
import ImageGrid from "./Screens/ImageGrid";
import Test from "./Screens/test";
import axios from "axios";
export default function App() {
  const [user, setUser] = useState(null);
  const Stack = createStackNavigator();
  const [userDetail, setUserDetail] = useState(null);
  const InsideStack = createStackNavigator();
  const userGetter = (data) => {
    setUser(data);
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://${ADRESS_API}:5000/users/firebase/${user}`
        );
        if (response.status === 200) {
          const userData = response.data;
          setUserDetail(userData);
        } else {
          console.error("Failed to fetch user data. Status:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user ? "Inside" : "HpUserNotConnected"}
      >
        {user ? (
          <>
            <Stack.Screen
              name="HomeUserconnected"
              component={HomeUserconnected}
              initialParams={{ user }}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              initialParams={{ user }}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Conversation"
              component={Conversation}
              initialParams={{ user }}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              initialParams={{ user, userDetail }}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Threads"
              component={ThreadList}
              options={{ headerShown: false }}
            />
            {/*
            <Stack.Screen
              name="Comments"
              component={CommentListItem}
              options={{ title: "Thread Comments" }}
            /> */}

            <Stack.Screen
              name="LocationDetails"
              component={LocationDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Userprofilimages"
              component={Userprofilimages}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserProfilPosts"
              component={UserProfilPosts}
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
              name="ImageGrid"
              component={ImageGrid}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Test"
              component={Test}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="HpUserNotConnected"
              component={HpUserNotConnected}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signin"
              component={Signin}
              initialParams={{ userGetter }}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="checkEmail"
              component={checkEmail}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
