const socialIcons = document.getElementsByClassName('social-icons');
const everything = document.getElementById('bruh');
const overlay = document.getElementById('overlay');
const buttons = document.getElementsByClassName('btn-port');
const h1 = document.getElementsByTagName('h1');
const h2 = document.getElementsByTagName('h2');
const h3 = document.getElementsByTagName('h3');
const h4 = document.getElementsByTagName('h4');
const h5 = document.getElementsByTagName('h5');
const h6 = document.getElementsByTagName('h6');
const figure = document.getElementsByTagName('figure');

const lol = document.getElementById(':)');

function createTheme(
    name,
    textColor,
    linkColor,
    linkHoverColor,
    selectionColor,
    backgroundColor,
    buttonColor,
    buttonTextColor,
    buttonBorderColor,
    buttonColorHover,
    buttonTextColorHover,
    buttonBorderColorHover) { 
    return {
        name,
        textColor,
        linkColor,
        linkHoverColor,
        selectionColor,
        backgroundColor,
        buttonColor,
        buttonTextColor,
        buttonBorderColor,
        buttonColorHover,
        buttonTextColorHover,
        buttonBorderColorHover
    };
}

const themes = [
    createTheme(
        'default',
        '#fff', 
        '#ffb0f7', 
        '#ff7fe7',
        '#ebcfe0', 
        'rgba(247, 218, 240, 0.925)',
        'rgba(149, 129, 150, 0.5)',
        '#fff',
        'rgba(255, 255, 255, 0.5)',
        'rgba(105, 90, 105, 0.5)',
        '#ffffff',
        '#ffffff'
    ),
    createTheme(
        'shit',
        '#fff',
        '#0f0',
        '#000',
        '#0f0',
        '#000'
    )
]
let currentTheme = 0;
function applyTheme(theme) {
    alert('changing theme to: ' + theme.name);
    document.body.style.color = theme.textColor;
    
}
function updateTheme() {
    currentTheme++;
    currentTheme %= themes.length;
    applyTheme(themes[currentTheme]);
}
lol.onclick = updateTheme;
//overLay.style.background = '#000';