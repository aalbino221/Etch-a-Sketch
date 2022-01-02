const body = document.body
let container = document.querySelector(".container")
let x = 16
const reset = document.querySelector(".reset")
const size = document.querySelector(".size")
const rainbow = document.querySelector(".rainbow")

reset.addEventListener('click', (e)=> {for (let i = 0 ; i < num(x); i++) {const squares = document.querySelectorAll (".square") ;squares[i].style.backgroundColor = '#fefefe'}})

size.addEventListener('click', (e)=> {remover() ; userSize = prompt ("Choose a size up to 100") ; x = Number(userSize);
    if (userSize > 100 || userSize <= 0) {alert ("Choose between 1 and 100") ; x = 16 ; novo(); sensor()}
    else {novo(); sensor()}})

rainbow.addEventListener('click', (e)=> {rainbow2()})

function rainbow2() {
    function random() {return Number((Math.floor(Math.random()*256)).toFixed(0))}
    for (let i = 0 ; i < num(x); i++) {const squares = document.querySelectorAll (".square") ;
    squares[i].addEventListener("mouseover", (e) => {squares[i].style.backgroundColor = `rgb(${random()},${random()},${random()})`})}}

function grid(x) {let TA = 490000 ; let TS = x*x ; let func = Math.sqrt((TA/TS)) ; 
    let num = Math.floor((func*100))/100 ; return (num) + "px"}

function num (x) {return x*x}

function sensor() {for (let i = 0 ; i <num(x); i++) {const squares = document.querySelectorAll (".square") ;
    squares[i].addEventListener("mouseover", (e) => {
    squares[i].style.backgroundColor = '#333';})}}

function remover() {
    container.remove()
    let container2 = document.createElement("div")
    container2.classList.add ("container")
    body.append(container2)
    container = document.querySelector(".container")}

function novo(){ for (let i = 0; i < num(x); i++) {const grids = document.createElement("div")
    grids.classList.add ("square")
    grids.style.width = grid(x)
    grids.style.height = grid(x)
    container.append(grids)}}


novo()

sensor()