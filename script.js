// logs easter egg in console
console.info('%chey smily :)', 'color: #20c20e');

// consts for grabbing element ids / classnames
const susbtn = document.getElementById('among');
const susbtnclass = document.querySelector('.among');

// functions
function susload() {
  susbtn.innerHTML = `Loading ...`
  susbtnclass.style.cursor = 'not-allowed';
  window.location.replace('/among.html');
}

// click listeners for btns, runs their respective functions
susbtn.addEventListener('click', susload);
