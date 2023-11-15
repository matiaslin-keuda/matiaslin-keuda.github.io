document.addEventListener('keydown', (event) => {
    
    var name = event.key;
    var code = event.code;
if( name=="q" || name=="w"||  name=="e" || name=="r" || name=="t" || name=="t"|| name=="y" || name=="u" || name=="i" || name=="o" || name=="p" || name=="a" || name=="s" || name=="d" || name=="f" || name=="g"  || name=="h" || name=="j" || name=="k" || name=="l" ||
 name=="ö" || name=="ä" || name=="z" || name=="x" || name=="c" || name=="v" || name=="b"  || name=="n" || name=="m"  ){
    // Alert the key name and key code on keydown
    alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    }
    
  }, false);

  function painettu()
  {
    alert("nappia painettu");
  }

  //if (kokeiltukirjain==name){print olet koikelut sitä }