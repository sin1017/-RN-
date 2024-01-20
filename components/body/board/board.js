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
      { rotateZ: '18deg' },
      { rotateX: '-69deg' },
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
  }
})