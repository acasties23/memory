import { createGrid } from "./grid.js";
import { createGame } from "./game.js"

document.addEventListener("DOMContentLoaded", () => {
    console.log("launching game...");
    const grid = createGrid()
    const game = createGame(grid)
    for (let rowIdx = 0; rowIdx < grid.length; rowIdx++) {
        const row = grid[rowIdx];
        for (let colIdx = 0; colIdx < row.length; colIdx++) {
            const card = row[colIdx];
            const pageCard = document.querySelector('#row_' + rowIdx + '-col_' + colIdx)
            console.log("load",card,pageCard);
            card.listener = function () {
                    pageCard.src = card.getSrc();
            }
            pageCard.addEventListener('click', function() {
                console.log("click",card,pageCard);
                if (!card.isVisible) {
                    game.reveal(card)
                }
            })
        }
    }
})

                
