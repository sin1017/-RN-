import { StyleSheet, View } from 'react-native';
import React from 'react';
import Board from './board/board';

function main(value) {


  return (
    <View style={style.container}>
      <Board />
    </View>
  )
}

export default main;

const style = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  }
})