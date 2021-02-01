console.log('test');

const textbox = document.getElementById('js--textbox');
let BASE_URL = 'https://nl.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=apen';

apiCall = function(){
    
    fetch(BASE_URL)
    .then(response => response.json())
    .then(data => textbox.innerHTML = data.query.pages['6171'].extract);
}

apiCall();