import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PlayerList = { name: string; score: number };
const initialState: {
  playerList: PlayerList[] | []; // 初始化为空数组
  boardList: any[][];
  count: number;
  sequential: PlayerList | null;
} = {
  playerList: [],
  boardList: Array(16)
    .fill(0)
    .map(() => [{}, {}, {}]),
  count: 0,
  sequential: null,
};
function generateSequentialValue(randomList) {
  const randomIndex = Math.floor(Math.random() * randomList.length);
  return randomList[randomIndex];
}
export const boardDataBase = createSlice({
  name: 'boardData',
  initialState,
  reducers: {
    getRandomPlayerList(state) {
      const playerListData = [
        {
          name: 'player1',
          score: 0,
          chessNum: 5,
          image: 'red-chess',
        },
        {
          name: 'player2',
          score: 0,
          chessNum: 5,
          image: 'yellow-chess',
        },
        {
          name: 'player3',
          score: 0,
          chessNum: 5,
          image: 'green-chess',
        },
        {
          name: 'player4',
          score: 0,
          chessNum: 5,
          image: 'blue-chess',
        },
      ];
      const result = [];
      for (let i = 0; i < 4; i++) {
        const randomValue = generateSequentialValue(playerListData);
        const searchResult = result.find(
          (itemValue) => itemValue === randomValue,
        );
        !searchResult ? result.push(randomValue) : i--;
      }
      state.playerList = result;
    },
    getInitSequential(state) {
      state.sequential = state.playerList[0];
    },
  },
});

export default boardDataBase.reducer;
