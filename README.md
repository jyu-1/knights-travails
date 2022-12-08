# Knights Travails

A knight in chess can move to any square on the standard 8x8 chess board from any other square on the board, given enough turns. Its basic move is two steps forward and one step to the side. It can face any direction.

This project is attempt to search for the shortest possible way to get from one square to another using legal moves.

The approach to this project is by mapping out all the possible moves each square is allowed to go into.

Each square can move into 8 different positions. Knight piece near the border will have the moves that goes out of bound filtered out.

We then use a queue to traverse the graph. While doing so, we need to make sure we keep track of what node have already been visited. We will also store the previous node location.

Lastly, traverse the tree by referencing its previous node.
