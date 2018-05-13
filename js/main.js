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

game.state.add('BootStrap', BootStrap);
game.state.start('BootStrap');

// on créer 2 fonctions qui permet d'afficher le jeu sur de multiples résolutions
function convertX(x) {
    return x * width / 100;
}

function convertY(y) {
    return y * height / 100;
}
