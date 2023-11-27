export class Piece {
  position: { x: 0; y: 0 }
  color: ""
  type: ""
  constructor(position, color, type) {
    this.position = position
    this.color = color
    this.type = type
  }
}
