//// Eric Martins - 16 janvier 2020
// Charivari… vous connaissez? C'est le jeu qui mêle des lettres et
// le joueur doit trouver le mot!!
//
//     Consignes:
//
// Entrez le mot à trouver;
// Mélangez les lettres au hasard;
// Affichez le mot mélangé;
// Affichez tous les essais;
//
// Félicitez le joueur quand il a la bonne réponse.
//     Ajoutez une touche pour obtenir la réponse du mot recherché lorsque l’usager voudra connaître un mot qu’il ne peut trouver.

var listeDeMots = ["gala","prune","galon","bande","famille","nom", "enfant","homme", "femme","torche","garçon"];
var index = Math.floor(Math.random() * (listeDeMots.length));
var mot = listeDeMots[index];
var melangeeArray=[];
var melangeeString="";
var motRentree;
var compteur=0;

//transfer string to Array
for (let i=0; i<mot.length ;i++) {
    melangeeArray[i]=mot[i];
}

//melange Array
for ( let i = 0 ; i < melangeeArray.length ; i++ ) {
    let r = Math.floor( Math.random() * ( melangeeArray.length ) );
    let temp = melangeeArray[ i ];
    melangeeArray[ i ] = melangeeArray[ r ];
    melangeeArray[ r ] = temp;
}

//transfer Array to string
for ( i=0; i<mot.length ;i++) {
    melangeeString+=melangeeArray[i];
}


do{
    motRentree=prompt("Charivari… \nTrouver le bon mot à partir des lettres suivantes: \n" + melangeeString + "\nRentrez (X) pour terminer et afficher le bon mot." )
    compteur++;
    document.write("Tentative: " + compteur + " - " + motRentree + "<br>");

    if (motRentree==='x' || motRentree==='X'){
        break;
    }

}while (motRentree !== mot);

document.write("<br>Le bon mot était:<b> "+ mot+" </b><br><br>");

if( motRentree===mot){
    document.write("Félicitations! <br> Bonne réponse après "+ compteur+ " tentative(s).");
}
else{
    document.write("Vous avez perdu!");
}
