//Eric Martins - 10 janvier 2020
// Mettre dans un tableau les 10 bonnes réponses à un test objectif (vrai ou faux).
// Par la suite, faire la correction du test d’un étudiant en lisant ses 10 réponses et afficher sa note sur 10.


var questions = ["5 < 7","9 > 3","(5+6) < 10","3+4 = 5+2","3*2 < 18/4","4 > 4+2","6+4 < 12","25+74 = 98+1","123+234 > 150", " 35/5 = 12-4" ];
var corrige = ["V","V","F","V","F","F","V","V","V","F"];
var reponses = new Array(10);
var resultat=0;
var i;

for ( i=0 ; i<questions.length ; i++){

    do{

        reponses[i]=prompt("Vrai (V) ou Faux (F) \n" + "Question " + (i+1) + ": \n" + questions[i]).toUpperCase();

    }while (reponses[i] !=="V" && reponses[i] !=="F");

    if (reponses[i]===corrige[i]){
        resultat++;
    }
}

document.write("Note: " + (resultat/10*100) + "%");