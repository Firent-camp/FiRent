import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Svg, Path, Rect } from "react-native-svg";

function Chat({ route }) {
  const { user, selectedUser, socket, chatId, chatMessages } = route.params;
  const [messages, setMessages] = useState(chatMessages);
  const [newMessage, setNewMessage] = useState("");
  const scrollViewRef = useRef();
  const navigation = useNavigation();

  useEffect(() => {
    // Function to handle incoming messages
    const handleMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }
    };

    socket.emit("joinChat", {
      userId: user,
      otherUserId: selectedUser.firebaseId,
    });

    socket.on("message", handleMessage);

    return () => {
      // Clean up the event listener when the component unmounts
      socket.off("message", handleMessage);
      socket.emit("leaveChat", {
        userId: user,
        otherUserId: selectedUser.firebaseId,
      });
    };
  }, [user, selectedUser, socket]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        text: newMessage,
        senderId: user,
        chatId: chatId,
      };

      socket.emit("sendMessage", message);

      setNewMessage("");
    }
  };

  return (
    <View style={styles.chat}>
      <View style={styles.chatChild} />
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Conversation")}>
          <View style={styles.svgContainer}>
            <Svg width="39" height="38" viewBox="0 0 39 38" fill="none">
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
        <Text style={styles.chatHeaderText}>Firent Chat</Text>
      </View>
      <ScrollView
        style={styles.messageContainer}
        ref={scrollViewRef}
      >
        {messages.map((message, index) => (
          <View
            key={index}
            style={
              message.senderId === user
                ? styles.sentMessage
                : styles.receivedMessage
            }
          >
            {message.senderId === user ? (
              <View style={styles.sentMessageContent}>
                <Text style={styles.sentMessageText}>{message.content}</Text>
                <Svg width="24" height="24" viewBox="0 0 24 24">
                  <Path
                    fill={message.senderId === user ? "#686dcd" : "#131316"}
                    d="M12 22c-0.4 0-0.8-0.1-1.1-0.4l-10-6c-0.4-0.2-0.7-0.6-0.7-1.1v-4c0-0.9 0.7-1.6 1.6-1.6h3.2v-6c0-0.4 0.3-0.8 0.7-1.1 0.6-0.4 1.3-0.3 1.7 0.3l9.7 5.8h0.1c0.5 0.3 0.8 0.7 0.8 1.3v 5.6h 2.8c0.9 0 1.6 0.7 1.6 1.6v 4c 0 0.5-0.3 0.9-0.7 1.1l-10 6c-0.2 0.1-0.6 0.3-0.9 0.3z"
                  />
                </Svg>
              </View>
            ) : (
              <View style={styles.receivedMessageContent}>
                <Svg width="24" height="24" viewBox="0 0 24 24">
                  <Path
                    fill={message.senderId === user ? "#686dcd" : "#131316"}
                    d="M12 22c-0.4 0-0.8-0.1-1.1-0.4l-10-6c-0.4-0.2-0.7-0.6-0.7-1.1v-4c0-0.9 0.7-1.6 1.6-1.6h3.2v-6c0-0.4 0.3-0.8 0.7-1.1 0.6-0.4 1.3-0.3 1.7 0.3l9.7 5.8h0.1c0.5 0.3 0.8 0.7 0.8 1.3v 5.6h 2.8c0.9 0 1.6 0.7 1.6 1.6v 4c 0 0.5-0.3 0.9-0.7 1.1l-10 6c-0.2 0.1-0.6 0.3-0.9 0.3z"
                  />
                </Svg>
                <Text style={styles.receivedMessageText}>{message.content}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>

      <View style={styles.messageInputContainer}>
        <TextInput
          style={styles.messageInput}
          placeholder="Type your message here"
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chat: {
    borderColor: "#1e1e1e",
    borderWidth: 3,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    borderStyle: "solid",
    backgroundColor: "#1f1f29",
  },
  chatChild: {
    height: "8.62%",
    top: "0%",
    left: "0%",
    width: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  chatHeaderText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginLeft: 20,
  },
  sentMessage: {
    alignSelf: "flex-end",
    borderRadius: 10,
    padding: 8,
    margin: 8,
    maxWidth: "70%",
    marginTop: 10,
  },
  receivedMessage: {
    alignSelf: "flex-left",
    borderRadius: 10,
    padding: 8,
    margin: 8,
    maxWidth: "70%",
    marginTop: 10,
  },
  sentMessageText: {
    backgroundColor: "#E5E5EA",
    padding: 10,
    borderRadius: 10,
    margin: 5,
  },
  receivedMessageText: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 10,
    margin: 5,
  },
  messageContainer: {
    flex: 1,
    margin: 10,
  },
  messageInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderTopColor: "#333",
    backgroundColor: "#1f1f29",
    marginTop: 10,
  },
  messageInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingLeft: 12,
  },
  sendButton: {
    backgroundColor: "#686dcd",
    borderRadius: 20,
    marginLeft: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sendButtonText: {
    color: "#fff",
  },
});

export default Chat;
