
let eachGrid = document.getElementById('rightContainer');
document.getElementById('small').addEventListener('click', createGrid(700));
document.getElementById('medium').addEventListener('click', createGrid(30));
document.getElementById('big').addEventListener('click', createGrid(20));

//the matrix of size grid Size 
function createGrid(x){
for(let i=0;i<x;i++){
        let grid = document.createElement('div');
        grid.className = "grid small"
        eachGrid.appendChild(grid);
   }
}


