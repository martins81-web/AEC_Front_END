// Eric Martins - 30 janvier 2020
// Créez un objet nommé personne3 à l'aide de la méthode 1 et entrez vos informations personnelles.

// let personne3 = {
//     prenom : "Eric",
//     nom : "Martins",
//     age : 38
// };

// Affichez personne 3 à l'aide de document.write sur le site Web.

// document.write(personne3.prenom);
// document.write("<br>");
// document.write(personne3.nom);
// document.write("<br>");
// document.write(personne3.age);
// document.write("<br>");
//
// // Créez un objet nommé personne4 à l'aide de la méthode 2 et entrez les informations de votre voisin de classe.
//
let personne4 = {};

personne4.prenom = "Laurent";
personne4.nom = "Drolet";
personne4.age = 23;

for( let cle in personne4) {
    document.write(personne4[cle]); // Affichera la valeur associée à la clé ("Shany", "Carle", 38)
}

// document.write(personne4.prenom);
// document.write("<br>");
// document.write(personne4.nom);
// document.write("<br>");
// document.write(personne4.age);
// document.write("<br>");

// // À l'aide de la méthode 1, créez un objet nommé cartePokemon1 qui contient : nom, type, hp, nomAttaque1, nomAttaque2, degatsAttaque1 et degatsAttaque2.
//
// let cartePokemon1 = {
//     nom : "Pikachu",
//     type : "Électrique",
//     hp : 50,
//     nomAttaque1 : "Agility",
//     nomAttaque2 : "Thundershock",
//     degatsAttaque1: 0,
//     degatsAttaque2: 20
// };
//
// // À l'aide de la méthode 2, créez un objet nommé cartePokemon2 qui contient : nom, type, hp, nomAttaque1, nomAttaque2, degatsAttaque1 et degatsAttaque2.
//
// let cartePokemon2 = {};
//
// cartePokemon2.nom  = "Greninja";
// cartePokemon2.type = "Eau";
// cartePokemon2.hp   = 230;
// cartePokemon2.nomAttaque1 = "Haze Slash";
// cartePokemon2.nomAttaque2 = "Shadowy Hunter GX";
// cartePokemon2.degatsAttaque1 = 110;
// cartePokemon2.degatsAttaque2 = 130;

class CartePokemon{
    constructor(nom,type,hp,nomAttaque1,nomAttaque2,degatsAttaque1,degatsAttaque2) {
        this.nom = nom;
        this.type = type;
        this.hp = hp;
        this.nomAttaque1 = nomAttaque1;
        this.nomAttaque2 = nomAttaque2;
        this.degatsAttaque1 = degatsAttaque1;
        this.degatsAttaque2 = degatsAttaque2;
    }
}

let cartePokemon1 = new CartePokemon("Pikachu","Électrique",50,"Agility","Thundershock",0,20);
let cartePokemon2 = new CartePokemon("Greninja","Eau",230, "Haze Slash", "Shadowy Junter GX", 110,130);
