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
const colorBlue = 0x546de5, colorRed = 0xc44569;
const colorSecondBlue = 0x778beb, colorSecondRed = 0xcf6a87;
const colorGround = 0xfd79a8, constBG = 0x81ecec;//*/
/*const colorBlue = 0x3D85FF, colorRed = 0xFF4537;
const colorGround = 0xC2E827, constBG = 0x81B8E5;//*/

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