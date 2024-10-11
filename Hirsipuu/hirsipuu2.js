const kirjain = " ";
const satunnainen = Lista()[Arpo()];
let tuhoutuva = satunnainen;
let seeable = '';
let vanhachar ='';
kuva=document.getElementById("kuva")
function guessLetter(kirjain, button) {
    document.getElementById('kokeiltu').innerHTML +=kirjain +' ';
    if (satunnainen.includes(kirjain)) {
        vanhachar += kirjain + " ";
        button.disabled = true;
        button.style.backgroundColor = 'green';
        tuhoutuva = tuhoutuva.replace(new RegExp(kirjain, 'g'), '');

        let seeable = "";

        for (var i = 0; i < satunnainen.length; i++) {
            if (vanhachar.includes(satunnainen[i])) {
                seeable += satunnainen[i] + " ";
            } else {
                seeable += "_ ";
            }
        }

        document.getElementById("arvattava").innerHTML = seeable.trim();
            
        if (tuhoutuva.length == 0) {
            console.log("valmis");
            createConfetti(); 
        }
    } else {
        button.style.backgroundColor = 'red';
        button.disabled = true;
        vaarin();
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
    kuva=document.getElementById("kuva")
    kuva.style.height = '100px';
    kuva.style.width = '200px';
    //let pilkottu = satunnainen.split();
    for (var i = 0; i < satunnainen.length; i++) {
        seeable += "_ ";
    }
    document.getElementById("arvattava").innerHTML = seeable;
}

function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    confettiContainer.innerHTML = ''; // tyhjennä
    console.log("confetti1")
    const confettiColors = ['#ff0', '#f00', '#0f0', '#00f', '#f0f', '#0ff', '#ff8000', '#8000ff'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;

        confettiContainer.appendChild(confetti);
        console.log("confetti2")
        // poista conffettit
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}
function syotasana(){
    let kokeile=document.getElementById("textbox").value;
    let kokeiltufilt = kokeile.toLowerCase();
   if(kokeiltufilt==satunnainen){
    createConfetti();

    
    
   }

}
function ruotsalainen(){
    
    document.getElementById("kuva").style.visibility ="visible"
    document.getElementById("kuva").src='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvc2s0MTU1LWltYWdlLWt3dnVsYWFtLmpwZw.jpg'
}
function vaarin(){
    let sustain=0;
    sustain++;
    switch(sustain){
        case 1:
        kuva.style.visibility="visible"
         kuva.src="kuva/hirtto1";
        break;
    }
}