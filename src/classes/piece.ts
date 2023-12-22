export class Piece {
  position: { x: 0; y: 0 }
  color: ""
  type: ""
  symbol: ""
  hasMoved: false
  constructor(position, color, type, symbol, hasMoved) {
    this.position = position
    this.color = color
    this.type = type
    this.symbol = symbol
    this.hasMoved = hasMoved
  }
}
