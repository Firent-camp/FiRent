import React, { useEffect, useState } from "react";
import { StatusBar, View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Import your screens here
import BottomNavigation from "./component/BottomNavigation";
import Signin from "./Screens/Signin";
import Signup from "./Screens/Signup";
import Chat from "./Screens/Chat";
import Login from "./Screens/Login";
import homePage from "./Screens/homePage";
import checkEmail from "./Screens/checkEmail";
import LocationDetails from "./Screens/LocationDetails";
import list from "./Screens/list";
import Conversation1 from "./Screens/Conversation1";
import EditProfile from "./Screens/EditProfile";
import ThreadList from "../Firent/components/forum/ThreadListItem";
import Cart from "./Screens/Cart";
import CommentListItem from "../Firent/components/forum/CommonListItem";
import HpUserNotConnected from "./Screens/HpUserNotConnected";
import Userprofilimages from "./Screens/UserProfilImages";
import ImageGrid from "./Screens/ImageGrid";
import Test from "./Screens/Test";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  const userGetter = (data) => {
    setUser(data);
  };

  useEffect(() => {
    // Check if user is logged in and navigate accordingly
    // Example logic: if (user) navigate to "Threads" screen
  }, [user]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "Threads" : "homePage"}>
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
        <Stack.Screen name="ImageGrid" component={ImageGrid} options={{ headerShown: false }} />
        <Stack.Screen name="Test" component={Test} options={{ headerShown: false }} />
        <Stack.Screen name="homePage" component={homePage} options={{ headerShown: false }} />
        <Stack.Screen name="Userprofilimages" component={Userprofilimages} options={{ headerShown: false }} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
        <Stack.Screen name="HpUserNotConnected" component={HpUserNotConnected} options={{ headerShown: false }} />
        <Stack.Screen name="checkEmail" component={checkEmail} options={{ headerShown: false }} />
        <Stack.Screen name="LocationDetails" component={LocationDetails} options={{ headerShown: false }} />
        <Stack.Screen name="Signin" component={Signin} initialParams={{ userGetter }} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Payment1" component={Payment1} options={{ headerShown: false }} />
        <Stack.Screen name="Payment2" component={Payment2} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
        <Stack.Screen name="Payment3" component={Payment3} options={{ headerShown: false }} />
        <Stack.Screen
          name="Conversation1"
          component={Conversation1}
          initialParams={{ user }}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
