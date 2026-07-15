// INITILIZER VARIABLES
const boardContainer = document.querySelector('.board-container');
const newGameButton = document.querySelector('.new-game-button');

let boardContainerHTML = ``;
let color = 'brown';
let boardData = [
    [-5, -3, -4, -9, -10, -4, -3, -5],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [0, 0, 0, 0, 0, 0 ,0 ,0],
    [0, 0, 0, 0, 0, 0 ,0 ,0],
    [0, 0, 0, 0, 0, 0 ,0 ,0],
    [0, 0, 0, 0, 0, 0 ,0 ,0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [5, 3, 4, 9, 10, 4, 3, 5]
]
let turn = 'white';
let gameStillGoing = true;
let boardlayer = 0;
let boardfile = 0;
let activePiece;

// SETUP
for (let i = 8; i > 0; i--) {
    if (color === 'white') {
        color = 'brown';
    } else {
        color = 'white';
    }
    for (let x = 'a'.charCodeAt(0); x <= 'h'.charCodeAt(0); x++) {
        let letter = String.fromCharCode(x);
        boardContainerHTML += `<div class="board-space ${color}-space" id="${letter}${i}"></div>`;
        if (color === 'white') {
            color = 'brown';
        } else {
            color = 'white';
        }
    }
}

boardContainer.innerHTML = boardContainerHTML;

const boardContainerSpots = document.querySelectorAll('.board-space');

boardContainerSpots.forEach((spot) => {
    let point = boardData[boardlayer][boardfile];
    if (point === -1) {
        spot.dataset.layer = boardlayer;
        spot.dataset.file = boardfile;
    } else if (point === -3) {
        spot.dataset.layer = boardlayer;
        spot.dataset.file = boardfile;
    } else if (point === -4) {
        spot.dataset.layer = boardlayer;
        spot.dataset.file = boardfile;
    } else if (point === -5) {
        spot.dataset.layer = boardlayer;
        spot.dataset.file = boardfile;
    } else if (point === -9) {
        spot.dataset.layer = boardlayer;
        spot.dataset.file = boardfile;
    } else if (point === -10) {
        spot.dataset.layer = boardlayer;
        spot.dataset.file = boardfile;
    } else if (point === 1) {
        spot.dataset.layer = boardlayer;
        spot.dataset.file = boardfile;
    } else if (point === 3) {
        spot.dataset.layer = boardlayer;
        spot.dataset.file = boardfile;
    } else if (point === 4) {
        spot.dataset.layer = boardlayer;
        spot.dataset.file = boardfile;
    } else if (point === 5) {
        spot.dataset.layer = boardlayer;
        spot.dataset.file = boardfile;
    } else if (point === 9) {
        spot.dataset.layer = boardlayer;
        spot.dataset.file = boardfile;
    } else if (point === 10) {
        spot.dataset.layer = boardlayer;
        spot.dataset.file = boardfile;
    } else if (point === 0) {
        spot.dataset.layer = boardlayer;
        spot.dataset.file = boardfile;
    }


    if (boardfile !== 7) {
        boardfile++;
    } else {
        boardlayer++;
        boardfile = 0;
    }
});

// GAME LOOP
renderBoard();

// FUNCTIONS
function renderBoard() {
    let layer = 0;
    let file = 0;
    boardContainerSpots.forEach((spot) => {
        let point = boardData[layer][file];
        if (point === -1) {
            spot.innerHTML = `<img class="board-piece clickable-black-piece" data-layer="${layer}" data-file="${file}" src="pieces/black_pawn.png"></img>`;
        } else if (point === -3) {
            spot.innerHTML = `<img class="board-piece clickable-black-piece" data-layer="${layer}" data-file="${file}" src="pieces/black_knight.png"></img>`;
        } else if (point === -4) {
            spot.innerHTML = `<img class="board-piece clickable-black-piece" data-layer="${layer}" data-file="${file}" src="pieces/black_bishop.png"></img>`;
        } else if (point === -5) {
            spot.innerHTML = `<img class="board-piece clickable-black-piece" data-layer="${layer}" data-file="${file}" src="pieces/black_rook.png"></img>`;
        } else if (point === -9) {
            spot.innerHTML = `<img class="board-piece clickable-black-piece" data-layer="${layer}" data-file="${file}" src="pieces/black_queen.png"></img>`;
        } else if (point === -10) {
            spot.innerHTML = `<img class="board-piece clickable-black-piece" data-layer="${layer}" data-file="${file}" src="pieces/black_king.png"></img>`;
        } else if (point === 1) {
            spot.innerHTML = `<img class="board-piece clickable-piece" data-layer="${layer}" data-file="${file}" src="pieces/white_pawn.png"></img>`;
        } else if (point === 3) {
            spot.innerHTML = `<img class="board-piece clickable-piece" data-layer="${layer}" data-file="${file}" src="pieces/white_knight.png"></img>`;
        } else if (point === 4) {
            spot.innerHTML = `<img class="board-piece clickable-piece" data-layer="${layer}" data-file="${file}" src="pieces/white_bishop.png"></img>`;
        } else if (point === 5) {
            spot.innerHTML = `<img class="board-piece clickable-piece" data-layer="${layer}" data-file="${file}" src="pieces/white_rook.png"></img>`;
        } else if (point === 9) {
            spot.innerHTML = `<img class="board-piece clickable-piece" data-layer="${layer}" data-file="${file}" src="pieces/white_queen.png"></img>`;
        } else if (point === 10) {
            spot.innerHTML = `<img class="board-piece clickable-piece" data-layer="${layer}" data-file="${file}" src="pieces/white_king.png"></img>`;
        } else {
            spot.innerHTML = '';
        }


        if (file !== 7) {
            file++;
        } else {
            layer++;
            file = 0;
        }
    });
}

function showValidMoves(layer, file) {
    const validMoves = getValidMoves(layer, file);
    let checkForMultipleMoves = (arr) => arr.some(Array.isArray);
    let multipleValidMoves = checkForMultipleMoves(validMoves);
    if (multipleValidMoves) {
        let count = -1;
        validMoves.forEach((moveSet) => {
            count++;
            boardContainerSpots.forEach((piece) => {
                if (Number(piece.dataset.layer) === validMoves[count][0] && Number(piece.dataset.file) === validMoves[count][1]) {
                    piece.innerHTML += `<div class="valid-move-chip"></div>`;
                    piece.classList.add('clickable-spot');
                }
            });
        });
    } else {
        boardContainerSpots.forEach((piece) => {
            if (Number(piece.dataset.layer) === validMoves[0] && Number(piece.dataset.file) === validMoves[1]) {
                piece.innerHTML += `<div class="valid-move-chip"></div>`;
                piece.classList.add('clickable-spot');
            }
        });
    }
}

function getValidMoves(layer, file) {
    let validMoves = [];
    if (boardData[layer][file] === 1) {
        if (layer - 1 >= 0 && boardData[layer - 1][file] === 0) {
            if (isChecked([layer, file], [layer - 1, file])) {
                validMoves.push([layer - 1, file]);
            }
        }
        if (boardData[6][file] === 1 && boardData[layer - 2][file] === 0) {
            if (isChecked([layer, file], [layer - 2, file])) {
                validMoves.push([layer - 2, file]);
            }
        }
        if (layer - 1 >= 0 && file - 1 >= 0 && boardData[layer - 1][file - 1] < 0) {
            if (isChecked([layer, file], [layer - 1, file - 1])) {
                validMoves.push([layer - 1, file - 1]);
            }
        }
        if (layer - 1 >= 0 && file + 1 <= 7 && boardData[layer - 1][file + 1] < 0) {
            if (isChecked([layer, file], [layer - 1, file + 1])) {
                validMoves.push([layer - 1, file + 1]);
            }
        }
    } else if (boardData[layer][file] === 3) {
        if (layer - 2 >= 0 && file - 1 >= 0 && boardData[layer - 2][file - 1] <= 0) {
            if (isChecked([layer, file], [layer - 2, file - 1])) {
                validMoves.push([layer - 2, file - 1]);
            }
        }
        if (layer - 2 >= 0 && file + 1 <= 7 && boardData[layer - 2][file + 1] <= 0) {
            if (isChecked([layer, file], [layer - 2, file + 1])) {
                validMoves.push([layer - 2, file + 1]);
            }
        }
        if (layer - 1 >= 0 && file - 2 >= 0 && boardData[layer - 1][file - 2] <= 0) {
            if (isChecked([layer, file], [layer - 1, file - 2])) {
                validMoves.push([layer - 1, file - 2]);
            }
        }
        if (layer - 1 >= 0 && file + 2 <= 7 && boardData[layer - 1][file + 2] <= 0) {
            if (isChecked([layer, file], [layer - 1, file + 2])) {
                validMoves.push([layer - 1, file + 2]);
            }
        }
        if (layer + 1 <= 7 && file - 2 >= 0 && boardData[layer + 1][file - 2] <= 0) {
            if (isChecked([layer, file], [layer + 1, file - 2])) {
                validMoves.push([layer + 1, file - 2]);
            }
        }
        if (layer + 1 <= 7 && file + 2 <= 7 && boardData[layer + 1][file + 2] <= 0) {
            if (isChecked([layer, file], [layer + 1, file + 2])) {
                validMoves.push([layer + 1, file + 2]);
            }
        }
        if (layer + 2 <= 7 && file - 1 >= 0 && boardData[layer + 2][file - 1] <= 0) {
            if (isChecked([layer, file], [layer + 2, file - 1])) {
                validMoves.push([layer + 2, file - 1]);
            }
        }
        if (layer + 2 <= 7 && file + 1 <= 7 && boardData[layer + 2][file + 1] <= 0) {
            if (isChecked([layer, file], [layer + 2, file + 1])) {
                validMoves.push([layer + 2, file + 1]);
            }
        }
    } else if (boardData[layer][file] === 4) {
        for (let i = 1; i < 8; i++) {
            if (layer - i >= 0 && file - i >= 0) {
                if (boardData[layer - i][file - i] <= 0) {
                    if (isChecked([layer, file], [layer - i, file - i])) {
                        validMoves.push([layer - i, file - i]);
                    }
                }
                if (boardData[layer - i][file - i] < 0 || boardData[layer - i][file - i] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (layer - i >= 0 && file + i <= 7) {
                if (boardData[layer - i][file + i] <= 0) {
                    if (isChecked([layer, file], [layer - i, file + i])) {
                        validMoves.push([layer - i, file + i]);
                    }
                }
                if (boardData[layer - i][file + i] < 0 || boardData[layer - i][file + i] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (layer + i <= 7 && file - i >= 0) {
                if (boardData[layer + i][file - i] <= 0) {
                    if (isChecked([layer, file], [layer + i, file - i])) {
                        validMoves.push([layer + i, file - i]);
                    }
                }
                if (boardData[layer + i][file - i] < 0 || boardData[layer + i][file - i] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (layer + i <= 7 && file + i <= 7) {
                if (boardData[layer + i][file + i] <= 0) {
                    if (isChecked([layer, file], [layer + i, file + i])) {
                        validMoves.push([layer + i, file + i]);
                    }
                }
                if (boardData[layer + i][file + i] < 0 || boardData[layer + i][file + i] > 0) {
                    break;
                }
            }
        }
    } else if (boardData[layer][file] === 5) {
        for (let i = 1; i < 8; i++) {
            if (layer - i >= 0) {
                if (boardData[layer - i][file] <= 0) {
                    if (isChecked([layer, file], [layer - i, file ])) {
                        validMoves.push([layer - i, file ]);
                    }
                }
                if (boardData[layer - i][file] < 0 || boardData[layer - i][file] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (layer + i <= 7) {
                if (boardData[layer + i][file] <= 0) {
                    if (isChecked([layer, file], [layer + i, file ])) {
                        validMoves.push([layer + i, file ]);
                    }
                }
                if (boardData[layer + i][file] < 0 || boardData[layer + i][file] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (file + i <= 7) {
                if (boardData[layer][file + i] <= 0) {
                    if (isChecked([layer, file], [layer, file + i])) {
                        validMoves.push([layer, file + i]);
                    }
                }
                if (boardData[layer][file + i] < 0 || boardData[layer][file + i] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (file - i >= 0) {
                if (boardData[layer][file - i] <= 0) {
                    if (isChecked([layer, file], [layer, file - i])) {
                        validMoves.push([layer, file - i]);
                    }
                }
                if (boardData[layer][file - i] < 0 || boardData[layer][file - i] > 0) {
                    break;
                }
            }
        }
    } else if (boardData[layer][file] === 9) {
        for (let i = 1; i < 8; i++) {
            if (layer - i >= 0 && file - i >= 0) {
                if (boardData[layer - i][file - i] <= 0) {
                    if (isChecked([layer, file], [layer - i, file - i])) {
                        validMoves.push([layer - i, file - i]);
                    }
                }
                if (boardData[layer - i][file - i] < 0 || boardData[layer - i][file - i] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (layer - i >= 0 && file + i <= 7) {
                if (boardData[layer - i][file + i] <= 0) {
                    if (isChecked([layer, file], [layer - i, file + i])) {
                        validMoves.push([layer - i, file + i]);
                    }
                }
                if (boardData[layer - i][file + i] < 0 || boardData[layer - i][file + i] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (layer + i <= 7 && file - i >= 0) {
                if (boardData[layer + i][file - i] <= 0) {
                    if (isChecked([layer, file], [layer + i, file - i])) {
                        validMoves.push([layer + i, file - i]);
                    }
                }
                if (boardData[layer + i][file - i] < 0 || boardData[layer + i][file - i] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (layer + i <= 7 && file + i <= 7) {
                if (boardData[layer + i][file + i] <= 0) {
                    if (isChecked([layer, file], [layer + i, file + i])) {
                        validMoves.push([layer + i, file + i]);
                    }
                }
                if (boardData[layer + i][file + i] < 0 || boardData[layer + i][file + i] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (layer - i >= 0) {
                if (boardData[layer - i][file] <= 0) {
                    if (isChecked([layer, file], [layer - i, file ])) {
                        validMoves.push([layer - i, file ]);
                    }
                }
                if (boardData[layer - i][file] < 0 || boardData[layer - i][file] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (layer + i <= 7) {
                if (boardData[layer + i][file] <= 0) {
                    if (isChecked([layer, file], [layer + i, file ])) {
                        validMoves.push([layer + i, file ]);
                    }
                }
                if (boardData[layer + i][file] < 0 || boardData[layer + i][file] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (file + i <= 7) {
                if (boardData[layer][file + i] <= 0) {
                    if (isChecked([layer, file], [layer, file + i])) {
                        validMoves.push([layer, file + i]);
                    }
                }
                if (boardData[layer][file + i] < 0 || boardData[layer][file + i] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (file - i >= 0) {
                if (boardData[layer][file - i] <= 0) {
                    if (isChecked([layer, file], [layer, file - i])) {
                        validMoves.push([layer, file - i]);
                    }
                }
                if (boardData[layer][file - i] < 0 || boardData[layer][file - i] > 0) {
                    break;
                }
            }
        }
    } else if (boardData[layer][file] === 10) {
        if (layer - 1 >= 0 && boardData[layer - 1][file] <= 0) {
            if (isChecked([layer, file], [layer - 1, file])) {
                validMoves.push([layer - 1, file]);
            }
        }
        if (layer + 1 <= 7 && boardData[layer + 1][file] <= 0) {
            if (isChecked([layer, file], [layer + 1, file])) {
                validMoves.push([layer + 1, file]);
            }
        }
        if (file - 1 >= 0 && boardData[layer][file - 1] <= 0) {
            if (isChecked([layer, file], [layer, file - 1])) {
                validMoves.push([layer, file - 1]);
            }
        }
        if (file + 1 <= 7 && boardData[layer][file + 1] <= 0) {
            if (isChecked([layer, file], [layer, file + 1])) {
                validMoves.push([layer, file + 1]);
            }
        }
        if (layer - 1 >= 0 && file - 1 >= 0 && boardData[layer - 1][file - 1] <= 0) {
            if (isChecked([layer, file], [layer - 1, file - 1])) {
                validMoves.push([layer - 1, file - 1]);
            }
        }
        if (layer - 1 >= 0 && file + 1 <= 7 && boardData[layer - 1][file + 1] <= 0) {
            if (isChecked([layer, file], [layer - 1, file + 1])) {
                validMoves.push([layer - 1, file + 1]);
            }
        }
        if (layer + 1 <= 7 && file - 1 >= 0 && boardData[layer + 1][file - 1] <= 0) {
            if (isChecked([layer, file], [layer + 1, file - 1])) {
                validMoves.push([layer + 1, file - 1]);
            }
        }
        if (layer + 1 <= 7 && file + 1 <= 7 && boardData[layer + 1][file + 1] <= 0) {
            if (isChecked([layer, file], [layer + 1, file + 1])) {
                validMoves.push([layer + 1, file + 1]);
            }
        }
    } else if (boardData[layer][file] === -1) {
        if (layer + 1 <= 7 && boardData[layer + 1][file] === 0) {
            if (isChecked([layer, file], [layer + 1, file])) {
                validMoves.push([layer + 1, file]);
            }
        }
        if (layer === 1 && boardData[layer + 1][file] === 0 && boardData[layer + 2][file] === 0) {
            if (isChecked([layer, file], [layer + 2, file])) {
                validMoves.push([layer + 2, file]);
            }
        }
        if (layer + 1 <= 7 && file + 1 <= 7 && boardData[layer + 1][file + 1] > 0) {
            if (isChecked([layer, file], [layer + 1, file + 1])) {
                validMoves.push([layer + 1, file + 1]);
            }
        }
        if (layer + 1 <= 7 && file - 1 >= 0 && boardData[layer + 1][file - 1] > 0) {
            if (isChecked([layer, file], [layer + 1, file - 1])) {
                validMoves.push([layer + 1, file - 1]);
            }
        }
    } else if (boardData[layer][file] === -3) {
        // Black Knight
        if (layer - 2 >= 0 && file - 1 >= 0 && boardData[layer - 2][file - 1] >= 0) {
            if (isChecked([layer, file], [layer - 2, file - 1])) {
                validMoves.push([layer - 2, file - 1]);
            }
        }
        if (layer - 2 >= 0 && file + 1 <= 7 && boardData[layer - 2][file + 1] >= 0) {
            if (isChecked([layer, file], [layer - 2, file + 1])) {
                validMoves.push([layer - 2, file + 1]);
            }
        }
        if (layer - 1 >= 0 && file - 2 >= 0 && boardData[layer - 1][file - 2] >= 0) {
            if (isChecked([layer, file], [layer - 1, file - 2])) {
                validMoves.push([layer - 1, file - 2]);
            }
        }
        if (layer - 1 >= 0 && file + 2 <= 7 && boardData[layer - 1][file + 2] >= 0) {
            if (isChecked([layer, file], [layer - 1, file + 2])) {
                validMoves.push([layer - 1, file + 2]);
            }
        }
        if (layer + 1 <= 7 && file - 2 >= 0 && boardData[layer + 1][file - 2] >= 0) {
            if (isChecked([layer, file], [layer + 1, file - 2])) {
                validMoves.push([layer + 1, file - 2]);
            }
        }
        if (layer + 1 <= 7 && file + 2 <= 7 && boardData[layer + 1][file + 2] >= 0) {
            if (isChecked([layer, file], [layer + 1, file + 2])) {
                validMoves.push([layer + 1, file + 2]);
            }
        }
        if (layer + 2 <= 7 && file - 1 >= 0 && boardData[layer + 2][file - 1] >= 0) {
            if (isChecked([layer, file], [layer + 2, file - 1])) {
                validMoves.push([layer + 2, file - 1]);
            }
        }
        if (layer + 2 <= 7 && file + 1 <= 7 && boardData[layer + 2][file + 1] >= 0) {
            if (isChecked([layer, file], [layer + 2, file + 1])) {
                validMoves.push([layer + 2, file + 1]);
            }
        }
    } else if (boardData[layer][file] === -4) {
        // Black Bishop
        for (let i = 1; i < 8; i++) {
            if (layer - i >= 0 && file - i >= 0) {
                if (boardData[layer - i][file - i] >= 0) {
                    if (isChecked([layer, file], [layer - i, file - i])) {
                        validMoves.push([layer - i, file - i]);
                    }
                }
                if (boardData[layer - i][file - i] < 0 || boardData[layer - i][file - i] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (layer - i >= 0 && file + i <= 7) {
                if (boardData[layer - i][file + i] >= 0) {
                    if (isChecked([layer, file], [layer - i, file + i])) {
                        validMoves.push([layer - i, file + i]);
                    }
                }
                if (boardData[layer - i][file + i] < 0 || boardData[layer - i][file + i] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (layer + i <= 7 && file - i >= 0) {
                if (boardData[layer + i][file - i] >= 0) {
                    if (isChecked([layer, file], [layer + i, file - i])) {
                        validMoves.push([layer + i, file - i]);
                    }
                }
                if (boardData[layer + i][file - i] < 0 || boardData[layer + i][file - i] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (layer + i <= 7 && file + i <= 7) {
                if (boardData[layer + i][file + i] >= 0) {
                    if (isChecked([layer, file], [layer + i, file + i])) {
                        validMoves.push([layer + i, file + i]);
                    }
                }
                if (boardData[layer + i][file + i] < 0 || boardData[layer + i][file + i] > 0) {
                    break;
                }
            }
        }
    } else if (boardData[layer][file] === -5) {
        // Black Rook
        for (let i = 1; i < 8; i++) {
            if (layer - i >= 0) {
                if (boardData[layer - i][file] >= 0) {
                    if (isChecked([layer, file], [layer - i, file ])) {
                        validMoves.push([layer - i, file ]);
                    }
                }
                if (boardData[layer - i][file] < 0 || boardData[layer - i][file] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (layer + i <= 7) {
                if (boardData[layer + i][file] >= 0) {
                    if (isChecked([layer, file], [layer + i, file ])) {
                        validMoves.push([layer + i, file ]);
                    }
                }
                if (boardData[layer + i][file] < 0 || boardData[layer + i][file] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (file + i <= 7) {
                if (boardData[layer][file + i] >= 0) {
                    if (isChecked([layer, file], [layer, file + i])) {
                        validMoves.push([layer, file + i]);
                    }
                }
                if (boardData[layer][file + i] < 0 || boardData[layer][file + i] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (file - i >= 0) {
                if (boardData[layer][file - i] >= 0) {
                    if (isChecked([layer, file], [layer, file - i])) {
                        validMoves.push([layer, file - i]);
                    }
                }
                if (boardData[layer][file - i] < 0 || boardData[layer][file - i] > 0) {
                    break;
                }
            }
        }
    } else if (boardData[layer][file] === -9) {
        // Black Queen
        for (let i = 1; i < 8; i++) {
            if (layer - i >= 0 && file - i >= 0) {
                if (boardData[layer - i][file - i] >= 0) {
                    if (isChecked([layer, file], [layer - i, file - i])) {
                        validMoves.push([layer - i, file - i]);
                    }
                }
                if (boardData[layer - i][file - i] < 0 || boardData[layer - i][file - i] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (layer - i >= 0 && file + i <= 7) {
                if (boardData[layer - i][file + i] >= 0) {
                    if (isChecked([layer, file], [layer - i, file + i])) {
                        validMoves.push([layer - i, file + i]);
                    }
                }
                if (boardData[layer - i][file + i] < 0 || boardData[layer - i][file + i] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (layer + i <= 7 && file - i >= 0) {
                if (boardData[layer + i][file - i] >= 0) {
                    if (isChecked([layer, file], [layer + i, file - i])) {
                        validMoves.push([layer + i, file - i]);
                    }
                }
                if (boardData[layer + i][file - i] < 0 || boardData[layer + i][file - i] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (layer + i <= 7 && file + i <= 7) {
                if (boardData[layer + i][file + i] >= 0) {
                    if (isChecked([layer, file], [layer + i, file + i])) {
                        validMoves.push([layer + i, file + i]);
                    }
                }
                if (boardData[layer + i][file + i] < 0 || boardData[layer + i][file + i] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (layer - i >= 0) {
                if (boardData[layer - i][file] >= 0) {
                    if (isChecked([layer, file], [layer - i, file ])) {
                        validMoves.push([layer - i, file ]);
                    }
                }
                if (boardData[layer - i][file] < 0 || boardData[layer - i][file] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (layer + i <= 7) {
                if (boardData[layer + i][file] >= 0) {
                    if (isChecked([layer, file], [layer + i, file ])) {
                        validMoves.push([layer + i, file ]);
                    }
                }
                if (boardData[layer + i][file] < 0 || boardData[layer + i][file] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (file + i <= 7) {
                if (boardData[layer][file + i] >= 0) {
                    if (isChecked([layer, file], [layer, file + i])) {
                        validMoves.push([layer, file + i]);
                    }
                }
                if (boardData[layer][file + i] < 0 || boardData[layer][file + i] > 0) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (file - i >= 0) {
                if (boardData[layer][file - i] >= 0) {
                    if (isChecked([layer, file], [layer, file - i])) {
                        validMoves.push([layer, file - i]);
                    }
                }
                if (boardData[layer][file - i] < 0 || boardData[layer][file - i] > 0) {
                    break;
                }
            }
        }
    } else if (boardData[layer][file] === -10) {
        // Black King
        if (layer - 1 >= 0 && boardData[layer - 1][file] >= 0) {
            if (isChecked([layer, file], [layer - 1, file])) {
                validMoves.push([layer - 1, file]);
            }
        }
        if (layer + 1 <= 7 && boardData[layer + 1][file] >= 0) {
            if (isChecked([layer, file], [layer + 1, file])) {
                validMoves.push([layer + 1, file]);
            }
        }
        if (file - 1 >= 0 && boardData[layer][file - 1] >= 0) {
            if (isChecked([layer, file], [layer, file - 1])) {
                validMoves.push([layer, file - 1]);
            }
        }
        if (file + 1 <= 7 && boardData[layer][file + 1] >= 0) {
            if (isChecked([layer, file], [layer, file + 1])) {
                validMoves.push([layer, file + 1]);
            }
        }
        if (layer - 1 >= 0 && file - 1 >= 0 && boardData[layer - 1][file - 1] >= 0) {
            if (isChecked([layer, file], [layer - 1, file - 1])) {
                validMoves.push([layer - 1, file - 1]);
            }
        }
        if (layer - 1 >= 0 && file + 1 <= 7 && boardData[layer - 1][file + 1] >= 0) {
            if (isChecked([layer, file], [layer - 1, file + 1])) {
                validMoves.push([layer - 1, file + 1]);
            }
        }
        if (layer + 1 <= 7 && file - 1 >= 0 && boardData[layer + 1][file - 1] >= 0) {
            if (isChecked([layer, file], [layer + 1, file - 1])) {
                validMoves.push([layer + 1, file - 1]);
            }
        }
        if (layer + 1 <= 7 && file + 1 <= 7 && boardData[layer + 1][file + 1] >= 0) {
            if (isChecked([layer, file], [layer + 1, file + 1])) {
                validMoves.push([layer + 1, file + 1]);
            }
        }
    }
    return validMoves;
}

function hasAnyLegalMove(color) {
    for (let i = 0; i < 8; i++) {
        for (let x = 0; x < 8; x++) {
            let piece = boardData[i][x];
            let isWhitePiece = piece > 0;
            if (piece !== 0 && ((color === 'white') === isWhitePiece)) {
                if (getValidMoves(i, x).length > 0) {
                    return true;
                }
            }
        }
    }
    return false;
}

function showWinner() {
    let kingValue = null;
    if (turn === 'white') {
        kingValue = 10;
    } else {
        kingValue = -10;
    }
    let kingSpot = null;
    for (let i = 0; i < 8; i++) {
        for (let x = 0; x < 8; x++) {
            if (boardData[i][x] === kingValue) {
                kingSpot = [i, x];
            }
        }
    }

    if (!hasAnyLegalMove(turn)) {
        let inCheck = !isChecked([kingSpot[0], kingSpot[1]], [kingSpot[0], kingSpot[1]]);
        if (inCheck) {
            if (turn === 'white') {
                document.querySelector('.winner-text').innerHTML = 'Black Wins!';
            } else {
                document.querySelector('.winner-text').innerHTML = 'White Wins!';
            }
        } else {
            document.querySelector('.winner-text').innerHTML = 'Draw!';
        }
    }
}

function isChecked(currentSpot, newSpot) {
    // Deep copy the board so this is only a hypothetical move,
    // not a permanent change to the real game state.
    let newBoardData = boardData.map(row => row.slice());

    let movingPiece = newBoardData[currentSpot[0]][currentSpot[1]];
if (currentSpot[0] !== newSpot[0] || currentSpot[1] !== newSpot[1]) {
    newBoardData[newSpot[0]][newSpot[1]] = movingPiece;
    newBoardData[currentSpot[0]][currentSpot[1]] = 0;
}

    let isWhite = movingPiece > 0;

    // Values to look for depend on which color king we're protecting.
    let kingValue = isWhite ? 10 : -10;
    let enemyBishop = isWhite ? -4 : 4;
    let enemyRook = isWhite ? -5 : 5;
    let enemyQueen = isWhite ? -9 : 9;
    let enemyKnight = isWhite ? -3 : 3;
    let enemyKing = isWhite ? -10 : 10;
    let enemyPawn = isWhite ? -1 : 1;

    let kingSpot = null;
    for (let i = 0; i < 8; i++) {
        for (let x = 0; x < 8; x++) {
            if (newBoardData[i][x] === kingValue) {
                kingSpot = [i, x];
            }
        }
    }
    if (!kingSpot) {
        // Shouldn't happen, but avoids a hard crash if it ever does.
        return true;
    }

    let layer = kingSpot[0];
    let file = kingSpot[1];

    // Diagonals: bishop or queen
    for (let i = 1; i < 8; i++) {
        if (layer - i >= 0 && file - i >= 0) {
            let sq = newBoardData[layer - i][file - i];
            if (sq === enemyBishop || sq === enemyQueen) return false;
            if (sq !== 0) break;
        } else break;
    }
    for (let i = 1; i < 8; i++) {
        if (layer - i >= 0 && file + i <= 7) {
            let sq = newBoardData[layer - i][file + i];
            if (sq === enemyBishop || sq === enemyQueen) return false;
            if (sq !== 0) break;
        } else break;
    }
    for (let i = 1; i < 8; i++) {
        if (layer + i <= 7 && file - i >= 0) {
            let sq = newBoardData[layer + i][file - i];
            if (sq === enemyBishop || sq === enemyQueen) return false;
            if (sq !== 0) break;
        } else break;
    }
    for (let i = 1; i < 8; i++) {
        if (layer + i <= 7 && file + i <= 7) {
            let sq = newBoardData[layer + i][file + i];
            if (sq === enemyBishop || sq === enemyQueen) return false;
            if (sq !== 0) break;
        } else break;
    }

    // Orthogonal: rook or queen
    for (let i = 1; i < 8; i++) {
        if (layer - i >= 0) {
            let sq = newBoardData[layer - i][file];
            if (sq === enemyRook || sq === enemyQueen) return false;
            if (sq !== 0) break;
        } else break;
    }
    for (let i = 1; i < 8; i++) {
        if (layer + i <= 7) {
            let sq = newBoardData[layer + i][file];
            if (sq === enemyRook || sq === enemyQueen) return false;
            if (sq !== 0) break;
        } else break;
    }
    for (let i = 1; i < 8; i++) {
        if (file + i <= 7) {
            let sq = newBoardData[layer][file + i];
            if (sq === enemyRook || sq === enemyQueen) return false;
            if (sq !== 0) break;
        } else break;
    }
    for (let i = 1; i < 8; i++) {
        if (file - i >= 0) {
            let sq = newBoardData[layer][file - i];
            if (sq === enemyRook || sq === enemyQueen) return false;
            if (sq !== 0) break;
        } else break;
    }

    // Knights
    const knightOffsets = [
        [-2, -1], [-2, 1], [-1, -2], [-1, 2],
        [1, -2], [1, 2], [2, -1], [2, 1]
    ];
    for (const [dl, df] of knightOffsets) {
        let l = layer + dl;
        let f = file + df;
        if (l >= 0 && l <= 7 && f >= 0 && f <= 7 && newBoardData[l][f] === enemyKnight) {
            return false;
        }
    }

    // Adjacent enemy king (prevents kings from standing next to each other)
    for (let dl = -1; dl <= 1; dl++) {
        for (let df = -1; df <= 1; df++) {
            if (dl === 0 && df === 0) continue;
            let l = layer + dl;
            let f = file + df;
            if (l >= 0 && l <= 7 && f >= 0 && f <= 7 && newBoardData[l][f] === enemyKing) {
                return false;
            }
        }
    }

    // Pawns: white pawns attack "upward" (layer - 1), black pawns attack "downward" (layer + 1)
    if (isWhite) {
        // enemy pawns are black, they attack from layer - 1
        if (layer - 1 >= 0 && file - 1 >= 0 && newBoardData[layer - 1][file - 1] === enemyPawn) return false;
        if (layer - 1 >= 0 && file + 1 <= 7 && newBoardData[layer - 1][file + 1] === enemyPawn) return false;
    } else {
        // enemy pawns are white, they attack from layer + 1
        if (layer + 1 <= 7 && file - 1 >= 0 && newBoardData[layer + 1][file - 1] === enemyPawn) return false;
        if (layer + 1 <= 7 && file + 1 <= 7 && newBoardData[layer + 1][file + 1] === enemyPawn) return false;
    }

    return true;
}

function flipBoardForBlack() {
    boardContainer.style.transform = 'rotate(180deg)';
    const blackPieces = document.querySelectorAll('.clickable-black-piece');
    blackPieces.forEach((piece) => {
        piece.style.transform = 'rotate(180deg)';
    });
    const whitePieces = document.querySelectorAll('.clickable-piece');
    whitePieces.forEach((piece) => {
        piece.style.transform = 'rotate(180deg)';
    });
}

function flipBoardForWhite() {
    boardContainer.style.transform = 'rotate(0deg)';
}

// EVENT LISTENER
boardContainer.addEventListener('click', (e) => {
    const spot = e.target.closest('.board-space');
    if (!spot) return;

    if (turn === 'white') {
        if (spot.classList.contains('clickable-spot') && activePiece) {
            // Handle move/capture - clicking anywhere on the destination square
            boardData[Number(spot.dataset.layer)][Number(spot.dataset.file)] = boardData[activePiece[0]][activePiece[1]];
            boardData[activePiece[0]][activePiece[1]] = 0;
            activePiece = undefined;
            renderBoard();
            boardContainerSpots.forEach((s) => s.classList.remove('clickable-spot'));
            turn = 'black';
            flipBoardForBlack();
            showWinner();
            return;
        }

        const piece = e.target.closest('.clickable-piece');
        if (piece) {
            document.querySelectorAll('.clickable-piece').forEach((p) => {
                p.style.transform = 'scale(1)';
            });
            piece.style.transform = 'scale(1.5)';
            activePiece = [piece.dataset.layer, piece.dataset.file];
            document.querySelectorAll('.valid-move-chip').forEach((chip) => chip.remove());
            boardContainerSpots.forEach((s) => {
                s.classList.remove('clickable-spot');
            });
            showValidMoves(Number(piece.dataset.layer), Number(piece.dataset.file));
        }
    } else if (turn === 'black') {
        if (spot.classList.contains('clickable-spot') && activePiece) {
            boardData[Number(spot.dataset.layer)][Number(spot.dataset.file)] = boardData[activePiece[0]][activePiece[1]];
            boardData[activePiece[0]][activePiece[1]] = 0;
            activePiece = undefined;
            renderBoard();
            boardContainerSpots.forEach((s) => s.classList.remove('clickable-spot'));
            turn = 'white';
            flipBoardForWhite();
            showWinner();
            return;
        }

        const blackPiece = e.target.closest('.clickable-black-piece');
        if (blackPiece) {
            document.querySelectorAll('.clickable-black-piece').forEach((p) => {
                p.style.transform = 'rotate(180deg) scale(1)';
            });
            blackPiece.style.transform = 'rotate(180deg) scale(1.5)';
            activePiece = [blackPiece.dataset.layer, blackPiece.dataset.file];
            document.querySelectorAll('.valid-move-chip').forEach((chip) => chip.remove());
            boardContainerSpots.forEach((s) => {
                s.classList.remove('clickable-spot');
            });
            showValidMoves(Number(blackPiece.dataset.layer), Number(blackPiece.dataset.file));
        }
    }
});

newGameButton.addEventListener('click', () => {
    window.location.reload();
});