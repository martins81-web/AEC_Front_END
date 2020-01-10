// Eric Martins - 24 octobre 2019


//8. Programmer un convertisseur Fharenheit -> Degré Celsius.

//déclaration des variables
var Celsius, Fharenheit;

//lecture des varibles
Fharenheit=Number(prompt('Convertisseur Degré Fharenheit -> Degré Celsius.\nRentrez la température en Degré Fharenheit:'));

//Calcul
Celsius=(Fharenheit-32)*5/9;

//Affichage
//Console.log(Fharenheit+"°F correspondent à "+ Celsius+"°C.");
alert(Fharenheit+"°F correspondent à"+ Celsius+"°C.");