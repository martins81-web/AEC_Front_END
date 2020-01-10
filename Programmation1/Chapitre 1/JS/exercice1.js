
// Eric Martins - 24 octobre 2019

//1. lire un nombre est l'afficher au carré et au cube

//variables
var nombre;
var carré;
var cube;

//Lire le nombre
nombre=Number(prompt("Entrez un nombre"));

//calcule
carré=Math.pow(nombre,2);
cube=Math.pow(nombre,3);

//affichage
console.log(nombre + " au carré est égale à " + carré);
console.log(nombre + " au cube est égale à " + cube);

//alert(nombre + " au carré est égale à " + carré);
//alert(nombre + " au cube est égale à " + cube);


//test