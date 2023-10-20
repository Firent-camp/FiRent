import React, { useEffect, useState } from "react";
import {
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


export default function ThreadListScreen() {
  const [threads, setThreads] = useState([]);
  const [selectedThreadId, setSelectedThreadId] = useState(null);
  const [selectedThreadComments, setSelectedThreadComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentText, setCommentText] = useState('');
  const [newThreadTitle, setNewThreadTitle] = useState("");
  const [newThreadContent, setNewThreadContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [image,setImage] = useState("")
  const user = FIREBASE_AUTH.currentUser.uid;
  const REACTIONS = ["like", "dislike"];

  useEffect(() => fetchThreads(), []);

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
      fetchCommentsForThread(selectedThreadId);
      setCommentText('');
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
    <TouchableOpacity style={styles.threadItem} key={thread.id} onPress={() =>{ 
      console.log(thread.id);
      fetchCommentsForThread(thread.id)}}>
      <View style={styles.authorInfoContainer}>
        <Image source={{ uri: getImageUri(thread.author.profileImage) || null }} style={styles.authorImage} />
        <View style={styles.authorTextContainer}>
          <Text style={styles.authorName}>{thread.author.userName}</Text>
          <Text style={styles.timestampText}>5 minutes ago</Text>
        </View>
      </View>
      <Text style={styles.threadContentTitle}>{thread.title}</Text>
      <Image source={{ uri: thread.imagePath }} style={{ width: 200, height: 200 }} />

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
        <Text style={styles.postButtonText}>Post Comment</Text>
      </TouchableOpacity>
    </>
  );

  if (loading) return <LoadingView />;
  if (error) return <ErrorView error={error.message || 'An error occurred'} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Forum</Text>
      </View>
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
      <TouchableOpacity onPress={pickImage}>
      <Text>Select Image</Text>
    </TouchableOpacity>
    {/* {selectedImage && <Image source={selectedImage} style={{ width: 300, height: 300 }} />} */}
      <FlatList
        data={threads}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => renderThread(item)}
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
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  threadItem: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#e1e8ed"
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
    backgroundColor: "#1DA1F2",
    padding: 10,
    margin: 10,
    borderRadius: 20,
    alignItems: "center"
  },
  postButtonText: {
    color: "white",
    fontWeight: "bold"
  },
  header: {
    backgroundColor: "#1DA1F2",
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#e1e8ed"
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },
  newThreadInput: {
    height: 40,
    borderColor: '#e1e8ed',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: "#f5f8fa"
  },
  postThreadButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#1DA1F2',
    borderRadius: 20,
    alignItems: 'center',
  }
});
