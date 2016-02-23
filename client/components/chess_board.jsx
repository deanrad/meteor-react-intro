import React from 'react'
import ChessBoardJS from 'chessboardjs'

const containerId = 'chessboardjs-div'
const initialBoard = {
  a8:'bR', b8:'bN', c8:'bB', d8:'bQ', e8:'bK', f8:'bB', g8:'bN', h8:'bR',
  a7:'bP', b7:'bP', c7:'bP', d7:'bP', e7:'bP', f7:'bP', g7:'bP', h7:'bP',
  a2:'wP', b2:'wP', c2:'wP', d2:'wP', e2:'wP', f2:'wP', g2:'wP', h2:'wP',
  a1:'wR', b1:'wN', c1:'wB', d1:'wQ', e1:'wK', f1:'wB', g1:'wN', h1:'wR'
}

export default React.createClass({
  componentDidMount() {
    ChessBoardJS(containerId, {
      draggable: true,
      position: initialBoard
    })
  },
  render() {
    return (
      <div id={containerId}></div>
    )
  }
})