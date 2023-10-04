import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { io } from 'socket.io-client';
import ADDRESS_IP from '../API';
import { FIREBASE_AUTH } from '../FireBase';

const ChatScreen = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const user = FIREBASE_AUTH.currentUser.uid;
    const newSocket = io(`http://192.168.104.19:8081`);

    newSocket.on('connect_error', (error) => {
      console.error('WebSocket connection error:', error);
    });

    newSocket.on('receive', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    newSocket.on('connect', () => {
      console.log('WebSocket connected');
      newSocket.emit('join', user);
    });

    setSocket(newSocket);

    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, [route.params]);

  const sendMessage = () => {
    if (messageInput.trim() === '') {
      return;
    }

    const message = {
      content: messageInput,
      sender: FIREBASE_AUTH.currentUser.uid,
    };

    socket.emit('send', message, (response) => {
      if (response.error) {
        console.error('Error sending message:', response.error);
      } else {
        console.log('Message sent successfully:', response);
        setMessageInput('');
      }
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.content}</Text>
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
