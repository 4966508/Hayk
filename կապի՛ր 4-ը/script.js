var matrix = [];
const m = 8;
const n = 7;

for (let j = 0; j < n; j++) {
    matrix[j] = [];
    for (let i = 0; i < m; i++) {
        matrix[j][i] = 0;
    }
}

function move(vert, queue) {
    for (let h in matrix) {
        h = Number(h);
        if (matrix[0][vert - 1] !== 0) {
            player = !(player - 1) + 1;
            break;
        }
        if (matrix[h + 1] && matrix[h + 1][vert - 1] !== 0 || h == n - 1) {

            matrix[h][vert - 1] = queue;
            console.log(h, vert);
            if(fix_win(h, vert-1)){
                for(let q in arrowArr){
                    arrowArr[q].onclick = "";
                }
            }
            break;
        }
    }
    display(matrix);
}
function get_combs(y,x) {
    var diag1 = [], diag2 = [], vert = [], horiz = [];
    var min, max;
    if (Math.min(x, y) < 3) {
        min = Math.min(x, y);
    }
    else min = 3;
    if (Math.min(m-1 - x, n-1 - y) < 3) {
        max = Math.min(m-1 - x, n-1 - y);
    }
    else max = 3;
    for(let i = -min; i <= max; i++){
        diag1.push([y+i, x+i]);
    }//////////
    if (Math.min(m-1 - x, y) < 3) {
        min = Math.min(m-1 - x, y);
    }
    else min = 3;
    if (Math.min(x, n-1 - y) < 3) {
        max = Math.min(x, n-1 - y);
    }
    else max = 3;
    for(i = -min; i <= max; i++){
        diag2.push([y+i, x-i]);
    }////////////
    if (x < 3) {
        min = x;
    }
    else min = 3;
    if (m-1 - x < 3) {
        max = m-1 - x;
    }
    else max = 3;
    for(i = -min; i <= max; i++){
        horiz.push([y, x+i]);
    }//////////////
    if (y < 3) {
        min = y;
    }
    else min = 3;
    if (n-1 - y < 3) {
        max = n-1 - y;
    }
    else max = 3;
    for(i = -min; i <= max; i++){
        vert.push([y+i, x]);
    }
    return [diag1, diag2, horiz, vert];
}
function fix_win(vert, hor) {
    var dir_arr = get_combs(vert, hor);
    var winval;
    var e1,e2,e3,e4;
    for(let i in dir_arr){
        dir = dir_arr[i];
        for(let j = 0; j < dir.length-3; j++){
            j = parseInt(j);
            e1 = matrix[dir[j][0]][dir[j][1]];
            e2 = matrix[dir[j+1][0]][dir[j+1][1]];
            e3 = matrix[dir[j+2][0]][dir[j+2][1]];
            e4 = matrix[dir[j+3][0]][dir[j+3][1]];
            if(e1 === e2 && e2 === e3 && e3 === e4 && e1 !== 0){
                if(player === 1){
                    winval = 3;
                }
                else winval = 4;
                matrix[dir[j][0]][dir[j][1]] = winval;
                matrix[dir[j+1][0]][dir[j+1][1]] = winval;
                matrix[dir[j+2][0]][dir[j+2][1]] = winval;
                matrix[dir[j+3][0]][dir[j+3][1]] = winval;
                return true;
            }
        }
    }
}