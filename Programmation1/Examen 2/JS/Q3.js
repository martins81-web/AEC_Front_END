/*<!-- Q3.js -->*/
/*<!-- Programmation1 -->*/
/*<!-- Examen  2 par Eric Martins -->*/
/*<!-- Crée le 15 février 2020 -->*/

// LE GÉNÉRATEUR DE LETTRES ALÉATOIRES
//
// Créez un tableau nommé tabNombres de 10000 cellules.
//     Remplissez toutes les cellules de ce tableau de nombres aléatoires entre 65 et 90 inclusivement.
//
//     Créez un second tableau nommé tabLettres de 10000 cellules.
//     Vous devez remplir ce tableau à partir du tableau précédent en y inscrivant le caractère unicode correspondant au chiffre stocké dans le tableau tabNombres au même indice.
//
// Une fois que votre tableau tabLettres est généré, vous devez répondre aux questions suivantes :
//     Affichez le nombre de lettres E dans le tableau.
//     Affichez le nombre de voyelles (la somme du nombre de A E I O U Y)
// Affichez si oui ou non la séquence de lettres “DAD” se retrouve dans le tableau.
//     Si oui, indiquez l’indice où débute le mot DAD.
//     Une fois le mot trouvé, vous pouvez cesser la recherche (pas obligé de trouver tous les mots DAD)

// Math.floor(Math.random() * (max - min + 1)) + min;

var tabNombres=[];
var tabLettres=[];

//création des tableux
for (let i=0; i<10000 ;i++){
    tabNombres[i]=Math.floor(Math.random() * (90 - 65 + 1)) + 65;
    tabLettres[i]=String.fromCharCode(tabNombres[i]);
    // document.write(i+": "+tabNombres[i]+" "+tabLettres[i]+"<br>");
}


//affichage du nombre de lettres E et affichage du nombre de voyelles dans le tableau
var nbLettresE=0;
var nbVoyelles=0;

for(let i=0; i<tabLettres.length;i++){
    if(tabLettres[i]==='E'){
        nbLettresE++;
    }
    if(tabLettres[i]==='A'||tabLettres[i]==='E'||tabLettres[i]==='I'||tabLettres[i]==='O'||tabLettres[i]==='U'||tabLettres[i]==='Y'){
        nbVoyelles++;
    }
}

document.write("Il y a "+nbLettresE+ " lettres E<br>");
document.write("Il y a "+nbVoyelles+ " voyelles<br>");

//Recherche de la séquence de lettres DAD
var sequenceDAD='non';
var indiceSequenceDAD=0;
var i=0;

do {
    if (tabLettres[i] === 'D' && tabLettres[i + 1] === 'A' && tabLettres[i + 2] === 'D') {
        sequenceDAD = 'oui';
        indiceSequenceDAD = i;
    }
    i++;
}while(sequenceDAD ==='non' && i<tabLettres.length);

document.write("Présence de la séquence de lettres “DAD”: "+sequenceDAD+"<br>");
if(sequenceDAD==='oui') {
    document.write("Indice du début du mot “DAD”: " + indiceSequenceDAD);
}

