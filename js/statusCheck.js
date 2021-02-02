localStorage.setItem('Penguin', false);
localStorage.setItem('Monkey', false);

console.log(localStorage);

let monkey = localStorage.getItem('Monkey');
const monkeyIMG = document.getElementById('js--monkeyIMG');
const monkeyButton = document.getElementById('js--monkeyList');
console.log(monkey);

if (monkey === 'false'){
    monkeyIMG.style.filter = 'brightness(0%)';
    console.log('hoi');
} else {
    monkeyIMG.style.filter = 'brightness(100%)';
    monkeyButton.location.href = 'monkeylist.html';
}
