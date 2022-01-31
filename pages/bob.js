// Functions

const bob = document.querySelector('.face')
let margin = 100

function moveBob() {
    bob.style.marginLeft = `${margin}px`
    margin = margin + 50
}

bob.addEventListener('click', moveBob)

// Had to make it so that when Bob is clicked, it moves to the right.
// Added function that modifies CSS to add 50 to left-margin on click.

// Used this as a guide:
// document.getElementById('someID').style.backgroundColor = "blue";