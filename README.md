## Objectif

> [!NOTE] Let's make a game!
> Make a chess game playable on the same machine by two human players.

test

## Requirements

You want to make a game of chess with these features in order to play as two people :

- **Game Rules**
  - You must implement the move rules for each pieces;
  - Start & reset button in accordance to the state of the game
- **Player**
  - Count moves for each player
  - Count the pieces eaten by player
- **Coding Rules**
  - You can't use any library expect those seen during class
  - CSS MUST BE DONE through tailwindcss;
  - Must follow all the good practices seen during class and use all the appropriate React hooks;

### Bonus Points

- special moves (e.g: ROC),
- Detect check & mat
- Detect staled game, undo.

## Caution

- Any rule that hasn't been followed will be a negative score.
- You MUST upload ONLY a txt file with the URL to your CodeSandBox, and it must be named:
  - firstName_lastName.txt (full small case & compound names: jean-pierre_de-lavillette.txt)

## Docs

- [How to use new CSB:](https://www.youtube.com/watch?v=fzhEVTR11os)
- You will be provided with a linter configuration, you MUST use it properly
  - [Template CSB](https://codesandbox.io/p/sandbox/chess-game-zfhdts)

---

## Solution

To be able to make this game, we are obliged to make this game using ReactJS with the use of React Hooks correctly used.

### Context

#### What is chess?

The game of chess is a board game in which two players are face-to-face with each player having 16 pieces (with different attributes) each to play with and with one objectif. Trap the other's King, that's called checkmate!

#### What are the different pieces ?

- The King :

  - There is only one King on each side
  - This is the most important piece in the game. If your king goes down, it's Game Over. When a another piece is able to take the square in which the king is positioned, that's checkmate.
  - The King can move in all directions but can only move one square at a time.

- The Queen :
  - There is only one Queen on each side
  - The Queen is considered to be the most powerful piece on the chessboard with the highest calculable numerical value of 9 points.
  - The Queen is a long-range piece that can move in all directions but cannot jump over any piece and can cover as many squares as it wishes to.
- The Rook :
  - There are two Rook on each side with each of them placed on the edge of the board, that is the ‘a’ and ‘h’ files
  - The Rook represents the elephant on the board and is worth 5 points.
  - It is a long-range piece where the Rook moves in a straight direction vertically and horizontally.
  - The Rook can move forward, backward and sideways.
- The Bishop

  - The Bishop is a long-range piece that moves diagonally and can cover as many squares as possible without jumping over a piece and can capture pieces along the way.
  - The Bishop is worth three points, just like the Knight but is slightly stronger as it is a long-range piece.
  - There are two Bishops on each side and one is placed on the ‘f’ file while the other is placed on the ‘c’ file.

- The Knight

  - It can horse can jump over pieces and moves two and a half squares ahead, behind and sideways. To make it simpler the Knight forms an ‘L’ shape with its movements.
  - The Knights are also valued at 3 points but are considered slightly weaker compared to Bishops as they are short-ranged pieces
  - There are two knights on each side and one is placed on the ‘f’ file while the other is placed on the ‘c’ file. One on the Queenside and one on the Kingside, between the Bishop and the Rook, on the ‘b’ and ‘g’ file.

- The Pawn :
  - The pawns can move two squares forward on the first move and then move one square at a time beyond that in the forward direction only.
  - Pawns are valued at 1 point each.
  - Every player gets eight.
  - Specials :
    1. The pawn can be converted into any piece other than the King if it reaches the opposite end of the board; that is if a White pawn reaches the Black end of the board. This is usually seen in end games which is why pawns are worth their weight in gold during end games.
    2. En Passant is a special move in chess where a pawn can diagonally move on an empty square and capture the pawn on the adjacent square provided the adjacent pawn has just moved two moves. To simplify this special move, take a look at the example below:

rook : At position A1, if x (row) is 1 or y (column) is A, they can move
bishop :
knight :
pawn : if not the same column with a limit of X + 1, then you cannot

#### How do you win in chess?

> When a piece is able to take the square in which the king is positioned, that's checkmate. Win by taking the King of your opponent

###

♔ King
♕Queen
♖ Rook
♗ Bishop
♘ Knight
♙ Pawn
