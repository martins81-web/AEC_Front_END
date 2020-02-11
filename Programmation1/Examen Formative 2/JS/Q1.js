/*<!-- Q1.js -->*/
/*<!-- Programmation1 -->*/
/*<!-- Examen formative 2 par Eric Martins -->*/
/*<!-- Crée le 06 février 2020 -->*/

// Vous devez calculer les dommages de l’attaque Darkest Lariat du pokémon Incineroar.
//
//     Pour cela, il faut lire le type du pokémon adverse. Si c’est de type eau, les dommages seront doublés car les pokémons du type eau ont une faiblesse contre le feu.
//     Il faut ensuite faire deux pile ou face. Pour cela, il faut générer un nombre aléatoire entre 0 et 1.
//     Si c’est face (1), l’attaque fait 100 de dégâts.
//     Si c’est faux l’attaque fait 0 dégât. Répétez les opérations pour le second lancé.
//
//     Exemple :
// type = “eau” face face → 400 de dégâts
// type = “ténèbre” pile face → 100 dégâts
//
var typePokemonAdverse;
typePokemonAdverse=prompt("Types de Pokémon:\n\nAcier, Combat, Dragon, Eau, Électrik, Fée, Feu, Glace,\n" +
    "Insecte, Normal, Plante, Poison, Psy, Roche, Sol, Spectre, Ténèbres, Vol" +
    "\n\nQuel est le type du pokémon adverse?").toUpperCase();

var pileOuFace1=Math.round(Math.random());
var pileOuFace2=Math.round(Math.random());

var degats=0;
var pileOuFace="";

if(pileOuFace1===0) {
    degats+=0;
    pileOuFace+=" pile ";
}
else{
    degats+=100;
    pileOuFace+=" face ";
}

if(pileOuFace2===0) {
    degats+=0;
    pileOuFace+=" pile ";
}
else{
    degats+=100;
    pileOuFace+=" face ";
}

if (typePokemonAdverse==="EAU") {
    degats*=2;
}

document.write("type = \""+typePokemonAdverse.toLowerCase()+"\"" + pileOuFace + " → " + degats + " de dégâts");
