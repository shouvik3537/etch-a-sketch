let 
let gridSize = 5;
let grid = document.createElement('div');
grid.className = "grid";
createGrid();
function createGrid(){
for(let i=0;i<gridSize;i++){
    for(let j = 0; j<gridSize;j++){
        document.getElementById("rightContainer").appendChild(grid);  
        console.log(i,j);
    }
}
}