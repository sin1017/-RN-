import { StyleSheet, View, Text } from 'react-native';
import React from 'react';


function board(value) {
  const boardList = Array(16).fill(0).map((value, index) => [[], [], []])


  return (
    <View>
      <View style={style.content}>
        {
          boardList.map((item, index) => {
            let boardStyle = 'witeBoard';
            if ([2, 4, 5, 7, 10, 12, 13, 15].includes(index + 1)) {
              boardStyle = 'gridBoard'
            }
            return <View key={index}
              style={
                [
                  style.boardStyle,
                  style[boardStyle]
                ]
              }
            />
          })
        }
      </View>
      <View style={style.boardBottomOne} />
      <View style={style.boardBottomTwo} />
    </View>
  )
};

export default board;

const style = StyleSheet.create({
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 240,
    backgroundColor: 'black',
    transform: [
      { rotateY: '39deg' },
      { rotateZ: '20deg' },
      { rotateX: '-70deg' },
      { translateY: 10 },
      { translateX: 10 }
    ],
    shadowColor: '#BDBDBD',
    shadowOffset: { width: 15, height: 15 },
    shadowOpacity: 0.6,
    shadowRadius: 2
  },
  boardStyle: {
    width: 60,
    height: 60,
  },
  witeBoard: {
    backgroundColor: '#F0F0F0'
  },
  gridBoard: {
    backgroundColor: '#DDDDDD',
  },
  boardBottomOne: {
    width: 238,
    height: 20,
    backgroundColor: "#C3C3C3",
    transform: [
      { rotateY: '39deg' },
      { rotateZ: '20deg' },
      { rotateX: '19deg' },
      { translateX: -120 },
      { translateY: -38 },
    ],
    marginLeft: 5
  },
  boardBottomTwo: {
    width: 238,
    height: 20,
    backgroundColor: "#C3C3C3",
    transform: [
      { rotateY: '-42deg' },
      { rotateZ: '-19.4deg' },
      { rotateX: '9deg' },
      { translateX: 139 },
      { translateY: -49 },
    ],
  }
})