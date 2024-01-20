import { StyleSheet, View, Text } from 'react-native';
import React from 'react';


function board(value) {
  const boardList = Array(16).fill(0).map((value, index) => [[], [], []])

  return (
    <View style={style.container}>
      <View style={style.content}>
        {
          boardList.map((item, index) => (
            <View key={index} style={[style.boardStyle, index % 2 === 0 ? style.witeBoard : style.gridBoard]}></View>
          ))
        }
      </View>
    </View>
  )
};

export default board;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    perspective: 1000
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 240,
    // height: 10,
    backgroundColor: 'black',
    transform: [
      { rotateY: '40deg' },
      { rotateZ: '20deg' },
      { rotateX: '-70deg' },
    ],
    shadowColor: '#BDBDBD',
    shadowOffset: { width: 15, height: 15 },
    shadowOpacity: 0.6,
    shadowRadius: 2
  },
  boardStyle: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#BDBDBD'
  },
  witeBoard: {
    backgroundColor: '#F0F0F0'
  },
  gridBoard: {
    backgroundColor: '#DDDDDD',
  }
})