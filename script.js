// logs easter egg in console
console.info('%chey smily :)', 'color: #20c20e');

// consts for grabbing element ids / classnames
const susbtn = document.getElementById('among');
const alienbtn = document.getElementById('alien');
const dadbtn = document.getElementById('dadnme');
const meatbtn = document.getElementById('meatboy');

// functions
function susload() {
  susbtn.innerHTML = `Loading ...`
  susbtn.style.cursor = 'not-allowed'
  window.location.replace('/games/among.html');
}

// click listeners for btns, runs their respective functions
susbtn.addEventListener('click', susload);
alienbtn.addEventListener('click', function() { window.location.href = '/games/alienhominid.html' });
dadbtn.addEventListener('click', function() { window.location.href = '/games/dadnme.html' });
meatbtn.addEventListener('click', function() { window.location.href = '/games/meatboy.html' });
