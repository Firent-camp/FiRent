import React, { useState, useEffect, useRef } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { io } from "socket.io-client";
import axios from "axios";
import ADRESS_API from "../API";

function Chat({ route }) {
  const { user, selectedUser } = route.params;
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    // Initialize your socket connection and fetch existing chat messages here.
    // Use socket to send and receive new messages.

    socketRef.current = io(`http://${ADRESS_API}:5000`);
    socketRef.current.emit("joinChat", user.id, selectedUser.id);

    // Subscribe to new messages
    socketRef.current.on("message", (newMessage) => {
      setMessages([...messages, newMessage]);
      scrollViewRef.current.scrollToEnd({ animated: true });
    });

    // Fetch existing chat messages
    axios
      .get(`http://${ADRESS_API}:5000/chats/${user.id}/messages`)
      .then((res) => {
        setMessages(res.data);
        scrollViewRef.current.scrollToEnd({ animated: true });
      })
      .catch((err) => {
        console.log("Error fetching messages:", err);
      });

    return () => {
      socketRef.current.disconnect();
    };
  }, [user.id, selectedUser.id]);

  const sendMessage = () => {
    if (!msg || !selectedUser) {
      return;
    }

    const messageInput = {
      content: msg,
      chatId: selectedUser.id, // You should replace this with the actual chat room or user ID.
    };

    axios
      .post(`http://${ADRESS_API}:5000/chats/${selectedUser.id}/message`, messageInput)
      .then((newMessage) => {
        // Emit the new message via socket and update the message list.
        socketRef.current.emit("sendMessage", newMessage.data);
        setMessages([...messages, newMessage.data]);
        scrollViewRef.current?.scrollToEnd({ animated: true });
        setMsg("");
      })
      .catch((err) => {
        console.log("Error sending message:", err);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>Chat with {selectedUser.name}</Text>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingVertical: 10 }}
        ref={scrollViewRef}
      >
        {messages.map((message) => (
          <View key={message.id}>
            <Text>
              {message.sender.name}: {message.content}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View>
        <TextInput
          value={msg}
          onChangeText={(text) => setMsg(text)}
          placeholder="Type your message here"
        />
        <Button onPress={sendMessage} title="Send" />
      </View>
    </View>
  );
}

export default Chat;
