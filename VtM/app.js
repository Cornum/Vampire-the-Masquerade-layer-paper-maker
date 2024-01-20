//lorem code
const sendBtn = document.getElementById('send')
const inputVal = document.getElementById('playerName')


sendBtn.onclick = function(){toogleTheme()}

function toogleTheme(){
    const currentTheme = document.getElementById('themeStyles').getAttribute('href')
    const themeStyle = (currentTheme === 'styles.css') ? 'darkAgesStyles.css' : 'styles.css'

    document.getElementById('themeStyles').setAttribute('href', themeStyle)
}
// Write characteristics, skills... points logic
