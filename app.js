//lorem code
const sendBtn = document.getElementById('send')
const characteristicsPhysicalMax = document.getElementById('physical')
const releaseBtn = document.getElementById('release')

releaseBtn.onclick = function(){checkMax(characteristicsPhysicalMax)}
sendBtn.onclick = function(){toggleTheme()}

function toggleTheme(){
    const currentTheme = document.getElementById('themeStyles').getAttribute('href')
    const themeStyle = (currentTheme === 'styles.css') ? 'darkAgesStyles.css' : 'styles.css'

    document.getElementById('themeStyles').setAttribute('href', themeStyle)
}
function checkMax(Max){
    switch(Number(Max.value)){
        case 7: {
            Max.setAttribute('style="background: #fefefe"')  //Find how to do it
            break
        }
        case 5: {
            
        }
        case 3: {
            
        }
        default: {
            toggleTheme()
            break
        }
    }
}
// Write characteristics, skills... points logic

