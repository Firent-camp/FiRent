import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import Axios from 'axios';
import ADRESS_API from '../../API';

export default function ThreadListScreen() {
  const [threads, setThreads] = useState([]);
  const [selectedThreadId, setSelectedThreadId] = useState(null);
  const [selectedThreadComments, setSelectedThreadComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `http://${ADRESS_API}:5000/threads`;

    Axios.get(apiUrl)
      .then((response) => {
        setThreads(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching threads:', err);
        setError('Failed to fetch threads. Please try again.');
        setLoading(false);
      });
  }, []);

  const fetchCommentsForThread = async (threadId) => {
    try {
      const response = await Axios.get(`http://${ADRESS_API}:5000/threads/${threadId}/comments`);
      setSelectedThreadId(threadId);
      setSelectedThreadComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
      // You may also handle this error visibly to the user if desired
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Thread List</Text>
      {threads.map((thread) => (
        <TouchableOpacity key={thread.id} onPress={() => fetchCommentsForThread(thread.id)}>
          <Text>{thread.title}</Text>
          <Text>{thread.content}</Text>
          {selectedThreadId === thread.id && selectedThreadComments.map((comment) => (
            <View key={comment.id} style={styles.commentContainer}>
              <Text>{comment.author.userName}: {comment.content}</Text>
            </View>
          ))}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  commentContainer: {
    backgroundColor: '#f5f5f5',
    padding: 8,
    borderRadius: 4,
    marginBottom: 4,
  },
});
