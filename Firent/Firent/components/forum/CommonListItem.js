import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CommentListItem({ comment }) {
  return (
    <View style={styles.container}>
      <Text>{comment.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});
