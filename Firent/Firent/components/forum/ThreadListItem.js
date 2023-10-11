import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ThreadListItem({ thread, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(thread)}>
      <View style={styles.container}>
        <Text>{thread.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});
