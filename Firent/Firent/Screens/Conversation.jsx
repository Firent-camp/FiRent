import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Button } from "react-native";
import axios from "axios";
import ADRESS_API from "../API";
function Conversation({ route, navigation }) {
  const { user } = route.params;
  console.log(user, "conversation user");
  const currentUserId = user ? user.id : null;

  const [users, setUsers] = useState([]);
  const [user2, setUser2] = useState(null);
  const [chat, setChat] = useState(null);
  const [conversations, setConversations] = useState("");
  console.log(conversations, "conversations");
  console.log(chat, "chat");
  const getUsers = () => {
    axios
      .get(`http://${ADRESS_API}:5000/users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => console.log(error));
  };

  const startConversation = () => {
    axios
      .post(`http://${ADRESS_API}:5000/chats/conversations`, {
        user1Id: user,
        user2Id: user2,
      })
      .then((res) => {
        setChat(res.data);
      })
      .catch((err) => {
        console.log(err, "hi");
      });
  };

  const getConversations = () => {
    console.log(typeof chat.id, "id of chat");
    axios
      .get(`http://${ADRESS_API}:5000/chats/conversations/${chat.id}/messages`)
      .then((res) => {
        setConversations(res.data);
        navigation.navigate("Chat", {
          chatRoom: chat,
          currentid: user,
          foreignid: user2,
        });
      })
      .catch((err) => console.log(err, "salem"));
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <View>
      <Text>Conversations</Text>
      {users.map((e) => {
        console.log(e, "e");
        return (
          <TouchableOpacity
            key={e.firebaseId}
            onPress={() => {
              setUser2(e.firebaseId);
              startConversation();
              console.log(e.firebaseId, "userid2");
            }}
          >
            <Text>{e.userName}</Text>
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity>
        <Button onPress={() => getConversations()} title="clickMe" />
      </TouchableOpacity>
    </View>
  );
}

export default Conversation;
