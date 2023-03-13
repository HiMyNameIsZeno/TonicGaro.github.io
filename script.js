window.onload = function() {

  console.log('hey smily :)');

  const susbtn = document.getElementById('among');
  const susbtnclass = document.querySelector('.among');

  function susload() {
    susbtn.innerHTML = `Loading ...`
    susbtnclass.style.cursor = 'default';
    window.location.replace('/among.html');
  }

  susbtn.addEventListener('click', susload);
}
