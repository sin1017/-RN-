export function checkBoardChessPosition(boardList) {
  //# 確認可放置棋子的位子
  return boardList.map((item) => item.map((itemValue) => {
    if (itemValue) {
      return Object.prototype.toString.call(itemValue) === '[object Object]' ? null : itemValue
    }
    return itemValue
  }))
}

export function resetBoard(boardList) {
  return boardList.map((item) => item.map((itemValue) => {
    return itemValue === null ? {} : itemValue
  }))
}