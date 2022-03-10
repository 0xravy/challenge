let // ============================>
ThemeBtn = document.getElementsByClassName('btn-dark-light')[0],
DarkTheme = document.getElementsByClassName('DarkTheme')[0],
LightTheme = document.getElementsByClassName('LightTheme')[0];
root = document.documentElement;
// ===============================>


var theme = true;
function Themes () {
    if (theme) {
        localStorage.setItem('themeDark', true);
        root.style.setProperty('--bg', '#121316');
        root.style.setProperty('--c-1', '#ffffff');
        root.style.setProperty('--c-2', '#4d4d4d');
        root.style.setProperty('--c-3', '#5e00aa');
        ThemeBtn.style.backgroundColor = '#fff';
        ThemeBtn.style.color = '#000';
        DarkTheme.style.display = 'none';
        LightTheme.style.display = 'block';
        console.log('DarkTheme');
        theme = false;
    } else if (theme == false) {
        localStorage.setItem('themeDark', false);
        root.style.setProperty('--bg', '#ffffff');
        root.style.setProperty('--c-1', '#707070');
        root.style.setProperty('--c-2', '#7CB440');
        root.style.setProperty('--c-3', '#00AFC5');
        ThemeBtn.style.backgroundColor = '#161616';
        ThemeBtn.style.color = '#fff';
        DarkTheme.style.display = 'block';
        LightTheme.style.display = 'none';
        console.log('LightTheme');
        theme = true;
    }
    
}

const themeDark = localStorage.getItem('themeDark');
if(themeDark == 'true'){
    theme = true;
    Themes();
} else if(themeDark == 'false') {
    theme = false;
    Themes();
}

ThemeBtn.onclick = Themes;



console.log(`[X=${window.innerWidth}], [Y=${window.innerHeight}]`) ;
