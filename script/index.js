console.clear()

let // ============================>
ThemeBtn = document.getElementsByClassName('btn-dark-light')[0],
DarkTheme = document.getElementsByClassName('DarkTheme')[0],
LightTheme = document.getElementsByClassName('LightTheme')[0];
root = document.documentElement;
// ===============================>



function Themes () {
    if (theme) {
        // localStorage.setItme('theme', true);
        root.style.setProperty('--bg', '#121316');
        root.style.setProperty('--c-1', '#ffffff');
        root.style.setProperty('--c-2', '#4d4d4d');
        root.style.setProperty('--c-3', '#5e00aa');
        ThemeBtn.style.backgroundColor = '#fff';
        ThemeBtn.style.color = '#000';
        DarkTheme.style.display = 'none';
        LightTheme.style.display = 'block';
        console.log('DarkTheme')
    }
    if (theme == false) {
        // localStorage.setItme('theme', false);
        root.style.setProperty('--bg', '#ffffff');
        root.style.setProperty('--c-1', '#707070');
        root.style.setProperty('--c-2', '#7CB440');
        root.style.setProperty('--c-3', '#00AFC5');
        ThemeBtn.style.backgroundColor = '#161616';
        ThemeBtn.style.color = '#fff';
        DarkTheme.style.display = 'block';
        LightTheme.style.display = 'none';
        console.log('LightTheme')
    }
}

let theme = true;

ThemeBtn.onclick = () => {
    if (theme) {
        // localStorage.setItme('theme', true);
        root.style.setProperty('--bg', '#121316');
        root.style.setProperty('--c-1', '#ffffff');
        root.style.setProperty('--c-2', '#4d4d4d');
        root.style.setProperty('--c-3', '#5e00aa');
        ThemeBtn.style.backgroundColor = '#fff';
        ThemeBtn.style.color = '#000';
        DarkTheme.style.display = 'none';
        LightTheme.style.display = 'block';
        console.log('DarkTheme')
        theme = false;
    }
    if (theme == false) {
        // localStorage.setItme('theme', false);
        root.style.setProperty('--bg', '#ffffff');
        root.style.setProperty('--c-1', '#707070');
        root.style.setProperty('--c-2', '#7CB440');
        root.style.setProperty('--c-3', '#00AFC5');
        ThemeBtn.style.backgroundColor = '#161616';
        ThemeBtn.style.color = '#fff';
        DarkTheme.style.display = 'block';
        LightTheme.style.display = 'none';
        console.log('LightTheme')
        theme = true;
    }
}

Themes();

console.log(`[X=${window.innerWidth}], [Y=${window.innerHeight}]`)


