//lorem code
const sendBtn = document.getElementById('send')
const inputVal = document.getElementById('playerName')

sendBtn.onclick = function(){sendClick('Haha')}

function sendClick(input){
    inputVal.value = input
}