/*----- constants -----*/
// object of colors
const colors = {
  null: 'white',
  1: 'purple',
  2: 'orange',
  3: 'red',
  4: 'blue',
};

// audio variables 
const audio1 = new Audio('./audio/audio1.wav');
const audio2 = new Audio('./audio/audio2.wav');
const audio3 = new Audio('./audio/aduio3.wav');
const audio4 = new Audio('./audio/audio4.wav');

// audio and color pairs for sequence
//const audioColorSeq;


/*----- state variables -----*/
let gameBoard;
let gameSequence;
let playerSequence;
let statusOfGame;


/*----- cached elements  -----*/
// game board
const circles = document.querySelectorAll('div');

// buttons 
const startGameClick = document.getElementById('startBtn');
const newGameClick = document.getElementById('newGameBtn');


/*----- event listeners -----*/
// click for start game button, new game button, player clicks on els



/*----- functions -----*/
initialize();

function initialize() {
  gameSequence = [];
  playerSequence = [];
  gameBoard = [ null, null, null, null];
  statusOfGame = null;

  render();
}

function render() {


}

