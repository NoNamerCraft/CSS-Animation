//animatie heuvels
anime({
  targets: '.heuvels',  //target de class 'heuvels'
  translateX: [0, -1499],   //schuif de X positie van 0 naar -1499
  loop: true,   //geeft aan dat het een loop is
  duration: 25000,  //de animatie duurt 25000 miliseconden
  easing: 'linear'  //het verloop is linear
});

//animatie bergen
anime({
  targets: '.bergen',   //target de class 'bergen'
  translateX: [0, -1499],   //schuif de X positie van 0 naar -1499
  loop: true,   //geeft aan dat het een loop is
  duration: 100000, //de animatie duurt 100000 miliseconden
  easing: 'linear'  //het verloop is linear
});

//animatie weg
anime({
  targets: '.weg',  //target de class 'weg'
  translateX: [0, -1499],   //schuif de X positie van 0 naar -1499
  loop: true,   //geeft aan dat het een loop is
  duration: 3000,   //de animatie duurt 3000 miliseconden
  easing: 'linear'  //het verloop is linear
});

//bovenstaande animaties zijn gemaakt doormiddelvan de ingeladen library anime.js

//BRON 1
//clickfunctie en veranderen van class + actief (jquery)
$(".optie").click(function () {                 //target de class 'optie' in een click functie
  $(".optie").removeClass("actief");            //target de class 'optie' en haal de class 'actief' weg
  $(this).addClass("actief");                   //target de class 'optie' en voeg de class 'actief' toe     //hierbij wordt het zichtbaar welk dagdeel actief is met de class 'actief'
  
  var type = $(this).data("option");            //declareert een variable 'type' en laad de 'data-option' data erin
  setTimeout(function () {                      //begin de functie setTimeout
    if (type === "ochtend") {                   //begin if statement - als het variable type gelijk is aan "ochtend" dan ...
      $(".tijd").attr('class', "tijd ochtend"); //van de class tijd -> verander de class naar 'tijd ochtend'
        console.log('het is ochtend')           //bericht in het console dat het dagdeel ochtend is
    } 
      else if (type === "overdag") {            // of - als het variable type gelijk is aan "overdag" dan ...
      $(".tijd").attr('class', "tijd overdag"); //van de class tijd -> verander de class naar 'tijd overdag'
        console.log('het is overdag')           //bericht in het console dat het dagdeel overdag is
    } 
      else if (type === "avond") {              // of - als het variable type gelijk is aan "avond" dan ...
      $(".tijd").attr('class', "tijd avond");   //van de class tijd -> verander de class naar 'tijd avond'
        console.log('het is avond')             //bericht in het console dat het dagdeel avond is
    } 
      else if (type === "nacht") {              // of - als het variable type gelijk is aan "nacht" dan ...
      $(".tijd").attr('class', "tijd nacht");   //van de class tijd -> verander de class naar 'tijd nacht'
        console.log('het is nacht')             //bericht in het console dat het dagdeel nacht is
    }                                           //einde else if statement
  }, 100);                                      //delay van 100 miliseconden
});                                             //einde functie