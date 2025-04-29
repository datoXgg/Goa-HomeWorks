const WORD_LENGTH = 5;
const MAX_ATTEMPTS = 6;

const VALID_WORDS = [
    "APPLE", "BRAIN", "CLOUD", "DOUGH", "EARTH", 
    "FROST", "GRASS", "HEART", "IGLOO", "JUMBO",
    "KOALA", "LEMON", "MUSIC", "NINJA", "OCEAN",
    "PANDA", "QUEEN", "RIVER", "SUNNY", "TIGER"
];

let targetWord;
let currentAttempt = 0;
let boardState = Array(MAX_ATTEMPTS).fill().map(() => Array(WORD_LENGTH).fill(''));
let currentRow = 0;
let currentTile = 0;
let gameOver = false;

function initGame() {
    targetWord = VALID_WORDS[Math.floor(Math.random() * VALID_WORDS.length)].toUpperCase();
    console.log("Target word:", targetWord); 
    
    const board = document.getElementById('board');
    board.innerHTML = '';
    
    for (let i = 0; i < MAX_ATTEMPTS; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        
        for (let j = 0; j < WORD_LENGTH; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.dataset.state = 'empty';
            row.appendChild(tile);
        }
        
        board.appendChild(row);
    }
    
    currentAttempt = 0;
    currentRow = 0;
    currentTile = 0;
    gameOver = false;
    document.getElementById('message').textContent = '';
    
    document.querySelectorAll('.keyboard button').forEach(button => {
        button.addEventListener('click', () => handleKeyPress(button.dataset.key));
    });
    
    document.addEventListener('keydown', handlePhysicalKeyboard);
}

function handleKeyPress(key) {
    if (gameOver) return;
    
    if (key === "ENTER") {
        checkGuess();
    } else if (key === "DEL") {
        deleteLetter();
    } else if (currentTile < WORD_LENGTH) {
        addLetter(key);
    }
}

function handlePhysicalKeyboard(e) {
    if (gameOver) return;
    
    if (e.key === "Enter") {
        checkGuess();
    } else if (e.key === "Backspace") {
        deleteLetter();
    } else if (/^[a-zA-Z]$/.test(e.key)) {
        addLetter(e.key.toUpperCase());
    }
}

function addLetter(letter) {
    if (currentTile >= WORD_LENGTH) return;
    
    const tile = document.querySelector(`.row:nth-child(${currentRow + 1}) .tile:nth-child(${currentTile + 1})`);
    tile.textContent = letter;
    tile.dataset.state = 'active';
    boardState[currentRow][currentTile] = letter;
    currentTile++;
}

function deleteLetter() {
    if (currentTile <= 0) return;
    
    currentTile--;
    const tile = document.querySelector(`.row:nth-child(${currentRow + 1}) .tile:nth-child(${currentTile + 1})`);
    tile.textContent = '';
    tile.dataset.state = 'empty';
    boardState[currentRow][currentTile] = '';
}

function checkGuess() {
    if (currentTile !== WORD_LENGTH) {
        showMessage("Not enough letters", "error");
        return;
    }
    
    const guess = boardState[currentRow].join('');
    if (!VALID_WORDS.includes(guess.toLowerCase())) {
        showMessage("Not in word list", "error");
        return;
    }
    
    const targetLetters = targetWord.split('');
    const guessLetters = guess.split('');
    const result = Array(WORD_LENGTH).fill('absent');
    
    for (let i = 0; i < WORD_LENGTH; i++) {
        if (guessLetters[i] === targetLetters[i]) {
            result[i] = 'correct';
            targetLetters[i] = null;
        }
    }
    
    for (let i = 0; i < WORD_LENGTH; i++) {
        if (result[i] !== 'correct') {
            const index = targetLetters.indexOf(guessLetters[i]);
            if (index !== -1) {
                result[i] = 'present';
                targetLetters[index] = null; 
            }
        }
    }
    
    for (let i = 0; i < WORD_LENGTH; i++) {
        const tile = document.querySelector(`.row:nth-child(${currentRow + 1}) .tile:nth-child(${i + 1})`);
        tile.dataset.state = result[i];
    }
    
    updateKeyboard(guess, result);

    if (guess === targetWord) {
        showMessage(`Congratulations! You won in ${currentRow + 1} attempts!`, "success");
        gameOver = true;
        return;
    }
    
    currentRow++;
    currentTile = 0;
    
    if (currentRow === MAX_ATTEMPTS) {
        showMessage(`Game over! The word was ${targetWord}`, "error");
        gameOver = true;
    }
}

function updateKeyboard(guess, result) {
    for (let i = 0; i < guess.length; i++) {
        const key = document.querySelector(`.keyboard button[data-key="${guess[i]}"]`);
        if (!key) continue;
        
        const currentState = key.dataset.state;
        
        if (currentState === 'correct') continue;
        if (currentState === 'present' && result[i] !== 'correct') continue;
        
        key.dataset.state = result[i];
    }
}

function showMessage(text, type) {
    const message = document.getElementById('message');
    message.textContent = text;
    message.className = `message ${type}`;
    
    setTimeout(() => {
        message.textContent = '';
        message.className = 'message';
    }, 2000);
}

window.addEventListener('load', initGame);