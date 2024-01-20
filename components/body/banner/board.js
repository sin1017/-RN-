import { StyleSheet, View, Text } from 'react-native';
import React from 'react';


function board(value) {
  const boardList = Array(16).fill(0).map((value, index) => [[], [], []])
  console.log(boardList);
  return (
    <View>
      <Text>test</Text>
    </View>
  )
};

export default board;
