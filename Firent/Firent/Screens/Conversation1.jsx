import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList } from "react-native";
import axios from "axios";
import { io } from "socket.io-client";
import ADRESS_API from "../API";

function Conversation1({ route, navigation }) {
  const { user } = route.params;
  const [users, setUsers] = useState([]);
  const [chatId, setChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const socket = useRef();

  const getUsers = () => {
    axios
      .get(`http://${ADRESS_API}:5000/users`)
      .then((res) => {
        setUsers(res.data.filter((u) => u.firebaseId !== user));
      })
      .catch((error) => console.log(error));
  };

  const startConversation = (user2Id) => {
    socket.current.emit("joinChat", { userId: user, otherUserId: user2Id }, (chatIdFromServer) => {
      setChatId(chatIdFromServer);
    });
  };

  const sendMessage = () => {
    if (newMessage.trim() === "") {
      return;
    }

    socket.current.emit("sendMessage", { chatId, userId: user, text: newMessage });
    setNewMessage("");
  };

  useEffect(() => {
    getUsers();

    socket.current = io(`http://${ADRESS_API}:5000`);

    socket.current.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.current.disconnect(); // Clean up the socket connection when the component unmounts
    };
  }, []);

  return (
    <View>
      <Text>Conversations</Text>
      {users.map((e) => (
        <TouchableOpacity key={e.firebaseId} onPress={() => startConversation(e.firebaseId)}>
          <Text>{e.userName}</Text>
        </TouchableOpacity>
      ))}

      {chatId && (
        <View>
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Text>
                {item.sender.userName}: {item.content}
              </Text>
            )}
          />
          <TextInput
            placeholder="Type your message"
            value={newMessage}
            onChangeText={(text) => setNewMessage(text)}
          />
          <TouchableOpacity onPress={sendMessage}>
            <Text>Send</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default Conversation1;
