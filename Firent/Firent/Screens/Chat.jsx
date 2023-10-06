import React, { useEffect, useState, useRef } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { io } from "socket.io-client";
import axios from "axios";
import ADRESS_API from "../API";

function Chat({ route }) {
  const { chatRoom, currentid, foreignid } = route.params;

  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io(`http://${ADRESS_API}:4001`);
    socket.current.emit("joinRoom", chatRoom.id);

    socket.current.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    axios
      .get(`http://${ADRESS_API}:5000/chats/conversations/${chatRoom.id}/messages`)
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  const sendMessage = () => {
    socket.current.emit("send", {
      chatRoomId: chatRoom.id,
      senderId: currentid,
      content: msg,
    });
    setMsg("");
  };

  return (
    <View>
      <Text>Chat with {chatRoom.name}</Text>
      <ScrollView>
        {messages.map((message, index) => (
          <View key={index}>
            <Text>
              {message.sender}: {message.content}
            </Text>
          </View>
        ))}
      </ScrollView>
      <TextInput
        value={msg}
        onChangeText={(message) => setMsg(message)}
        placeholder="Type your message..."
      />
      <Button onPress={sendMessage} title="Send" />
    </View>
  );
}

export default Chat;
