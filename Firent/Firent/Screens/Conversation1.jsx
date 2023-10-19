import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import axios from "axios";
import ADRESS_API from "../API";

function Conversation1({ route, navigation }) {
  const { user } = route.params;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://${ADRESS_API}:5000/users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const navigateToChat = (selectedUser) => {
    navigation.navigate("Chat", {
      user: user,
      selectedUser: selectedUser,
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text> hjj</Text>
        {users.map((selectedUser) => (
          <TouchableOpacity
            key={selectedUser.firebaseId}
            onPress={() => navigateToChat(selectedUser)}
          >
            <View style={{ alignItems: 'flex-start' }}>
              <Text>
                {selectedUser.userName}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default Conversation1;
