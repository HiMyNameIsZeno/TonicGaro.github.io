console.log('hey smily :)');

document.getElementById('among').onclick = function() {
  document.getElementById('among').innerHTML = `Loading ...`
  document.querySelector('.among').style.cursor = 'default';
  window.location.replace('/among.html');
}
