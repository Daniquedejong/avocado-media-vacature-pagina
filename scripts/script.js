/*....button....*/
let solliciteer = document.querySelector('a:nth-of-type(2)')

solliciteer.addEventListener('click', zoominHandler)
solliciteer.addEventListener('animationend', zoominHandler)

function zoominHandler() {
solliciteer.classList.toggle('zoomin')
}