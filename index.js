document.addEventListener('DOMContentLoaded', function(){
    const gridSize = 9;
    const solveButton = document.getElementById("solve-btn");
    solveButton.addEventListener('click', solveSudoku);

    const sudokuGrid = this.documentElementById("sudoku-grid");
    // Create the sudoku grid and input cellss
    for(let row = 0; row < gridSize; row++){
        const newRow = document.createElement("tr");
        for(let col = 0; col < gridSize; col++){
            const cell = document.createElement("td");
            const input = document.createElement("input");
            input
        }
    }
})