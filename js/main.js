// global variables
const width = window.innerWidth * window.devicePixelRatio;
const height = window.innerHeight * window.devicePixelRatio;
const initialWidth = 1680;
const initialHeight = 1048;
const ratioX = width / initialWidth;
const ratioY = height / initialHeight;

var game = new Phaser.Game(width, height, Phaser.CANVAS, 'game');
var players = [], controls = [], goals = [], toitsGoals = [];
var platforms, ball, style, styleFat;

var buttonTwo, buttonFour;
var numberOfPlayers = 2;
var scoreBlue = 0, scoreRed = 0;

// colors
var colorBlue = 0x006ca1;
var colorRed = 0xee2222;
var colorSecondBlue = 0x0099e5;
var colorSecondRed = 0xff4c4c;
var colorGround = 0x34bf49;
var constBG = 0xaef6a6;
/*
	OLD COLOR
const colorBlue = 0x0042ff, colorRed = 0xff0000;
const colorSecondBlue = 0x95b2ff, colorSecondRed = 0xff9595;
const colorGround = 0x019833, constBG = 0xccffff;//*/

game.state.add('BootStrap', BootStrap);
game.state.start('BootStrap');

// on créer 2 fonctions qui permet d'afficher le jeu sur de multiples résolutions
function convertX(x) {
    return x * width / 100;
}

function convertY(y) {
    return y * height / 100;
}

function loadGameTwo() {
    numberOfPlayers = 2;

    game.state.add('Game', Game);
    game.state.start('Game');
}

function loadGameFour() {
    numberOfPlayers = 4;

    game.state.add('Game', Game);
    game.state.start('Game');
}
