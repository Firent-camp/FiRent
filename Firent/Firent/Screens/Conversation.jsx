import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import { Svg, Path, Rect } from "react-native-svg";
import axios from "axios";
import io from "socket.io-client";
import ADDRESS_IP from "../API";

function Conversation({ route, navigation }) {
  const { user } = route.params;
  const [users, setUsers] = useState([]);
  const socket = io(`http://${ADDRESS_IP}:5000`);
  const getChatMessages = async (selectedUser) => {
    try {
      const response = await axios.get(
        `http://${ADDRESS_IP}:5000/chats/${user}/${selectedUser.firebaseId}`
      );
      if (response.data.chatId) {
        const chatId = response.data.chatId;
        const chatMessages = await axios.get(
          `http://${ADDRESS_IP}:5000/chats/${chatId}/messages`
        );
        navigation.navigate("Chat", {
          user,
          selectedUser,
          socket,
          chatId,
          chatMessages: chatMessages.data,
        });
      }
    } catch (error) {
      console.log("Error fetching chat messages:", error.message);
      console.log(
        "Error status:",
        error.response ? error.response.status : "N/A"
      );
    }
  };
  const startChatWithUser = (selectedUser) => {
    socket.emit("joinChat", {
      userId: user,
      otherUserId: selectedUser.firebaseId,
    });
    getChatMessages(selectedUser);
  };

  useEffect(() => {
    axios
      .get(`http://${ADDRESS_IP}:5000/users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  }, []);

  return (
    <View style={styles.chatRoom}>
      <View style={styles.headerContainer}>
        <TouchableOpacity  onPress={() => navigation.navigate("HomeUserconnected")}>
        <View style={styles.svgContainer}>
          <Svg
            width="39"
            height="38"
            viewBox="0 0 39 38"
            fill="none"
          >
            <Rect width="38.1013" height="38" rx="6" fill="#131316" />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.1462 11.5042C24.4795 11.8271 24.6667 12.2651 24.6667 12.7217C24.6667 13.1784 24.4795 13.6163 24.1462 13.9392L18.2915 19.6101L24.1462 25.2809C24.47 25.6057 24.6492 26.0407 24.6452 26.4923C24.6411 26.9438 24.4542 27.3757 24.1245 27.695C23.7949 28.0143 23.349 28.1954 22.8828 28.1993C22.4166 28.2033 21.9675 28.0297 21.6322 27.716L14.5205 20.8276C14.1872 20.5047 14 20.0667 14 19.6101C14 19.1535 14.1872 18.7155 14.5205 18.3926L21.6322 11.5042C21.9656 11.1814 22.4178 11 22.8892 11C23.3606 11 23.8128 11.1814 24.1462 11.5042Z"
              fill="#686DCD"
            />
          </Svg>
        </View>
        </TouchableOpacity>
        <Text style={styles.headerText}>Chat with Campers</Text>
      </View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.firebaseId}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={"user_" + item.firebaseId}
            onPress={() => startChatWithUser(item)}
          >
            <View style={styles.groupInner}>
              <Image
                style={styles.ellipseIcon}
                contentFit="cover"
                source={require("../assets/ellipse-6.png")}
              />
              <Text style={[styles.jessieCooper, styles.amTypo]}>
                {item.userName}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    chatRoom: {
      borderColor: "#1e1e1e",
      borderWidth: 3,
      flex: 1,
      height: 800,
      overflow: "hidden",
      width: "100%",
      borderStyle: "solid",
      backgroundColor: "#1f1f29", 
      },
    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20, 
    },
    svgContainer: {
      marginRight: 50, 
      marginTop : 25,// Increase this margin to move the header down
    },
    headerText: {
      fontSize: 24,
      fontWeight: "bold",
      color: "black",
      textAlign: "center",
      marginBottom: 20, 
      marginTop : 40,// Increase this margin to move the header down
      marginLeft: 30,

    },
    groupInner: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 20,
      height: 65,
      marginVertical: 10,
      paddingHorizontal: 16,
    },
    ellipseIcon: {
      width: 52,
      height: 52,
      marginRight: 10,
    },
    jessieCooper: {
      fontSize: 14,
      color: "#fff",
    },
    amTypo: {
      fontSize: 12,
      color: "#686dcd",
    },
  });
  

export default Conversation;
