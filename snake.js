import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5; // how many times snake moves per second
const snakeBody = [{ x: 11, y: 11}];
let newSegments = 0;

export function update() {
    addSegments();
    const inputDirection = getInputDirection();
    console.log('update snake');
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    console.log('draw snake');
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    });
}

export function expandSnake(amount) {
    newSegments += amount;
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false;
        return equalPositions(segment, position);
    });
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true });
}

function equalPositions(pos1, pos2) {
    return pos1.x == pos2.x && pos1.y == pos2.y;
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({...snakeBody[snakeBody.length - 1]});
    }
    newSegments = 0;
}
/*
button.onclick = function() {
    alert('Click!');
};


let isBenjamin = confirm("Press OK if you are Benjamin Wu");
if(isBenjamin)
    alert("Welcome!!!!!!!!!! I love you");

function showName() {
    let name = "Joann";
    alert(`Hello, ${name}!`); 
}

// load image
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let imageName = new Image();
imageName.src = "path/img.png";
let audioName = new Audio();
audioName.src = "path/audio.png";

//draw image
audioName.play();
// imageName, X, Y, width, height
context.drawImage(imageName, 40, 50, 25, 25);
context.fillStyle = "red";
context.fillRect(100, 300, 30, 30);

const BOX = 32;
context.fillStyle = "black";
context.fillRect(5*BOX, 6*BOX, 2*BOX, 3*BOX);

let snake = [];
snake[0] = { x: 9*BOX, y: 10*BOX };
snake[1] = { x: 8*BOX, y: 10*BOX };
let food = {
    x: Math.floor(Math.random() * 17 + 1) * BOX,
    y: Math.floor(Math.random() * 15 + 3) * BOX };
function draw() {
    context.drawImage(ground, 0, 0);
    for(let i = 0; i < snake.length; i++) {
        context.fillStyle = (i == 0) ? "green" : "white";
        context.fillRect(snake[i].x, snake[i].y, BOX, BOX);
        context.strokeStyle = "red";
        context.strokeRect(snake[i].x, snake[i].y, BOX, BOX);
    }
    context.drawImage(foodImg, food.x, food.y);
    context.fillStyle = "white";
    context.font = "45px Changa One";
    context.fillText(score, 2*BOX, 1.6*BOX);
}
let game = setInterval(draw, 100);
*/


// The call to typeof x returns a string with the type name

/* 
- click, then move to start game
- spawn food
- key presses correspond to snake
*/

/*

elem.onclick = function(event) {
    // show event type, element and coordinates of the click
    alert(event.type + " at " + event.currentTarget);
    alert("Coordinates: " + event.clientX + ":" + event.clientY);
};

*/