// Functions

const bob = document.querySelector('.face')
let margin = 100

function moveBob() {
    bob.style.marginLeft = `${margin}px`
    margin = margin + 50
}

bob.addEventListener('click', moveBob)