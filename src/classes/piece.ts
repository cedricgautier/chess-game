export class Piece {
  position: { x: null; y: null }
  color: null
  type: ""
  constructor(position, color, type) {
    this.position = position
    this.color = color
    this.type = type
  }
}
