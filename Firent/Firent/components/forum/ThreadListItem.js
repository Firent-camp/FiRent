import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Axios from "axios";
import ADRESS_API from "../../API";

export default function ThreadListScreen() {
  const [threads, setThreads] = useState([]);
  const [selectedThreadId, setSelectedThreadId] = useState(null);
  const [selectedThreadComments, setSelectedThreadComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentText, setCommentText] = useState('');

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

    try {
      await Axios.post(apiUrl, { content: commentText });
      setCommentText('');
      fetchCommentsForThread(selectedThreadId);
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  const renderThread = (thread) => (
    <TouchableOpacity key={thread.id} onPress={() => fetchCommentsForThread(thread.id)}>
      {thread.imagePath && <Image source={{ uri: getImageUri(thread.imagePath) }} style={styles.threadImage} />}
      <Text>{thread.title}</Text>
      <Text>{thread.content}</Text>
      {selectedThreadId === thread.id && renderComments()}
    </TouchableOpacity>
  );

  const getImageUri = (path) => `http://${ADRESS_API}:5000/${path.replace(/\\/g, "/")}`;

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
      <Text>Thread List</Text>
      {threads.map(renderThread)}
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
    padding: 16,
  },
  commentContainer: {
    backgroundColor: "#f5f5f5",
    padding: 8,
    borderRadius: 4,
    marginBottom: 4,
  },
  threadImage: {
    width: "50%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 8,
  },
  commentInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 8,
  },
  postButton: {
    backgroundColor: '#007BFF',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 8,
  },
});
