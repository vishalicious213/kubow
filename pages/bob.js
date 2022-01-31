// Functions

const bob = document.querySelector('.face')
const right = document.querySelector('.right')
const left = document.querySelector('.left')
let margin = 100

function moveBob() {
    margin += 50
    bob.style.marginLeft = `${margin}px`
    // margin = margin + 50
}

function moveBack() {
    margin -= 50
    bob.style.marginLeft = `${margin}px`
}

right.addEventListener('click', moveBob)
left.addEventListener('click', moveBack)

// Had to make it so that when Bob is clicked, it moves to the right.
// Added function that modifies CSS to add 50 to left-margin on click.

// Used this as a guide:
// document.getElementById('someID').style.backgroundColor = "blue";

// Modified project so clicking left/right eye moves Bob in that direction.