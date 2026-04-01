class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map();
        const cols = new Map();
        const square = new Map();

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                // to check if the elements value exists in map 
                // also to continue if the element has . as value 
                let element = board[i][j];
                if (element === '.') {
                    continue;
                }
                element = parseInt(element);

                // TODO: update the logic to fetch correct index for square. 

                const sqaureIndex = (Math.floor(i / 3) * 3) + Math.floor(j / 3);

                if (!rows.has(i)) {
                    rows.set(i, new Set());                            
                }

                if (!cols.has(j)) {
                    cols.set(j, new Set());
                }

                if (!square.has(sqaureIndex)) {
                    square.set(sqaureIndex, new Set());
                }

                if (rows.get(i).has(element) || cols.get(j).has(element) || square.get(sqaureIndex).has(element)) {
                    return false;
                }

                rows.get(i).add(element);
                cols.get(j).add(element);
                square.get(sqaureIndex).add(element);
                // if it's not present add it to that row, col or square 
                // new set creation                
                // update the existing set 
            }
        }
        return true;
    }
}
