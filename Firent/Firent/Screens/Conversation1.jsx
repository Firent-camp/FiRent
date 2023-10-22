// import React, { useState, useEffect } from 'react';
// import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
// import axios from 'axios';
// import io from 'socket.io-client';
// import ADDRESS_IP from '../API';

// function Conversation1({ route, navigation }) {
//   const { user } = route.params;
//   const [users, setUsers] = useState([]);
//   const socket = io(`http://${ADDRESS_IP}:5000`);
//   const getChatMessages = async (selectedUser) => {
//     try {
//       const response = await axios.get(`http://${ADDRESS_IP}:5000/chats/${user}/${selectedUser.firebaseId}`);
//       if (response.data.chatId) {
//         const chatId = response.data.chatId;
//         const chatMessages = await axios.get(`http://${ADDRESS_IP}:5000/chats/${chatId}/messages`);
//         navigation.navigate('Chat', {
//           user,
//           selectedUser,
//           socket,
//           chatId,
//           chatMessages: chatMessages.data,
//         });
//       }
//     } catch (error) {
//       console.log('Error fetching chat messages:', error.message);
//       console.log('Error status:', error.response ? error.response.status : 'N/A');
//     }
//   };
//   const startChatWithUser = (selectedUser) => {
//     socket.emit('joinChat', { userId: user, otherUserId: selectedUser.firebaseId });
//     getChatMessages(selectedUser);
//   };
  
//   useEffect(() => {
//     axios
//       .get(`http://${ADDRESS_IP}:5000/users`)
//       .then((res) => {
//         setUsers(res.data);
//       })
//       .catch((error) => {
//         console.log('Error fetching users:', error);
//       });
//   }, []);

//   return (
//     <View style={{ flex: 1 }}>
//       <Text>Select a user to start a conversation:</Text>
//       <ScrollView>
//         {users.map((selectedUser) => (
//           <TouchableOpacity
//             key={'user_' + selectedUser.firebaseId}
//             onPress={() => startChatWithUser(selectedUser)}
//           >
//             <Text>{selectedUser.userName}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// export default Conversation1;
