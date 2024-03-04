// JavaScript code for Tic Tac Toe game with difficulty levels

const board = document.getElementById('board');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restartBtn');
const difficultySelect = document.getElementById('difficulty');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let botDifficulty = 'easy'; // Default difficulty

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to check if the current player has won
const checkWin = (board, player) => {
    for (let combo of winningCombos) {
        if (board[combo[0]] === player && board[combo[1]] === player && board[combo[2]] === player) {
            return true;
        }
    }
    return false;
};

// Function to check if the game is a draw
const checkDraw = (board) => {
    return !board.includes('');
};

// Function to handle the player's move
const handlePlayerMove = (index) => {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        renderBoard();
        if (checkWin(gameBoard, currentPlayer)) {
            message.textContent = `${currentPlayer} wins!`;
            gameActive = false;
        } else if (checkDraw(gameBoard)) {
            message.textContent = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            message.textContent = `${currentPlayer}'s turn`;
            if (currentPlayer === 'O') {
                setTimeout(() => handleBotMove(), 500); // Delay for bot move
            }
        }
    }
};

// Function to handle the bot's move
const handleBotMove = () => {
    let index;
    if (botDifficulty === 'easy') {
        index = getEasyBotMove();
    } else if (botDifficulty === 'medium') {
        index = getMediumBotMove();
    } else if (botDifficulty === 'hard') {
        index = getHardBotMove(gameBoard, 'O');
    }
    handlePlayerMove(index);
};

// Easy bot: Random move
const getEasyBotMove = () => {
    let emptyCells = [];
    gameBoard.forEach((cell, index) => {
        if (cell === '') {
            emptyCells.push(index);
        }
    });
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
};

// Medium bot: Random move (same as easy bot)
const getMediumBotMove = () => {
    return getEasyBotMove();
};

// Hard bot: Minimax algorithm
const getHardBotMove = (board, player) => {
    let bestScore = -Infinity;
    let bestMove;
    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            board[i] = player;
            let score = minimax(board, 0, false);
            board[i] = '';
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }
    return bestMove;
};

const minimax = (board, depth, isMaximizing) => {
    if (checkWin(board, 'X')) {
        return -10 + depth;
    } else if (checkWin(board, 'O')) {
        return 10 - depth;
    } else if (checkDraw(board)) {
        return 0;
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = 'O';
                let score = minimax(board, depth + 1, false);
                board[i] = '';
                bestScore = Math.max(bestScore, score);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = 'X';
                let score = minimax(board, depth + 1, true);
                board[i] = '';
                bestScore = Math.min(bestScore, score);
            }
        }
        return bestScore;
    }
};

// Function to render the game board
const renderBoard = () => {
    board.innerHTML = '';
    gameBoard.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.textContent = cell;
        cellElement.addEventListener('click', () => handlePlayerMove(index));
        board.appendChild(cellElement);
    });
};

// Function to restart the game
const restartGame = () => {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    message.textContent = `${currentPlayer}'s turn`;
    renderBoard();
};

// Event listener for restart button
restartBtn.addEventListener('click', restartGame);

// Event listener for difficulty selection
difficultySelect.addEventListener('change', (e) => {
    botDifficulty = e.target.value;
    restartGame(); // Restart the game when difficulty changes
});

// Initialize the game
renderBoard();
