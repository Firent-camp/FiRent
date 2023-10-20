import React, { useEffect, useState } from "react";
import { Padding, Color, FontFamily, FontSize, Border } from "../../globalcss";
import {
  Modal,
  Button,
  ScrollView,
  Image,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  FlatList
} from "react-native";
import Axios from "axios";
import ADRESS_API from "../../API";
import { FIREBASE_AUTH } from "../../FireBase";
import * as ImagePicker from 'expo-image-picker';
const CLOUD_NAME = 'duwjio4uk'; // Replace 'your_cloud_name' with your Cloudinary cloud name
const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
const UPLOAD_PRESET = 'rqhyhetx'; // Replace 'your_upload_preset' with your Cloudinary unsigned upload preset
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



export default function ThreadListScreen() {
  const [threads, setThreads] = useState([]);
  const [selectedThreadId, setSelectedThreadId] = useState(null);
  const [selectedThreadComments, setSelectedThreadComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentText, setCommentText] = useState('');
  const [newThreadTitle, setNewThreadTitle] = useState("");
  const [newThreadContent, setNewThreadContent] = useState("");
  // const [selectedImage, setSelectedImage] = useState(null);
  const [image,setImage] = useState("")
  const [modalVisible, setModalVisible] = useState(false);
  const [reloadTrigger, setReloadTrigger] = useState(0);

  const user = FIREBASE_AUTH.currentUser.uid;
  const REACTIONS = ["like", "dislike"];

  useEffect(() => fetchThreads(), [reloadTrigger]);

  const fetchThreads = async () => {
    const apiUrl = `http://${ADRESS_API}:5000/threads`;
    try {
      const response = await Axios.get(apiUrl);
      setThreads(response.data);
    } catch (err) {
      console.error("Error fetching threads:", err);
      setError("Failed to fetch threads. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled && result.assets && result.assets.length > 0) {
      uploadImageToCloudinary(result.assets[0].uri);
    }
  }

 

  const fetchCommentsForThread = async (threadId) => {
    const apiUrl = `http://${ADRESS_API}:5000/threads/${threadId}/comments`;
    try {
      const response = await Axios.get(apiUrl);
      setSelectedThreadId(threadId);
      setSelectedThreadComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const uploadImageToCloudinary = async (imageUri) => {
    const data = new FormData();
    let filename = imageUri.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    if (type === 'image/jpg') type = 'image/jpeg';
    if (type === 'image/png') type = 'image/png';

    data.append('file', { uri: imageUri, name: filename, type });
    data.append('upload_preset', 'rqhyhetx');

    try {
      let response = await Axios.post(
        'https://api.cloudinary.com/v1_1/duwjio4uk/image/upload',
        data,
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data.secure_url !== '') {
        const image = response.data.secure_url;
        const images = response.data 
        console.log(images,"imaaaagessssssssssssssssssssssssssssssssssssss");
        console.log(image,"imaaaaaaaaaaaaaaaaaaaaaaaaaaaage");
        setImage(image);
      } else {
        Alert.alert('Error', 'Image upload failed');
      }
    } catch (err) {
      Alert.alert('Error', 'Image upload failed');
      console.log('Upload Image Error', err, err.request, err.response);
    }
  };


  const postComment = async () => {
    if (!selectedThreadId || !commentText) return;
    const apiUrl = `http://${ADRESS_API}:5000/threads/${selectedThreadId}/comments`;
    try {
      await Axios.post(apiUrl, { 
        content: commentText,
        authorId: user,
        threadId: selectedThreadId 
      });
      setCommentText('');
      fetchCommentsForThread(selectedThreadId);
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };
  console.log(image,"imageurl");
  const handleReaction = async (threadId, reactionType) => {
    const apiUrl = `http://${ADRESS_API}:5000/threads/${threadId}/reactions`;
    try {
      await Axios.post(apiUrl, { userId: user, type: reactionType });
      fetchThreads();
    } catch (error) {
      console.error("Error posting reaction:", error);
    }
  };

  const postNewThread = async () => {
    const apiUrl = `http://${ADRESS_API}:5000/threads`;
  
    if (!newThreadTitle || !newThreadContent) return;
  
    // Start by picking an image
  
  
    try {
   console.log(typeof image,"salem");
      const res = await Axios.post(apiUrl, {title:newThreadTitle,content:newThreadContent,imagePath:image,authorId:user});
      console.log(res.data,"response");
      // setNewThreadTitle('');
      // setNewThreadContent('');  
      // fetchThreads();
    } catch (error) {
      console.error("Error posting new thread:", error);
    }
  };
  
  

  const renderReactions = (thread) => (
    <View style={{ flexDirection: "row", marginVertical: 5 }}>
      {REACTIONS.map((reaction) => (
        <TouchableOpacity
          key={reaction}
          style={{ marginHorizontal: 5 }}
          onPress={() => handleReaction(thread.id, reaction)}
        >
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderThread = (thread) => (
    <TouchableOpacity style={styles.threadItem} key={thread.id} onPress={() => fetchCommentsForThread(thread.id)}>
      <View style={styles.authorInfoContainer}>
        <Image source={{ uri: getImageUri(thread.author.profileImage) || null }} style={styles.authorImage} />
        <View style={styles.authorTextContainer}>
          <Text style={styles.authorName}>{thread.author.userName}</Text>
          <Text style={styles.timestampText}>5 minutes ago</Text>
        </View>
      </View>
      <Text style={styles.threadContentTitle}>{thread.title}</Text>
      <Image source={{ uri: thread.imagePath }} style={styles.centeredImage} />

      <Text style={styles.threadContent}>{thread.content}</Text>
      {renderReactions(thread)} 
      {selectedThreadId === thread.id && renderComments()}
    </TouchableOpacity>
  );

  const getImageUri = (path) => {
    if (!path) {
      // console.warn("Path is undefined.");
      return "";  
    }
    return `http://${ADRESS_API}:5000/${path.replace(/\\/g, "/")}`;
  };

  const renderComments = () => (
    <>
      {selectedThreadComments.map((comment) => (
        <View key={comment.id} style={styles.commentContainer}>
          <Image source={{ uri: getImageUri(comment.author.profileImage) }} style={styles.commenterImage} />
          <View style={styles.commentTextContainer}>
            <Text style={styles.commenterName}>{comment.author.userName}</Text>
            <Text>{comment.content}</Text>
          </View>
        </View>
      ))}
      <TextInput style={styles.commentInput} placeholder="Add a comment..." value={commentText} onChangeText={setCommentText} />
      <TouchableOpacity onPress={postComment} style={styles.postButton}>
      <Text style={{...styles.postButtonText, color: "white"}}>Post Comment</Text>
      </TouchableOpacity>
    </>
  );

  if (loading) return <LoadingView />;
  if (error) return <ErrorView error={error.message || 'An error occurred'} />;

  



  return (
    <View style={styles.container}>
        <FlatList
            data={threads}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => renderThread(item)}
            ListHeaderComponent={
                <>
                    <View style={styles.header}>
                        {/* Place for potential header content */}
                    </View>

                    <TouchableOpacity
                        onPress={() => setModalVisible(true)}
                        style={styles.openModalButton}
                    >
                        <Text style={{color: "white", marginTop:5}}>Post Thread</Text>
                    </TouchableOpacity>

                    {/* Modal component */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TextInput
                                    placeholder="Thread Title"
                                    value={newThreadTitle}
                                    onChangeText={setNewThreadTitle}
                                    style={styles.biggerNewThreadInput}
                                />
                                <TextInput
                                    placeholder="Thread Content"
                                    value={newThreadContent}
                                    onChangeText={setNewThreadContent}
                                    style={styles.biggerNewThreadTextarea}
                                    multiline
                                    numberOfLines={5}
                                />
                                <TouchableOpacity onPress={pickImage} style={styles.imageSelectButton}>
                                    <Text style={{color: "white", textDecorationStyle:"bold"}}>Select Image</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        postNewThread();
                                        setModalVisible(!modalVisible);
                                    }}
                                    style={styles.postThreadButton}
                                >
                                    <Text style={styles.postButtonText}>Post Thread</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setModalVisible(!modalVisible)}
                                    style={styles.closeModalButton}
                                >
                                    <Text style={{color: "#686dcd", marginTop:5}}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                    {/* Commented-out components for future reference or use */}
                    {/*
                    <TextInput
                        placeholder="Thread Title"
                        value={newThreadTitle}
                        onChangeText={setNewThreadTitle}
                        style={styles.newThreadInput}
                    />
                    <TextInput
                        placeholder="Thread Content"
                        value={newThreadContent}
                        onChangeText={setNewThreadContent}
                        style={styles.newThreadInput}
                        multiline
                        numberOfLines={3}
                    />
                    <TouchableOpacity onPress={postNewThread} style={styles.postThreadButton}>
                        <Text style={styles.postButtonText}>Post Thread</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={pickImage} style={styles.imageSelectButton}>
                        <Text>Select Image</Text>
                    </TouchableOpacity>
                    {selectedImage && <Image source={selectedImage} style={{ width: 300, height: 300 }} />}
                    */}
                </>
            }
        />
    </View>
);
}

const LoadingView = () => (
  <View style={styles.centeredContainer}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

const ErrorView = ({ error }) => (
  <View style={styles.centeredContainer}>
    <Text>{error}</Text>
  </View>
);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: screenWidth * 0.7, // For example, 90% of the screen width
    height: screenHeight * 0.6, // For example, 80% of the screen height
    margin: 20,
    backgroundColor: "rgba(31, 31, 41, 1)",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  biggerNewThreadInput: {
    height: 50,  // Increase the height
    fontSize: 18, // Increase the font size
    // ... rest of your styles for this input
  },
  biggerNewThreadTextarea: {
    height: 100,  // Increase the height for multiline input
    fontSize: 18, // Increase the font size
    
    // ... rest of your styles for this input
  },
  openModalButton: {
    width: "100%",
        height: 50,
        backgroundColor: "rgba(19, 19, 22, 1)",
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        color: "white",
        
  },
  postButtonText:{
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    backgroundColor: "rgba(19, 19, 22, 1)"
  },
  imageSelectButton:{
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    backgroundColor: "rgba(19, 19, 22, 1)"
  },
  centeredImage: {
    width: 300,  // Adjust to the size you want
    height: 300, // Adjust to the size you want
    alignSelf: 'center',
    marginTop: 20,  // Optional: Adds some spacing at the top
    marginBottom: 20, // Optional: Adds some spacing at the bottom
    borderRadius: 10, // Optional: Rounds the corners a bit
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  postThreadButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "rgba(19, 19, 22, 1)",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    Color:"white",
  },
  imageSelectButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "rgba(19, 19, 22, 1)",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    color: "white",
  },
  newThreadInput: {
    borderWidth: 1,
    borderColor: "#e1e8ed",
    padding: 10,
    margin: 10,
    borderRadius: 20,
    backgroundColor: "rgba(19, 19, 22, 1)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  threadItem: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#e1e8ed",
    backgroundColor: "#1f1f29",
    borderRadius: 10,
    marginVertical: 5,
    
  },
  authorInfoContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  authorImage: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  authorTextContainer: {
    marginLeft: 10
  },
  authorName: {
    fontWeight: "bold",
    color: "#14171A"
  },
  timestampText: {
    color: "#657786"
  },
  threadContentTitle: {
    fontWeight: "bold",
    marginTop: 10,
    color: "#14171A"
  },
  threadContent: {
    marginTop: 10,
    color: "#14171A"
  },
  commentContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  commenterImage: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  commentTextContainer: {
    marginLeft: 10,
    flex: 1
  },
  commenterName: {
    fontWeight: "bold",
    color: "#14171A"
  },
  commentInput: {
    borderWidth: 1,
    borderColor: "#e1e8ed",
    padding: 10,
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#f5f8fa"
  },
  postButton: {
    backgroundColor: "rgba(19, 19, 22, 1)",
    padding: 10,
    margin: 10,
    borderRadius: 20,
    alignItems: "center"
  },
  postButtonText: {
    color: "white",
    fontWeight: "bold"
  },
  // header: {
  //   backgroundColor: "#1DA1F2",
  //   padding: 10,
  //   alignItems: "center",
  //   borderBottomWidth: 0.5,
  //   borderBottomColor: "#e1e8ed"
  // },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },
  
  postThreadButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "rgba(19, 19, 22, 1)",
    borderRadius: 20,
    alignItems: 'center',
  }
});
