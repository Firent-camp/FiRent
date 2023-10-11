import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Axios from 'axios';
import ADRESS_API from '../../API';
;

export default function ThreadListScreen() {
  const [threads, setThreads] = useState([]);
  
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
  }, [threads]);

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
      <View>
        {threads.map((thread) => (
          <View key={thread.id} style={styles.threadContainer}>
            <Text>{thread.title}</Text>
            <Text>{thread.content}</Text>
            <View style={styles.commentsContainer}>
              {thread.comments && thread.comments.map((comment) => (
                <View key={comment.id} style={styles.commentContainer}>
                  <Text>{comment.author}: {comment.text}</Text>
                </View>
              ))}
              console.log("🚀 ~ file: threadlistitem.js:58 ~ ThreadListScreen ~ comments:", comments)
            </View>
          </View>
        ))}
      </View>
    </View>
  );}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    threadContainer: {
      marginBottom: 16,
    },
    commentsContainer: {
      marginTop: 8,
    },
    commentContainer: {
      backgroundColor: '#f5f5f5',
      padding: 8,
      borderRadius: 4,
      marginBottom: 4,
    },
  })
