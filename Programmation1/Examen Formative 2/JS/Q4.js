/*<!-- Q4.js -->*/
/*<!-- Programmation1 -->*/
/*<!-- Examen formative 2 par Eric Martins -->*/
/*<!-- Crée le 06 février 2020 -->*/

// Créez une classe MonnaieVirtuelle.
// Une MonnaieVirtuelle a les propriétés suivantes :
//
// nomMonnaie (exemple : Bitcoin, Ethereum, Litecoin)
// valeurEnUSD (exemple 1 Bitcoin = 9730$)
// actif (vous avez 2 Bitcoins)
// actifUSD (2 bitCoins = 2*9730)
// Votre constructeur doit prendre en paramètres nomMonnaie, valeurEnUSD et actif et calculer automatiquement actifUSD.

class MonnaieVirtuelle {
    constructor(nomMonnaie, valeurEnUSD, actif) {
        this.nomMonnaie = nomMonnaie;
        this.valeurEnUSD = valeurEnUSD;
        this.actif = actif;
        this.actifUSD = this.actif*this.valeurEnUSD;
    }
}

// Créez une classe Portefeuille. (1 point)
// Un Portefeuille a les propriétés suivantes :

// nomProprietaire (exemple : Shany Carle) (1 point)
// tableauMonnaies (un tableau de plusieurs MonnaieVirtuelle) (1 point)
// Une méthode nommée ValeurDuPortefeuille() qui explore le tableau tableauMonnaies et retourne le total de tous les actifUSD. (4 points)

class Portefeuille {
    constructor(nomProprietaire, tableauMonnaies) {
        this.nomProprietaire = nomProprietaire;
        this.tableauMonnaies = tableauMonnaies;
    }

    ValeurDuPortefeuille(){
        let totalActifUSD=0;
        for( let i=0; i<this.tableauMonnaies.length;i++) {
               totalActifUSD += this.tableauMonnaies[i].actifUSD;
           }
        return totalActifUSD;
    }
}

// Instanciez les monnaies suivantes :
// nomMonnaie = Bitcoin, valeurEnUSD = 9730, actif = 6
// nomMonnaie = Ethereum, valeurEnUSD = 194, actif = 20
// nomMonnaie = Litecoin, valeurEnUSD = 58, actif = 10

var monnaie1= new MonnaieVirtuelle("Bitcoin",9730,6);
var monnaie2= new MonnaieVirtuelle("Ethereum",194,20);
var monnaie3= new MonnaieVirtuelle("Litecoin",58,10);

// Instanciez le portefeuille suivant :
// Shany Carle, un tableau qui contient toutes les monnaies précédentes.

var tabMonnaiesShany=[monnaie1,monnaie2,monnaie3];
var portefeuilleShany= new Portefeuille("Shany Carle",tabMonnaiesShany);

// Faites afficher la valeur de mon portefeuille.
document.write("La valeur du portefeuille à "+portefeuilleShany.nomProprietaire+" est de <b>$"+ portefeuilleShany.ValeurDuPortefeuille().toLocaleString()+"</b> US.");
