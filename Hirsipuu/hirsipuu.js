var painet;
var syotetty = "";
const satunnainen = Lista()[Arpo()];
const pilkottu_sana = satunnainen.split('');
var syotetty_pilkottu = "";
let vaarin = 0;
var kuvake = document.getElementById("kuva");

document.addEventListener('keydown', (event) => {

  var name = event.key;
  var code = event.code;
  if (name == "q" || name == "w" || name == "e" || name == "r" || name == "t" || name == "t" || name == "y" || name == "u" || name == "i" || name == "o" || name == "p" || name == "a" || name == "s" || name == "d" || name == "f" || name == "g" || name == "h" || name == "j" || name == "k" || name == "l" ||
    name == "ö" || name == "ä" || name == "z" || name == "x" || name == "c" || name == "v" || name == "b" || name == "n" || name == "m") {
    // Alert the key name and key code on keydown
    alert(`nappia painettu ${name} \r\n Key code value: ${code}`);
    document.getElementById("confirm").style.color = "black";
    document.getElementById("confirm").innerHTML = "Oletko varma että haluat kokeilla kirjainta " + name.toUpperCase();
    painet = name
  }

}, false);

function painettu() {
 
  syotetty_pilkottu = syotetty.split('');
  if (painet != null) {
    if (syotetty_pilkottu.includes(painet)) {
      document.getElementById("confirm").style.color = "red";
      document.getElementById("confirm").innerHTML = "Laitoit kokeiltun kirjaimen"
    }
    else {
      syotetty += " " + painet

      document.getElementById("kokeiltu").innerHTML = "Testatut Kirjaimet" + syotetty;


      document.getElementById("log").innerHTML = pilkottu_sana;

      //jos meni oikein
      if (pilkottu_sana.includes(painet) || syotetty_pilkottu.includes(painet)) {
      var oikea_aani = new Audio("C:\\Users\\Matias\\OneDrive\\Tiedostot\\matiaslin-keuda.github.io\\Hirsipuu\\kuvat\\ding-sound-effect_1.mp3");
      oikea_aani.play();

        alert("oikein");
      }
      else {
        var vaara_aani = new Audio("C:\\Users\\Matias\\OneDrive\\Tiedostot\\matiaslin-keuda.github.io\\Hirsipuu\\kuvat\\extremely-loud-incorrect-buzzer_0cDaG20.mp3");
        
       
        vaarin++
        switch (vaarin) {
          case 1:
            document.getElementById("kuva").style.visibility = "visible";
            vaara_aani.play();
            break;
          case 2:
            document.getElementById("kuva").src = "kuvat/hirtto3.png";
            vaara_aani.play();
            break;
          case 3:
            document.getElementById("kuva").src = "kuvat/hirtto5.png";
            vaara_aani.play();
            break;
          case 4:
            document.getElementById("kuva").src = "kuvat/hirtto7.png";
            vaara_aani.play();
            break;
          case 5:
            document.getElementById("kuva").src = "kuvat/hirtto9.png";
            vaara_aani.play();
            break;
          case 6:
            document.getElementById("kuva").src = "kuvat/hirtto11.png";
            vaara_aani.play();
            break;
          case 7:
            document.getElementById("kuva").src = "kuvat/hirtto12.png";
            vaara_aani.play();
            break;

        }
     //1 3 5 7 9 11 12
      }


    }
  }
}
function Arpo() {
  const aluku = Math.floor(Math.random() * 3);

  return aluku
}
function Lista() {
  var lista = new Array("test", "kissa", "joulua")
  return lista;
}
function aloitus() {
  for (i = 0; i < satunnainen.length; i++) {
    document.getElementById("sana").innerHTML += " _";
  }
}
