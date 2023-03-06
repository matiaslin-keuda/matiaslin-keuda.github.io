document.addEventListener("DOMContentLoaded", onkokirjautunut);

function onkokirjautunut() {
  let nimi = localStorage.getItem("nimi");
  if (nimi !== null && nimi !== '') {
    document.getElementById('tervetuloa_teksti').textContent = "Tervetuloa " + nimi;
  } else {
    document.getElementById('tervetuloa_teksti').textContent = "Tervetuloa tuntematon";
  }
}

function kirjaudu() {
  let nimi = document.getElementById("nimi").value.trim();
  if (nimi === '') {
    nimi = 'tuntematon';
  }
  localStorage.setItem("nimi", nimi);
  document.getElementById('tervetuloa_teksti').textContent = "Tervetuloa " + nimi;
}
