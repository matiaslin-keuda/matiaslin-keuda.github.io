document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
  if (localStorage.getItem("kirjautunut") === "kylla") {
    const nimi = localStorage.getItem("nimi");
    document.getElementById("tervetuloa_teksti").textContent = "Tervetuloa " + nimi;
    document.getElementById("kirjaudu_ulos_nappi").style.display = "inline-block"; // näyttää  "Kirjaudu ulos" napin
  } else {
    document.getElementById("kirjaudu_ulos_nappi").style.display = "none"; // piilottaa Kirjaudu ulos napin
  }
}

function kirjaudu() {
  const nimi = document.getElementById("nimi").value;
  localStorage.setItem("nimi", nimi);
  localStorage.setItem("kirjautunut", "kylla");
  document.getElementById('tervetuloa_teksti').textContent = "Tervetuloa " + nimi;
  document.getElementById("kirjaudu_ulos_nappi").style.display = "inline-block"; // näyttää Kirjaudu ulos napin
}

function kirjaudu_ulos(){
  localStorage.removeItem("nimi");
  localStorage.removeItem("kirjautunut");
  document.getElementById('tervetuloa_teksti').textContent = "Tervetuloa";
  document.getElementById("kirjaudu_ulos_nappi").style.display = "none"; // piilottaa kirjaudu ulos napin
}
