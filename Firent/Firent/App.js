import React, { useContext, useEffect, useState } from "react";
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
// import LocationDetails from "./Screens/LocationDetails";
import list from "./Screens/list";
import Conversation1 from "./Screens/Conversation1";
import EditProfile from "./Screens/EditProfile";
import ThreadList from "../Firent/components/forum/ThreadListItem";
import Cart from "./Screens/Cart";
import CommentListItem from "../Firent/components/forum/CommonListItem";
import HpUserNotConnected from "./Screens/HpUserNotConnected";
// import Conversation from "./Screens/Conversation";
import Payment1 from "./Screens/Payment1";
import Payment2 from "./Screens/Payment2";
import Payment3 from "./Screens/payment3";
import LocationDetails from "./Screens/locationDetails";
// import Test from "./Screens/Test";
import Userprofilimages from "./Screens/UserProfilImages";
import ImageGrid from "./Screens/ImageGrid";

import axios from "axios";
import { AuthProvider } from "./Screens/Context";

export default function App() {
  const [user, setUser] = useState(null);
  const Stack = createStackNavigator();

  const [userDetail, setUserDetail] = useState({});
  const InsideStack = createStackNavigator();

  const userGetter = (data) => {
    setUser(data);
  };

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={user ? "Inside" : "Signup"}>
          {user ? (
            <>
                <Stack.Screen
                  name="Threads"
                  component={ThreadList}
                  options={{ title: "Forum Threads" }}
                />
              <Stack.Screen
                name="HomeUserconnected"
                component={HomeUserconnected}
                initialParams={{ user: user }}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EditProfile"
                component={EditProfile}
                initialParams={{ user }}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="Conversation1"
                component={Conversation1}
                initialParams={{ user }}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="Chat" component={Chat} />
              <Stack.Screen
                name="Cart"
                component={Cart}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Payment3"
                component={Payment3}
                options={{ headerShown: false }}
              />
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
                name="Payment2"
                component={Payment2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Payment1"
                component={Payment1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ImageGrid"
                component={ImageGrid}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="HpUserNotConnected"
                component={HpUserNotConnected}
                options={{ headerShown: false }}
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
    </AuthProvider>
  );
}
