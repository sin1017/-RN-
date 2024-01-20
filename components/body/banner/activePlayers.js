import { StyleSheet, View, Text, Image, Asset } from 'react-native';
import React from 'react';

function activePlayer(value) {
  const chessList = value.chessList ?? ['../../assets/chess/piece-g1.png'];
  const avatarStyle = {
    marginRight: 5,
    marginLeft: 5,
    borderWidth: 4,
    borderColor: '#FF9C9C',
    borderRadius: '50%',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }
  const chessImgList = {
    r1: require('../../../assets/chess/piece-r1.png'),
    r2: require('../../../assets/chess/piece-r2.png'),
    g1: require('../../../assets/chess/piece-g1.png'),
    g2: require('../../../assets/chess/piece-g2.png'),
    y1: require('../../../assets/chess/piece-y2.png'),
    y2: require('../../../assets/chess/piece-y2.png'),
  }

  return (
    <View style={style.container}>
      <View>
        {
          chessList.map((item) => (
            <Image source={chessImgList[item.url]} key={item.id} style={style.img} />
          ))
        }
      </View>
      <View style={avatarStyle}>
        <Image source={require('../../../assets/default.png')} style={style.avatar} />
      </View>
      <Text>{value.name}</Text>
    </View>
  )
}

export default activePlayer

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 15,
    height: 6
  },
  avatar: {
    width: '100%',
    height: '100%',
  }
})