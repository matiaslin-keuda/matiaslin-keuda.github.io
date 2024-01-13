var painet;
var syotetty = "";
const satunnainen = Lista()[Arpo()];
const pilkottu_sana = satunnainen.split('');
var syotetty_pilkottu = "";
let vaarin = 0;
var kuvake = document.getElementById("kuva");
var oikea_aani = new Audio("ding-sound-effect_1.mp3");
var vaara_aani =  new Audio("extremely-loud-incorrect-buzzer_0cDaG20.mp3");
var voitto_aani = new Audio("yippee-tbh.mp3")
var over_aani = new Audio("super-mario-death-sound-sound-effect.mp3")
document.addEventListener('keydown', (event) => {
if(vaarin==7){}
else{
  var name = event.key;

  if (name == "q" || name == "w" || name == "e" || name == "r" || name == "t" || name == "t" || name == "y" || name == "u" || name == "i" || name == "o" || name == "p" || name == "a" || name == "s" || name == "d" || name == "f" || name == "g" || name == "h" || name == "j" || name == "k" || name == "l" ||
    name == "ö" || name == "ä" || name == "z" || name == "x" || name == "c" || name == "v" || name == "b" || name == "n" || name == "m") {

    document.getElementById("confirm").style.color = "black";
    document.getElementById("confirm").innerHTML = "Oletko varma että haluat kokeilla kirjainta " + name.toUpperCase();
    painet = name;
    }
  }

}, false);

function painettu() {
  if(vaarin==7){}
  else{
  syotetty_pilkottu = syotetty.split('');
  if (painet != null) {
    if (syotetty_pilkottu.includes(painet)) {
      document.getElementById("confirm").style.color = "red";
      document.getElementById("confirm").innerHTML = "Laitoit kokeiltun kirjaimen"
    }
    else {
      syotetty += " " + painet;


      document.getElementById("kokeiltu").innerHTML = "Testatut Kirjaimet: " + syotetty;


      if (pilkottu_sana.includes(painet) || syotetty_pilkottu.includes(painet)) {
        syotetty_pilkottu = syotetty.split('');

        oikea_aani.play();
       paivitasana();
        document.getElementById("sana").innerHTML = displayedWord.trim();

      }
      else {
        vaarin++
        vaara();
      }}
    }
  }
  }
    function Arpo() {
      const aluku = Math.floor(Math.random() * 43);

      return aluku
    }
    function Lista() {
      var lista = new Array("kellari", "kissa", "joulu", "tietokone", "kalja", "auto", "kesä", "koulu", "kirja", "aurinko", "metsä", "kukka", "vesi", "musiikki", "kala", "talvi", "lintu", "pöytä", "maailma", "uimaranta", "ilo", "maito", "vuori", "sadetta", "viikko", "runo", "silta", "yö", "viini", "lumi", "ystävä", "kulta", "puu", "hetki", "kukkula", "suukko", "ääni", "ilta", "taivas", "lautta", "ilma", "hevonen", "koti"
      );

      return lista;
    }
    function aloitus() {
      var initialDisplayedWord = "";
      for (var i = 0; i < pilkottu_sana.length; i++) {
        initialDisplayedWord += "_ ";
      }
      document.getElementById("sana").innerHTML = initialDisplayedWord.trim();
    }
    function paivitasana() {
      var displayedWord = "";
      for (var i = 0; i < pilkottu_sana.length; i++) {
        if (syotetty_pilkottu.includes(pilkottu_sana[i])) {
          displayedWord += pilkottu_sana[i] + " ";
        } else {
          displayedWord += "_ ";
        }
      }
      document.getElementById("sana").innerHTML = displayedWord.trim();
      if (!displayedWord.includes('_')) {
        voitto_aani.play();
        document.getElementById("confirm").innerHTML = "Oikea sana oli: "+satunnainen +" eli arvasit oikein";
      }

    }
    aloitus(); syotasana()
    function syotasana() {
     
      var textboxarvo = document.getElementById("textbox").value.toLowerCase();
      if (textboxarvo === satunnainen.toLowerCase()) {
        voitto_aani.play();
        document.getElementById("confirm").innerHTML = "Oikea sana oli: "+satunnainen +" eli arvasit oikein";

      } else {
        vaarin++;
        vaara();
        vaara_aani.play();
      }
      }
    
    function vaara() {
      switch (vaarin) {
        case 1:
          document.getElementById("kuva").style.visibility = "visible";
          vaara_aani.play();
          break;
        case 2:
          document.getElementById("kuva").src = "hirtto3v2.png";
          vaara_aani.play();
          break;
        case 3:
          document.getElementById("kuva").src = "hirtto5v2.png";
          vaara_aani.play();
          break;
        case 4:
          document.getElementById("kuva").src = "hirtto7v2.png";
          vaara_aani.play();
          break;
        case 5:
          document.getElementById("kuva").src = "khirtto9v2.png";
          vaara_aani.play();
          break;
        case 6:
          document.getElementById("kuva").src = "hirtto11v2.png";
          vaara_aani.play();
          break;
        case 7:
          document.getElementById("confirm").innerHTML = "Oikea sana oli: "+satunnainen;
          document.getElementById("kuva").src = "hirtto12v2.png";
          over_aani.play();
          setTimeout(function() {
            location.reload();
        }, 4000);
          break;
        

      }
    }
      //1 3 5 7 9 11 12
   
