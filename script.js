console.log('hey smily :)');

let susbtn = document.getElementById('among')
let susbtnclass = document.querySelector('.among')

susbtn.onclick = susload()

function susload() {
  susbtn.innerHTML = `Loading ...`
  susbtnclass.style.cursor = 'default';
  window.location.replace('/among.html');
}
