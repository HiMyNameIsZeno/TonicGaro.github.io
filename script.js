console.log('hey smily :)');

function susload() {
  document.getElementById('among').innerHTML = `Loading ...`
  document.querySelector('.among').style.cursor = 'default';
  window.location.replace('/among.html');
}
