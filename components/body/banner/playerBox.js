import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';


function playerBox(value) {
  const boxStyle = {
    width: 105,
    height: 60,
    backgroundColor: value.color ?? '#ffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  }
  return (
    <View style={boxStyle}>
      <Image source={require('../../../assets/default.png')} style={style.image} />
      <View>
        <Text>
          {value.name}
        </Text>
        <Text style={style.score}>
          {value.score ?? 0}
        </Text>
      </View>
    </View>
  )
}


export default playerBox


const style = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    marginRight: 8
  },
  score: {
    color: '#BDBDBD',
    marginTop: 2,
    fontWeight: 'bold'
  }
})