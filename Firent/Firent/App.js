import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ADRESS_API from "./API";
import Splash from "./Screens/Splash";
import HomeUserconnected from "./Screens/HomeUserconnected";
import HpUserNotConnected from "./Screens/HpUserNotConnected";
import Signin from "./Screens/Signin";
import Signup from "./Screens/Signup";
import checkEmail from "./Screens/checkEmail";
import Chat from "./Screens/Chat";
import LocationDetails from "./Screens/locationDetails";
import Conversation from "./Screens/Conversation";
import EditProfile from "./Screens/EditProfile";
import ThreadList from "../Firent/components/forum/ThreadListItem";
import Cart from "./Screens/Cart";
import CommentListItem from "../Firent/components/forum/CommonListItem";
import Payment1 from "./Screens/Payment1";
import Payment2 from "./Screens/Payment2";
import Payment3 from "./Screens/payment3";
import Userprofilimages from "./Screens/UserProfilImages";
import UserProfilPosts from "./Screens/UserProfilPosts";
import ImageGrid from "./Screens/ImageGrid";
import Test from "./Screens/test";
import axios from "axios";
import Trips from "./Screens/Trips";
import Favorites from "./Screens/Favorites";

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
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="HomeUserconnected" component={HomeUserconnected} initialParams={{ user }} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
        <Stack.Screen name="Trips" component={Trips} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={Chat} initialParams={{ user }} options={{ headerShown: false }} />
        <Stack.Screen name="Conversation" component={Conversation} initialParams={{ user }} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile" component={EditProfile} initialParams={{ user, userDetail }} options={{ headerShown: false }} />
        <Stack.Screen name="Threads" component={ThreadList} options={{ headerShown: false }} />
        <Stack.Screen name="LocationDetails" component={LocationDetails} options={{ headerShown: false }} />
        <Stack.Screen name="Userprofilimages" component={Userprofilimages} options={{ headerShown: false }} />
        <Stack.Screen name="UserProfilPosts" component={UserProfilPosts} options={{ headerShown: false }} />
        <Stack.Screen name="Payment1" component={Payment1} options={{ headerShown: false }} />
        <Stack.Screen name="Payment2" component={Payment2} options={{ headerShown: false }} />
        <Stack.Screen name="Payment3" component={Payment3} options={{ headerShown: false }} />
        <Stack.Screen name="ImageGrid" component={ImageGrid} options={{ headerShown: false }} />
        <Stack.Screen name="Favorites" component={Favorites} options={{ headerShown: false }} />
        <Stack.Screen name="HpUserNotConnected" component={HpUserNotConnected} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Signin" component={Signin} initialParams={{ userGetter }} options={{ headerShown: false }} />
        <Stack.Screen name="checkEmail" component={checkEmail} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
