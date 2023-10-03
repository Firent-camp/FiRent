import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import io from 'socket.io-client';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const socket = io('http://localhost:5000'); 
  useEffect(() => {
    socket.connect();

    socket.on('messageReceived', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (messageInput.trim() !== '') {
      socket.emit('sendMessage', messageInput);
      setMessageInput('');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
          </View>
        )}
      />
      <View>
        <TextInput
          placeholder="Type a message..."
          value={messageInput}
          onChangeText={(text) => setMessageInput(text)}
        />
        <TouchableOpacity onPress={sendMessage}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
// import {  Image, View,Text} from 'react-native';
// import { TouchableOpacity } from 'react-native';
// import react from 'react';

// export default function Splash({ navigation }) {
//   return (
//     <View className="flex-1 items-center justify-center bg-red-500">
//       <Text>fcgvh</Text>
//       </View>
//   )
// }