export class Piece {
  position: { x: 0; y: 0 }
  color: ""
  type: ""
  symbol: ""
  constructor(position, color, type, symbol) {
    this.position = position
    this.color = color
    this.type = type
    this.symbol = symbol
  }
}
