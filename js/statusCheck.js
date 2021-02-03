if( localStorage.getItem('Monkey') != 'true'){
        localStorage.setItem('Monkey', 'false');
}

if( localStorage.getItem('Penguin') != 'true'){
    localStorage.setItem('Penguin', 'false');
}

if( localStorage.getItem('Giraffe') != 'true'){
    localStorage.setItem('Giraffe', 'false');
}

if( localStorage.getItem('Panda') != 'true'){
    localStorage.setItem('Panda', 'false');
}

if( localStorage.getItem('Ostrich') != 'true'){
    localStorage.setItem('Ostrich', 'false');
}

if( localStorage.getItem('Lion') != 'true'){
    localStorage.setItem('Lion', 'false');
}

const monkeyIMG = document.getElementById('js--monkeyIMG');
const monkeyButton = document.getElementById('js--monkeyList');
const penguinIMG = document.getElementById('js--penguinIMG');
const giraffeIMG = document.getElementById('js--giraffeIMG');
const pandaIMG = document.getElementById('js--pandaIMG');
const ostrichIMG = document.getElementById('js--ostrichIMG');
const lionIMG = document.getElementById('js--lionIMG');

if (localStorage.getItem('Monkey') === 'false'){
    monkeyIMG.style.filter = 'brightness(0%)';
}

if (localStorage.getItem('Penguin') === 'false'){
    penguinIMG.style.filter = 'brightness(0%)';
}

if (localStorage.getItem('Giraffe') === 'false'){
    giraffeIMG.style.filter = 'brightness(0%)';
}

if (localStorage.getItem('Panda') === 'false'){
    pandaIMG.style.filter = 'brightness(0%)';
}

if (localStorage.getItem('Ostrich') === 'false'){
    ostrichIMG.style.filter = 'brightness(0%)';
}

if (localStorage.getItem('Lion') === 'false'){
    lionIMG.style.filter = 'brightness(0%)';
}

setInterval( function(){
    
if (localStorage.getItem('Monkey') === 'true') {
    monkeyIMG.style.filter = 'brightness(100%)';
    monkeyButton.onclick = function (){
        window.location.href = 'monkeylist.html';
    }
}

}, 2000);

