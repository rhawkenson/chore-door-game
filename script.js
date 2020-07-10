let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start')

const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;


let randomChoreDoorGenerator = () => {
  choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1){
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath;

  }
};



door1.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage1)){
    doorImage1.src=openDoor1;
    playDoor(doorImage1);
  }
  }

door2.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage2)){
      doorImage2.src = openDoor2;
      playDoor(doorImage2);
  }
  }

door3.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage3)){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
  }

startButton.onclick = () => {
  if (currentlyPlaying === false){
    startRound();
  }
};

const startRound = () =>{
    door1.src = closedDoorPath;
    door2.src = closedDoorPath;
    door3.src = closedDoorPath;
    numClosedDoors = 3;
    currentlyPlaying = true;
    startButton.innerHTML = 'Good luck!';
    randomChoreDoorGenerator();
}




let gameOver = (status) => {
  if (status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?';
  } currentlyPlaying = false;
}

startRound();

let playDoor = (door) => {
    numClosedDoors--;
    if(numClosedDoors === 0){
      gameOver('win');
    } else if (isBot(door)){
      gameOver('lose');
    }
  }

let isBot = (door) => {
  if (door.src === botDoorPath){
    return true;
  } else {
    return false;
  }
}


let isClicked = (door) => {
  if (door.src === closedDoorPath){
    return false;
  } else{
    return true;
  }
}





