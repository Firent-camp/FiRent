import React, { useEffect, useState } from "react";
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Modal,
  Image,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
  Keyboard,
} from "react-native";
import Axios from "axios";
import ADRESS_API from "../../API";
import { FIREBASE_AUTH } from "../../FireBase";
import * as ImagePicker from "expo-image-picker";

const CLOUD_NAME = "duwjio4uk";
const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
const UPLOAD_PRESET = "rqhyhetx";
import Icon from "react-native-vector-icons/Ionicons";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function ThreadListScreen() {
  const [threads, setThreads] = useState([]);
  const [selectedThreadId, setSelectedThreadId] = useState(null);
  const [selectedThreadComments, setSelectedThreadComments] = useState([]);
  const [selectedReaction, setSelectedReaction] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [newThreadTitle, setNewThreadTitle] = useState("");
  const [newThreadContent, setNewThreadContent] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState("");
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const user = FIREBASE_AUTH.currentUser.uid;
  const REACTIONS = ["like", "dislike"];

  useEffect(() => {
    const fetchData = async () => {
      await fetchThreads();
    };
    fetchData();
  }, []);
  
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
}, []);



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

    if (!result.canceled && result.assets && result.assets.length > 0) {
      uploadImageToCloudinary(result.assets[0].uri);
    }
  };

  const fetchCommentsForThread = async (threadId) => {
    const apiUrl = `http://${ADRESS_API}:5000/threads/${threadId}/comments`;
    try {
      const response = await Axios.get(apiUrl);
      setSelectedThreadId(threadId);
      setSelectedThreadComments(response.data);
    } catch (error) {
      // console.error("Error fetching comments:", error);
    }
  };

  const fetchReactionsForThread = async (threadId) => {
    const apiUrl = `http://${ADRESS_API}:5000/threads/${threadId}/reactions`;
    try {
      const response = await Axios.get(apiUrl);
      setSelectedThreadId(threadId);
      setSelectedReaction(response.data);
      console.log(response.data, "dataaa");
    } catch (error) {
      // console.error("Error fetching comments:", error);
    }
  };

  const uploadImageToCloudinary = async (imageUri) => {
    const data = new FormData();
    let filename = imageUri.split("/").pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    if (type === "image/jpg") type = "image/jpeg";
    if (type === "image/png") type = "image/png";

    data.append("file", { uri: imageUri, name: filename, type });
    data.append("upload_preset", "rqhyhetx");

    try {
      let response = await Axios.post(
        "https://api.cloudinary.com/v1_1/duwjio4uk/image/upload",
        data,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.secure_url !== "") {
        const image = response.data.secure_url;
        const images = response.data;
        setImage(image);
      } else {
        Alert.alert("Error", "Image upload failed");
      }
    } catch (err) {
      Alert.alert("Error", "Image upload failed");
      console.log("Upload Image Error", err, err.request, err.response);
    }
  };

  const postComment = async () => {
    if (!selectedThreadId || !commentText) return;
    const apiUrl = `http://${ADRESS_API}:5000/threads/${selectedThreadId}/comments`;
    try {
      await Axios.post(apiUrl, {
        content: commentText,
        authorId: user,
        threadId: selectedThreadId,
      });
      fetchCommentsForThread(selectedThreadId);
      setCommentText("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  const handleReaction = async (threadId, reactionType) => {
    console.log(threadId, "threadId 1");

    const apiUrl = `http://${ADRESS_API}:5000/threads/${threadId}/reactions`;
    try {
      await Axios.post(apiUrl, { userId: user, threadId: threadId });
      fetchReactionsForThread(threadId);
    } catch (error) {
      console.error("Error posting reaction:", error);
    }
  };

  const postNewThread = async () => {
    const apiUrl = `http://${ADRESS_API}:5000/threads`;

    if (!newThreadTitle || !newThreadContent) return;
    try {
      console.log(typeof image, "salem");
      const res = await Axios.post(apiUrl, {
        title: newThreadTitle,
        content: newThreadContent,
        imagePath: image,
        authorId: user,
      });
      console.log(res.data, "response");
    } catch (error) {
      console.error("Error posting new thread:", error);
    }
  };

  const renderThread = (thread) => (
    <TouchableOpacity
      style={styles.threadItem}
      key={thread.id}
      onPress={() => {
        fetchCommentsForThread(thread.id);
        fetchReactionsForThread(thread.id);
      }}
    >
      <View style={styles.authorInfoContainer}>
        <Image
          source={{ uri: thread.author.image }}
          style={styles.authorImage}
          onError={(error) =>
            console.log("Image Error:", getImageUri(thread.author.image), error)
          }
        />

        <View style={styles.authorTextContainer}>
          <Text style={styles.authorName}>{thread.author.userName}</Text>
          <Text style={styles.timestampText}>5 min ago.</Text>
        </View>
      </View>
      <Text style={styles.threadContentTitle}>{thread.title}</Text>
      <Image
        source={{ uri: thread.imagePath }}
        style={{ width: 350, height: 350, alignSelf: "center" }}
      />

      <Text style={styles.threadContent}>{thread.content}</Text>
      {renderReactions(thread)}
      {selectedThreadId === thread.id && renderComments()}
    </TouchableOpacity>
  );

  const renderComments = () => (
    <>
      {selectedThreadComments.map((comment) => (
        <View key={comment.id} style={styles.commentContainer}>
          <Image
            source={{ uri: comment.author.image }}
            style={styles.commenterImage}
          />
          <View style={styles.commentTextContainer}>
            <Text style={styles.commenterName}>{comment.author.userName}:</Text>
            <Text style={{ color: "white" }}>{comment.content}</Text>
          </View>
        </View>
      ))}
      <TextInput
        style={styles.commentInput}
        placeholder="Add a comment..."
        value={commentText}
        onChangeText={setCommentText}
      />
      <TouchableOpacity onPress={postComment} style={styles.postButton}>
        <Text style={styles.postButtonText}>Post Comment</Text>
      </TouchableOpacity>
    </>
  );
  const renderReactions = (thread) => (
    <View style={{ flexDirection: "row", marginVertical: 5 }}>
      {selectedReaction.map((reaction) => {
        console.log(reaction, "reactionss");
        return (
          <View key={reaction.id}>
            <TouchableOpacity
              style={styles.like}
              onPress={() => {
                console.log(reaction, "reaction");
                handleReaction(thread.id);
              }}
            >
              <Icon
                name="heart"
                size={30}
                color={reaction.length > 0 ? "#A47E53" : "#A47E53"}
              />

              <Text>Liked By: {reaction.userName}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );

  if (loading) return <LoadingView />;
  if (error) return <ErrorView error={error.message || "An error occurred"} />;

  return (
    <KeyboardAvoidingView 
      style={{flex: 1}} 
      
    >
      <FlatList
        style={{flex: 1}}
        keyboardShouldPersistTaps="always"
        data={threads}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => renderThread(item)}
        ListHeaderComponent={() => (
          <View style={styles.container}>
            <View style={styles.header}></View>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.openModalButton}
            >
              <Text style={{ color: "white", marginTop: 5 }}>Post Thread</Text>
            </TouchableOpacity>
            {/* You can continue adding other components here if needed */}
          </View>
        )}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
  
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
            <TouchableOpacity
              onPress={pickImage}
              style={styles.imageSelectButton}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Select Image
              </Text>
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
              <Text style={{ color: "#4b0082", marginTop: 5 }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
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
  // container: { backgroundColor: "rgba(31, 31, 41, 1)" },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: screenWidth * 0.85,
    height: screenHeight * 0.5,
    margin: 20,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffsetWidth: 0,
    shadowOffsetHeight: 2,
    border: "1px solid rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(15px)",
  },

  biggerNewThreadInput: {
    height: 25,
    width: 260,
    fontSize: 18,
    color: "black",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 15,
    paddingLeft: 10, 
    paddingRight: 10
  },

  biggerNewThreadTextarea: {
    height: 190,
    width: 260,
    fontSize: 18,
    color: "black",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    textAlignVertical: "top",
    paddingTop: 10,
    paddingLeft: 10, 
    paddingRight: 10
  
  },

  openModalButton: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(104, 109, 205, 1)",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    color: "white",
  },
  postButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    backgroundColor: "rgba(19, 19, 22, 1)",
  },
  imageSelectButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#1f1f29",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    color: "white",
  },
  centeredImage: {
    width: 300,
    height: 300,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  postThreadButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#1f1f29",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
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
    color: "white",
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
    alignItems: "center",
  },
  authorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  authorTextContainer: {
    marginLeft: 10,
  },
  authorName: {
    fontWeight: "bold",
    color: "white",
  },
  timestampText: {
    color: "white",
  },
  threadContentTitle: {
    fontWeight: "bold",
    marginTop: 10,
    color: "white",
  },
  threadContent: {
    marginTop: 10,
    color: "white",
  },
  commentContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  commenterImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  commentTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  commenterName: {
    fontWeight: "bold",
    color: "white",
  },
  commentInput: {
    borderWidth: 1,
    borderColor: "#e1e8ed",
    padding: 10,
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#f5f8fa",
  },
  postButton: {
    backgroundColor: "rgba(19, 19, 22, 1)",
    padding: 10,
    margin: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
