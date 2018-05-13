// global variables
const width = window.innerWidth * window.devicePixelRatio;
const height = window.innerHeight * window.devicePixelRatio;
const initialWidth = 1680;
const initialHeight = 1048;
const ratioX = width / initialWidth;
const ratioY = height / initialHeight;

var game = new Phaser.Game(width, height, Phaser.CANVAS, 'game');
var players = [], controls = [], goals = [];
var platforms, ball;

var scoreBlue = 0, scoreRed = 0;

// colors
const colorBlue = 0x182D3B, colorRed = 0xE85F3E;
const colorGround = 0xFFDE51, constBG = 0xB6E5B8;//*/
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
