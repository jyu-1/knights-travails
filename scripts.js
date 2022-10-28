const knightMoves = (coord1, coord2) => {
    // Show beginning and ending coordinate
    console.log(`From [${coord1}] to [${coord2}]`);

    // Create array to store queues, then push beginning coordinate into queue as node
    const queue = [];
    queue.push(coord1);

    // Array to store visited node, so they wont be visted again creating an infinite loop
    const visited = [];
    visited[coord1] = true;

    // Shows the shortest path for all squares
    const shortPath = [];

    // While loop, when queue is empty, exit the loop
    while (queue.length !== 0) {
        // Dequeue the first item in the queue and store it in a variable
        // This is the node being visited
        const current = queue.shift();

        // Obtain all possible moves on the board, then filter them out to remove the one that moves out of board
        let possible = [];
        possibleMoves(current).forEach((element) => {
            if (checkMoves(element) !== null) possible.push(element);
        });

        // Visit each neighbor one by one
        possible.forEach((element) => {
            // If this node has not been visited, a.k.a. return false, go in here
            if (!visited[element]) {
                // Enqueue this neighbor of current node
                queue.push(element);
                // Mark this neighbor as visited
                visited[element] = true;
                // Start listing out all possible moves and referencing the previous node
                // Mapping out a tree
                shortPath[element] = current;
            }
        });
    }

    // Start from the end
    // Everytime we push a path to the final path
    // Refer to it's previous path, and keep on traversing till we reach the starting point (null)
    const path = [];
    for (at = coord2; at != null; at = shortPath[at]) {
        path.push(at);
    }

    // Reverse the array since it is started from the end
    path.reverse();

    console.log(`It took ${path.length - 1} moves! Here's your path:`);

    if (path[0] === coord1) {
        path.forEach((element) => {
            console.log(element);
        });
    } else {
        console.log("No Path Found");
    }
};

// Show all possible moves that the knight can move to, including the one that goes out of board
const possibleMoves = (coord) => {
    const moves = [];
    moves.push([coord[0] - 2, coord[1] + 1]);
    moves.push([coord[0] - 1, coord[1] + 2]);
    moves.push([coord[0] + 1, coord[1] + 2]);
    moves.push([coord[0] + 2, coord[1] + 1]);
    moves.push([coord[0] - 2, coord[1] - 1]);
    moves.push([coord[0] - 1, coord[1] - 2]);
    moves.push([coord[0] + 1, coord[1] - 2]);
    moves.push([coord[0] + 2, coord[1] - 1]);
    return moves;
};

// Check if knight moves out of the board
const checkMoves = (coord) => {
    if (coord[0] >= 0 && coord[0] <= 7 && coord[1] >= 0 && coord[1] <= 7)
        return coord;
    return null;
};

knightMoves([0, 0], [7, 7]);
