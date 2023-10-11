import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import axios from "axios";
import ADRESS_API from "../API";

function Conversation1({ route, navigation }) {
  const { user } = route.params;

  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get(`http://${ADRESS_API}:5000/users`)
      .then((res) => {
        setUsers(res.data.filter((u) => u.firebaseId !== user));
      })
      .catch((error) => console.log(error));
  };

  const startConversation = (user2Id) => {
    axios
      .post(`http://${ADRESS_API}:5000/chats`, {
        user1Id: user, // Use user.firebaseId as user1Id
        user2Id: user2Id,
      })
      .then((res) => {
        navigation.navigate("Chat", {
          chatRoom: res.data,
          currentid: user.firebaseId,
          foreignid: user2Id,
        });
      })
      .catch((err) => {
        console.log(err, "Error starting conversation");
      });
  };
  

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View>
      <Text>Conversations</Text>
      {users.map((e) => (
        <TouchableOpacity
          key={e.firebaseId}
          onPress={() => startConversation(e.firebaseId)}
        >
          <Text>{e.userName}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default Conversation1;
