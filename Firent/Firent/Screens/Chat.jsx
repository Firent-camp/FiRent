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

    socketRef.current.emit("joinChatRoom", {
      userIds: [user.id, selectedUser.id],
    });

    // Subscribe to new messages
    socketRef.current.on("newMessage", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      scrollViewRef.current.scrollToEnd({ animated: true });
    });

    axios
      .get(`http://${ADRESS_API}:5000/chats/${selectedUser.id}`)
      .then((res) => {
        setMessages(res.data.messages);
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

    const newMessage = {
      content: msg,
      sender: user,
    };
    
    socketRef.current.emit("sendMessage", {
      roomId: selectedUser.id,
      message: newMessage,
    });

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    scrollViewRef.current?.scrollToEnd({ animated: true });
    setMsg("");
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
