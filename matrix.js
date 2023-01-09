const matrix = [[1, 2, 3], [3, 4, 6],[2,3,4]];
const matrix2 = [[5, 6, 8], [7, 8, 9],[5,6,8]];

let mt3 = [];
let row = matrix.length;
let col = matrix[0].length;

for (let i = 0; i < row; i++){
    var k = [];
    for (let j = 0; j < col; j++){
        k.push(matrix[i][j] + matrix2[i][j])
    }
    mt3.push(k);
}

console.log(mt3)