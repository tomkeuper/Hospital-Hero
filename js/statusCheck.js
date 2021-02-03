if( localStorage.getItem('Monkey') != 'true'){
    
    localStorage.setItem('Monkey', 'false');
}



console.log(localStorage);

let monkey = localStorage.getItem('Monkey');
const monkeyIMG = document.getElementById('js--monkeyIMG');
const monkeyButton = document.getElementById('js--monkeyList');
console.log(monkey);

if (localStorage.getItem('Monkey') === 'false'){
    monkeyIMG.style.filter = 'brightness(0%)';
    console.log('hoi');
}

setInterval( function(){
    
if (localStorage.getItem('Monkey') === 'true') {
    monkeyIMG.style.filter = 'brightness(100%)';
    monkeyButton.onclick = function (){
        window.location.href = 'monkeylist.html';
    }
    
    console.log('Dit Werkt')
}

}, 2000);

