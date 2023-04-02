// logs easter egg in console
console.info('%chey smily :)', 'color: #20c20e');

// consts for grabbing element ids / classnames
const susbtn = document.getElementById('among');
const alienbtn = document.getElementById('alien');
const dadbtn = document.getElementById('dadnme');

// functions
function susload() {
  susbtn.innerHTML = `Loading ...`
  susbtn.style.cursor = 'not-allowed'
  window.location.replace('/games/among.html');
}

function alienload() {
  alienbtn.innerHTML = `Loading ...`
  alienbtn.style.cursor = 'not-allowed'
  window.location.replace('/games/alienhominid.html');
}

function dadload() {
  dadbtn.innerHTML = `Loading ...`
  dadbtn.style.cursor = 'not-allowed'
  window.location.replace('/games/dadnme.html');
}

// click listeners for btns, runs their respective functions
susbtn.addEventListener('click', susload);
alienbtn.addEventListener('click', alienload);
dadbtn.addEventListener('click', dadload);
