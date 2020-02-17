// const onload = () => {
    $(document).ready(function () {

        let playerOne = "X";
        let playerTwo = "O";
    
        let currentTurn = 1;
        let movesMade = 0;
    
        let cells = $(".box");
        let winnerContainer = $(".game-status");
        let reset = $("#reset-game");
    
        const startGame = () => {
            cells.on('click', (event) => {
                
                movesMade++;
        
                if (currentTurn === 1) {
                    event.target.innerHTML = playerOne;
                    currentTurn++;
                } else {
                    event.target.innerHTML = playerTwo;
                    currentTurn--;
                }
                if (checkForWiner()) {
                    let theWinner = currentTurn === 1 ? playerTwo : playerOne;
                    declareWinner(theWinner);
                    cells.off();
                }
            }); 
        } 
    
        reset.on('click', (event) => {
            let moves = Array.prototype.slice.call($(".box"));
            moves.map((m) => m.innerHTML = "");
            winnerContainer.html('');
            winnerContainer.css('display', "none");
            currentTurn = 1;
            movesMade = 0;
            cells.off();
            startGame();
    
        });
        startGame();
        const checkForWiner = () => {
            if (movesMade > 4) {
                let moves = Array.prototype.slice.call($(".box"));
                let results = moves.map(function (box) {
                    return box.innerHTML;
                });
    
                const winningConditions = [
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6]
                ];
    
                return winningConditions.find((combo) => {
                    if (results[combo[0]] !== "" && results[combo[1]] !== "" && results[combo[2]] !== "" && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]) {
                        return true;
                    } else {
                        return false;
                    }
                });
            }
        }
    
        const declareWinner = (winner) => {
            winnerContainer.css('display', "block");
            winner = winner === playerOne ? 'X' : 'O';
            winnerContainer.html(winner + " Wins!");
        }
    
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //     const winningConditions = [
    //         [0, 1, 2],
    //         [3, 4, 5],
    //         [6, 7, 8],
    //         [0, 3, 6],
    //         [1, 4, 7],
    //         [2, 5, 8],
    //         [0, 4, 8],
    //         [2, 4, 6]
    //     ];
    
    //     const grid = () => Array.from(document.getElementsByClassName('box'));
    //     const cellIndex = (cellElement) => Number.parseInt(cellElement.getAttribute('data-cell-index'));
    //     const emptyCells = () => grid().filter(boxElement => boxElement.innerText === '');
    //     const allSame = (arr) => arr.every(boxElement => boxElement.innerText === arr[0].innerText && boxElement.innerText !== '');
    //     const takeTurn = (index, letter) => grid()[index].innerText = letter;
    //     // opponentChoice = () => cellIndex(emptyCells()[Math.floor(Math.random() * emptyCells().length)]);
    //     opponentChoice = () => cellIndex(emptyCells()[]);
    
    //     const endGame = (winnigSequence) => { 
    //         winnigSequence.forEach(boxElement => boxElement.classList.add('winner'));
    //         disableListeners();
    //      }
    
    //     const checkForVictory = () => {
    //         let victory = false;
    //         winningConditions.forEach(combo => {
    //             const _grid = grid();
    //             const sequence = [_grid[combo[0]], _grid[combo[1]], _grid[combo[2]]];
    //             if (allSame(sequence)) {
    //                 victory = true;
    //                 endGame(sequence);
    //             }
    //         });
    //         return victory;
    //     }
    
    
    
    //     const opponentTurn = () => {
    //         takeTurn(opponentChoice(), 'O');
    //         if (!checkForVictory())
    //         clickHandle();
    
    //         // disableListeners();
    //         // setTimeout(() => {
    //         //     takeTurn(opponentChoice(), 'O');
    //         //     if (!checkForVictory())
    //         //     enableListeners();
    //         // }, 1000);
    //     }
    
    //     const clickHandle = ($event) => {
    //         takeTurn(cellIndex($event.target), 'X');
    //         if (!checkForVictory()) 
    //         opponentTurn();
    //     }
    
    //     const enableListeners = () => grid().forEach(boxElement => boxElement.addEventListener('click', clickHandle));
    //     const disableListeners = () => grid().forEach(boxElement => boxElement.removeEventListener('click', clickHandle));
    //     enableListeners();
    
    
    // }
    
    // $(onload);