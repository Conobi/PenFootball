// global variables
const initialWidth = 954;
const initialHeight = 541;
const screen = [(window.innerWidth * window.devicePixelRatio) - 45, (window.innerHeight * window.devicePixelRatio) - 146 - 45];
const rect = [initialWidth, initialHeight];
// const width = initialWidth;
// const height = initialHeight;
// const width = window.innerWidth * window.devicePixelRatio;
// const height = window.innerHeight * window.devicePixelRatio;

var screenAspect = screen[0] / screen[1];
var rectAspect = rect[0] / rect[1];

var scaleFactor;
if (screenAspect > rectAspect)
    scaleFactor = screen[1] / rect[1];
else
    scaleFactor = screen[0] / rect[0];

const width = initialWidth * scaleFactor;
const height = initialHeight * scaleFactor;

var game = new Phaser.Game(width, height, Phaser.CANVAS, 'game-area');
var players = [], controls = [], goals = [], toitsGoals = [];
var platforms, ball, style, styleFat;

var buttonTwo, buttonFour;
var numberOfPlayers = 2;
var scoreBlue = 0, scoreRed = 0;

// colors
const colorBlue = 0x006ca1, colorRed = 0xee2222;
const colorSecondBlue = 0x0099e5, colorSecondRed = 0xff4c4c;
const colorGround = 0x34bf49, constBG = 0xaef6a6;

console.log("Window resolution: " + width + " x " + height);

game.state.add('BootStrap', BootStrap);
game.state.start('BootStrap');

/**
 *  on créer 2 fonctions qui permet d'afficher le jeu sur de multiples résolutions
 * 
 * @param {*} x the value in percent
 * @returns a relative position 
 */
function GetRelativePositionX(x) 
{
    return x * width / 100;
}

function GetRelativePositionY(y) 
{
    return y * height / 100;
}

function loadGameTwo() 
{
    numberOfPlayers = 2;

    game.state.add('Game', Game);
    game.state.start('Game');
}

function loadGameFour() 
{
    numberOfPlayers = 4;

    game.state.add('Game', Game);
    game.state.start('Game');
}