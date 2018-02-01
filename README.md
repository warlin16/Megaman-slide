# README

# [Live](https://warlin16.github.io/Return-Of-Bass/)


Return of Bass is a platform based jumping game

Functionality and MVP With Return of Bass players will be able to

Start and reset the game
jump over platforms with up or space
Music to accompany the game

Players will be tasked with getting to the top platform of the stage collecting orbs to make platforms appear and disappear, players can lose by losing their three lives by falling through the holes. Players can win by reaching the very top of the level

![](https://media.giphy.com/media/xUOwGjt5Guldtpp0l2/giphy.gif)

The game has a custom built physics engine to replicate the effects of gravity and friction where the players x position and velocity on the x axis is multiplied by a fixed number as well as for gravity, gravity is added to the players y position to decrement their velocity on the Y axis.

```javascript
    this.velX *= this.slide;
    this.velY += this.gravity;
    if (this.grounded) this.velY = 0;

    this.x += this.velX;
    this.y += this.velY;
```

Technologies This project will implement the following technologies

Vanilla JS
Canvas HTML
Implementation Timeline Day 1: Setup all necessary Node modules, including getting webpack up and running installed. Write a basic entry file and the bare bones of all 3 scripts outlined above. Learn the basics of canvas Goals for the day:

Learn enough canvas to render an object to the screen Day 2: Dedicate this day to learning enough canvas to be able to render sprites to the screen Goals for the day:

Render a square where the game will take place Day 3: Create the game logic. Incorporate the game logic into the Board.js rendering. Goals for the day:

Export an player object with correct type and handling logic Have a functional stage on the HTML canvas frontend that succesfully handles user input to navigate the player in the screen Day 4: Install the logic for the enemy objects for the player to avoid in the game. Style the frontend, making it polished and professional. Goals for the day:

Create controls for game speed, stop, start, reset, and shape type Have a styled canvas, nice looking controls and title
