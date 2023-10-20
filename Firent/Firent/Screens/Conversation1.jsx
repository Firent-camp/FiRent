import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import axios from "axios";
import ADRESS_API from "../API";
import { useNavigation } from "@react-navigation/native";

function Conversation({ route }) {
  const { user } = route.params;
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get(`http://${ADRESS_API}:5000/users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  }, []);

  const startChatWithUser = (selectedUser) => {
    // Navigate to the Chat component with the selected user
    navigation.navigate("Chat", { user, selectedUser });
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>Select a user to start a conversation:</Text>
      <ScrollView>
        {users.map((selectedUser) => (
          <TouchableOpacity
            key={selectedUser.id}
            onPress={() => startChatWithUser(selectedUser)}
          >
            <Text>{selectedUser.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default Conversation;
