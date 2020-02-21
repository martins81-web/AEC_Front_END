/*<!-- Q1.js -->*/
/*<!-- Programmation1 -->*/
/*<!-- Examen  2 par Eric Martins -->*/
/*<!-- Crée le 15 février 2020 -->*/

// Vous demandez au client le type de Jeep
// Sport 33290$
// SportS 37240$
// Havane 39235$.
// Vous demandez ensuite le terme (24, 48, 60 ou 84) mois.
//     Vous demandez la couleur, si c’est rouge ou vert, ajoutez 1399$ au prix du véhicule.
//     Vous demandez si la transmission est manuelle (0$), automatique (1500$) ou automatique 8 vitesses (2400$).
//
// Calculez une taxe de 15%.
// Le taux d’intérêt est toujours 0%
// Affichez le paiement mensuel incluant la taxe et un résumé de la transaction.

var typeJeep;
var terme=0;
var couleur="";
var transmission;
var prix=0;
var taux=15/100;
var resumeTransaction="<h3>Jeep Wrangler";


// Choix prix de base
do{
typeJeep=Number(prompt("Achat d'une voiture de la Marque Jeep modèle Wrangler\nQuel est le type que vous désirez: (choisissez l'option)\n" +
    "(1) Sport 33290$\n" +
    "(2) SportS 37240$\n" +
    "(3) Havane 39235$"));
}while (typeJeep!==1 && typeJeep!==2 && typeJeep!==3);

if (typeJeep===1){
    prix+=33290;
    resumeTransaction+=" Sport</h3>";
} else if (typeJeep===2){
    prix+=37240;
    resumeTransaction+=" SportS</h3>";
}else if (typeJeep===3){
    prix+=39235;
    resumeTransaction+=" Havane</h3>";
}

// Choix du terme de payements
do{
terme=Number(prompt("Sur combien de mois voulez vous payer cette voiture? (24,48,60 ou 84)"));
}while (terme!==24 && terme!==48 && terme!==60 && terme!==84);

resumeTransaction+="<b>Terme:</b> "+terme+" mois";


// choix de couleur
couleur=prompt("Quelle couleur désirez-vous pour votre voiture? \n(vert ou rouge: extra de 1399$)");

if(couleur.toLowerCase()==="vert" || couleur.toLowerCase()==="rouge"){
    prix+=1399;
}

resumeTransaction+="<br><b>Couleur:</b> "+couleur;


//choix transmission
do{
    transmission = Number(prompt("Quel es le type de transmission?\n" +
        "(1) Manuelle (inclus)\n" +
        "(2) Automatique (1500$)\n" +
        "(3) Automatique 8 vitesses (2400$)"));
}while (transmission!==1 && transmission!==2 && transmission!==3);

if (transmission===1){
    resumeTransaction+="<br><b>Transmission:</b> Manuelle";
} else if (transmission===2){
    prix+=1500;
    resumeTransaction+="<br><b>Transmission:</b>  Automatique";
}else if (transmission===3){
    prix+=2400;
    resumeTransaction+="<br><b>Transmission:</b>  Automatique 8 vitesses";
}


//Calcule tax, prix final et payement mensuel
var tax=prix*taux;
var prixFinal=(prix+tax).toFixed(2);
var payementMensuel=(prixFinal/terme).toFixed(2);
resumeTransaction+="<br><b>Prix tax inclus:</b> "+prixFinal+"$<br><b>Payement mensuel:</b> "+payementMensuel+"$";


//affichage
document.write(resumeTransaction);

