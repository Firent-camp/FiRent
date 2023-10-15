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

export default function ThreadListScreen() {
  const [threads, setThreads] = useState([]);
  const [selectedThreadId, setSelectedThreadId] = useState(null);
  const [selectedThreadComments, setSelectedThreadComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentText, setCommentText] = useState('');
  const user=FIREBASE_AUTH.currentUser.uid;
  console.log(user);

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

  const postComment = async () => {
    if (!selectedThreadId || !commentText) return;

    const apiUrl = `http://${ADRESS_API}:5000/threads/${selectedThreadId}/comments`;
    console.log(commentText,"content", user, "user",selectedThreadId,"thread");
    try {
      await Axios.post(apiUrl, { 
      content: commentText,
      authorId:user,
      threadId:selectedThreadId 
    });
      setCommentText('');
      fetchCommentsForThread(selectedThreadId);
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  const renderThread = (thread) => (
    <TouchableOpacity key={thread.id} onPress={() => fetchCommentsForThread(thread.id)}>
      <Text style={styles.usernameText}>{thread.author.userName}</Text>
      <Text style={styles.timestampText}>5 minutes ago</Text>
      <Text style={styles.threadContent}>{thread.title}</Text>
      {thread.imagePath && <Image source={{ uri: getImageUri(thread.imagePath) }} style={styles.threadImage} />}
      
      <Text style={styles.threadContent}>{thread.content}</Text>
      {selectedThreadId === thread.id && renderComments()}
    </TouchableOpacity>
  );
  

  

const getImageUri = (path) => {
  if (!path) {
      console.warn("Path is undefined.");
      return "";  // or return a default image path if you have one
  }
  return `http://${ADRESS_API}:5000/${path.replace(/\\/g, "/")}`;
};


  const renderComments = () => (
    <>
      {selectedThreadComments.map((comment) => (
        <View key={comment.id} style={styles.commentContainer}>
          <Text>{comment.author.userName}: {comment.content}</Text>
        </View>
      ))}
      <TextInput style={styles.commentInput} placeholder="Add a comment..." value={commentText} onChangeText={setCommentText} />
      <TouchableOpacity onPress={postComment} style={styles.postButton}>
        <Text>Post Comment</Text>
      </TouchableOpacity>
    </>
  );

  if (loading) return <LoadingView />;
  if (error) return <ErrorView error={error} />;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Forum</Text>
      </View>
      <FlatList
        data={threads}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => renderThread(item)}
      />
    </View>
  );
}


const LoadingView = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

const ErrorView = ({ error }) => (
  <View style={styles.container}>
    <Text>{error}</Text>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#444',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  threadItem: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 5,
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  usernameText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  timestampText: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 10,
  },
  threadImage: {
    width: '100%',
    height: 200,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  threadContent: {
    fontSize: 14,
    marginBottom: 10,
  },
  hashtags: {
    fontSize: 12,
    color: 'blue',
    marginBottom: 10,
  },
  commentContainer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 10,
    paddingTop: 10,
  },
  commentText: {
    fontSize: 14,
  },
  commentInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  postButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  postButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  authorInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  authorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  authorTextContainer: {
    flex: 1
  },
  authorName: {
    fontWeight: 'bold',
    fontSize: 16
  },
  threadContentTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5
  },
  hashtags: {
    fontSize: 14,
    color: 'blue',
    marginBottom: 10
  },
  commentContainer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 10,
    paddingTop: 10,
    flexDirection: 'row'
  },
  commenterImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10
  },
  commentTextContainer: {
    flex: 1
  },
  commenterName: {
    fontWeight: 'bold'
  }
});
