import React, { useEffect, useState, useRef } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { io } from "socket.io-client";
import axios from "axios";
import ADRESS_API from "../API";

function Chat({ route }) {
  const { chatRoom, currentid, foreignid } = route.params;

  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    socketRef.current = io(`http://${ADRESS_API}:5000`); // Corrected the URL
    socketRef.current.emit("joinChat", chatRoom.id);

    socketRef.current.on("message", (newMessage) => {
      console.log("Received new message:", newMessage);

      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    axios
      .get(`http://${ADRESS_API}:5000/chats/${chatRoom.id}/messages`)
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => {
        console.log("Error fetching messages:", err);
      });

    return () => {
      socketRef.current.disconnect();
    };
  }, [chatRoom.id]);

  const sendMessage = () => {
    if (!msg || !chatRoom) {
      return;
    }

    const messageInput = {
      content: msg,
      chatId: chatRoom.id,
    };

    axios
      .post(`http://${ADRESS_API}:5000/chats/${chatRoom.id}/message`, messageInput)
      .then((newMessage) => {
        socketRef.current.emit("sendMessage", newMessage.data);
        setMessages((prevMessages) => [...prevMessages, newMessage.data]);
        scrollViewRef.current?.scrollToEnd({ animated: true });
        setMsg("");
      })
      .catch((err) => {
        console.log("Error sending message:", err);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>Chat with {chatRoom.name || foreignid}</Text>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingVertical: 10 }}
        ref={scrollViewRef}
      >
        {messages.map((message) => (
          <View key={message.id}>
            <Text>
              {message.sender.firebaseId}: {message.content}
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
