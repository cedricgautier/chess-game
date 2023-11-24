import { Piece } from "../classes/piece"

export const setChosenChessPiece = (
  xPosition: string,
  yPosition: string,
  color: string
): Piece => new Piece({ x: xPosition, y: yPosition }, color)
