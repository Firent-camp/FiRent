// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   FlatList,
//   TextInput,
//   StyleSheet,
//   Image,
//   Button,
// } from "react-native";
// import axios from "axios";
// import ADRESS_API from "../API";

// function Conversation({ route, navigation }) {
//   const { user } = route.params;
//   const currentUserId = user ? user.id : null;

//   const [users, setUsers] = useState([]);
//   const [user2, setUser2] = useState(null);
//   const [chat, setChat] = useState(null);
//   const [conversations, setConversations] = useState("");

//   const getUsers = () => {
//     axios
//       .get(`http://${ADRESS_API}:5000/users`)
//       .then((res) => {
//         setUsers(res.data);
//       })
//       .catch((error) => console.log(error));
//   };

//   const startConversation = () => {
//     axios
//       .post(`http://${ADRESS_API}:5000/chats/conversations`, {
//         user1Id: user,
//         user2Id: user2,
//       })
//       .then((res) => {
//         setChat(res.data);
//       })
//       .catch((err) => {
//         console.log(err, "hi");
//       });
//   };

//   const getConversations = () => {
//     axios
//       .get(
//         `http://${ADRESS_API}:5000/chats/conversations/${chat.id}/messages`
//       )
//       .then((res) => {
//         setConversations(res.data);
//         navigation.navigate("Chat", {
//           chatRoom: chat,
//           currentid: user,
//           foreignid: user2,
//         });
//       })
//       .catch((err) => console.log(err, "salem"));
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return (
//     <View style={styles.chatRoom}>
//       <View style={styles.searchContainer}>
//         <View style={styles.search}>
//           <TextInput style={[styles.groupChild, styles.childBorder]} />
//           <Image
//             style={styles.groupItem}
//             contentFit="cover"
//             source={require("../assets/group-61.png")}
//           />
//         </View>
//         <Text style={styles.search1}>Search</Text>
//       </View>

//       <FlatList
//         data={users}
//         keyExtractor={(item) => item.firebaseId}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             onPress={() => {
//               setUser2(item.firebaseId);
//               startConversation();
//             }}
//           >
//             <View style={styles.groupInner}>
//               <Image
//                 style={styles.ellipseIcon}
//                 contentFit="cover"
//                 source={require("../assets/ellipse-6.png")}
//               />
//               <Text style={[styles.jessieCooper, styles.amTypo]}>
//                 {item.userName}
//               </Text>
//               <Text style={[styles.seeYouNext, styles.amTypo]}>
//                 See you next week!
//               </Text>
//               <Text style={[styles.am, styles.amTypo]}>09:32 AM</Text>
//               <Image
//                 style={[styles.vectorIcon, styles.vectorIconLayout]}
//                 contentFit="cover"
//                 source={require("../assets/vector.png")}
//               />
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   searchContainer: {
//     marginTop: 10,
//   },
//   search: {
//     height: 45,
//     width: 341,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   groupChild: {
//     borderRadius: 30,
//     borderWidth: 1,
//     flex: 1,
//     height: 45,
//   },
//   groupItem: {
//     width: 19,
//     height: 17,
//     marginLeft: 10,
//   },
//   search1: {
//     fontSize: 16,
//     fontFamily: "Inter-Regular",
//     color: "#afafaf",
//     marginLeft: 10,
//   },
//   groupInner: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderRadius: 20,
//     height: 74,
//     marginVertical: 10,
//     paddingHorizontal: 16,
//   },
//   ellipseIcon: {
//     width: 52,
//     height: 52,
//     marginRight: 10,
//   },
//   jessieCooper: {
//     fontSize: 14,
//     color: "#fff",
//   },
//   seeYouNext: {
//     fontSize: 12,
//     color: "#686dcd",
//   },
//   am: {
//     fontSize: 10,
//     color: "#afafaf",
//     fontWeight: "500",
//     marginLeft: "auto",
//   },
//   vectorIcon: {
//     height: "9.29%",
//     width: "2.62%",
//     top: "60.88%",
//     right: "76.86%",
//     bottom: "29.83%",
//     left: "20.53%",
//   },
//   chatRoom: {
//     backgroundColor: "#1f1f29",
//     borderColor: "#1e1e1e",
//     borderWidth: 3,
//     flex: 1,
//     width: "100%",
//     height: 844,
//     overflow: "hidden",
//     borderStyle: "solid",
//     borderRadius: 20,
//   },
// });

// export default Conversation;
