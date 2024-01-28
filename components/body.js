import { StyleSheet, View, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';
import Banner from './body/banner';

function body(props) {
  // console.log(props.boardList);
  let testList = props.boardList
  React.useEffect(() => {
    // testList = props.boardList
    console.log('變動了');
  }, [props.boardList])


  return (
    <View>
      <Banner />
      <View style={style.main}>
        <View style={style.board}>
          {
            props.boardList && testList.map((item, index) => {
              let boardStyle = 'witeBoard';
              if ([2, 4, 5, 7, 10, 12, 13, 15].includes(index + 1)) {
                boardStyle = 'gridBoard'
              }
              if (
                item.some((value) => value === null)
              ) {
                boardStyle = [2, 4, 5, 7, 10, 12, 13, 15].includes(index + 1) ? 'greenGridBoard' : 'greenBoard';
              }

              return <TouchableOpacity
                onPress={() => props.getAddChessPosition(index, item)}
                disabled={!boardStyle.includes('green')}
                key={index}
              >
                <View key={index}
                  style={
                    [
                      style.boardStyle,
                      style[boardStyle]
                    ]
                  }
                >
                  {
                    item.image && <Image source={require('../assets/chess/red-chess.png')} />
                  }
                </View>
              </TouchableOpacity>
            })
          }
        </View>
      </View>
    </View>
  )
}

export default body

const style = StyleSheet.create({
  main: {
    alignItems: 'center',
    marginTop: 50
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 240,
    backgroundColor: 'black',
    transform: [
      { rotateY: '40deg' },
      { rotateZ: '20deg' },
      { rotateX: '-70deg' },
      { translateY: 10 },
      { translateX: 10 },
      { scaleY: 1.1 },
      { scaleX: 1.1 },
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
  greenBoard: {
    backgroundColor: '#E6FFC2',
    borderRightWidth: 1,
    borderColor: '#99FF73'
  },
  greenGridBoard: {
    backgroundColor: '#DBF1BB'
  },
  chessStyle: {
    width: 50,
    height: 50,
    // transform: [
    //   { rotateY: '80deg' },
    //   { rotateZ: '20deg' },
    // { rotateX: '-50deg' },
    // ],
  }
})