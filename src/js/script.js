let start = document.querySelector('#startButton')
let body = document.querySelector('body')
let keys
let character

start.addEventListener('click' , function() {
    body.classList.add('firstLvlStart')
    body.classList.remove('firstLvlNotStart')
    body.innerHTML ="<div id='mainCharacter'></div>"
    body.innerHTML +="<div class='coat' id='coat1'></div>"
    body.innerHTML +="<div class='coat' id='coat2'></div>"
    body.innerHTML +="<div class='coat' id='coat3'></div>"
    character = document.querySelector("#mainCharacter")
})

document.addEventListener('keypress', function(event){
    keys = event.key
    if(keys == 'w'  || keys=='W'){
        character.style.top = (parseInt(character.style.top) - 3) + 'px'
        console.log(character.style.top);
        

    }
})