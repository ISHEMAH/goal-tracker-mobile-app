import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function GoalItem(props) {
  return (
    <TouchableOpacity
      onPress={props.onDeleteItem}
      activeOpacity={0.6}
      style={styles.goalItem}
    >
      <Text style={styles.goalText}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 10,
  },
  goalText: {
    color: 'white',
  },
});
