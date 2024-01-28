import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import Header from '../components/header';
import Footer from '../components/footer';
import Body from '../components/body';
import { checkBoardChessPosition, resetBoard } from '../tools/checkBoard';
import { useSelector } from 'react-redux';

export default function minView() {
  const [boardList, setBoardList] = React.useState(
    useSelector((state) => state.boardData.boardList),
  );

  const [playerList, setPlayerList] = React.useState(
    useSelector((state) => state.boardData.playerList),
  );
  const [sequential, setSequential] = React.useState(
    useSelector((state) => state.boardData.sequential),
  );
  function addNewChess() {
    const newBoardList = checkBoardChessPosition(boardList);
    setBoardList(newBoardList);
  }

  function getAddChessPosition(key, item) {
    const setChessKey = boardList[key].findIndex((target) => target === null);
    // 如果找不到空的位置，setChessKey 將為 -1
    if (setChessKey !== -1) {
      boardList[key][setChessKey] = sequential;
      const newBoardList = JSON.parse(JSON.stringify(boardList));
      setBoardList(newBoardList);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.body}>
        <Body boardList={boardList} getAddChessPosition={getAddChessPosition} />
      </View>
      <View style={styles.footer}>
        <Footer setNewChess={addNewChess} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.9,
  },
  body: {
    flex: 5,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  footer: {
    flex: 1.3,
    backgroundColor: '#f5f5f5',
  },
});
