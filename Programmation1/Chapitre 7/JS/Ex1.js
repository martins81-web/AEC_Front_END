// Eric Martins - 30 janvier 2020
// Créez une classe JoueurHockey.
// nom
// nbButs
// nbPasses
//
// Instanciez :
//     Sydney Crosy 454 buts 787 passes
//     Mario Lemieux 690 buts 1033 passes
//     Jaromir Jagr 766 buts 1155 passes
//
// Créez une méthode nommée Total qui retourne le nombre de points (buts + passes)
// Créez une classe Equipe qui contient 3 joueurs
// Instanciez votre équipe avec vos 3 joueurs
// Créez une méthode qui s’appelle AfficherAlignement() qui affiche tous les joueurs d’une équipe.
// Créez une méthode qui s’appelle AfficherPointsTotaux() qui affiche le total de points de 3 joueurs de l’équipe.

class JoueurHockey{
    constructor(nom,nbButs,nbPasses) {
        this.nom = nom;
        this.nbButs = nbButs;
        this.nbPasses = nbPasses;
    }

    Total() {
        return this.nbButs+this.nbPasses;
    }
}

let Syd = new JoueurHockey("Sydney Crosy", 454,787);
let Mario = new JoueurHockey("Mario Lemieux", 690,1033);
let Jagr = new JoueurHockey("Jaromir Jagr", 766,1155);

class Equipe{
    constructor(joueur1,joueur2,joueur3) {
        this.joueur1 = joueur1;
        this.joueur2 = joueur2;
        this.joueur3 = joueur3;
    }

    AfficherAlignement(){
        var alignement="";
        for( let cle in this) {
            alignement += this[cle].nom +"<br>";
        }
        return(alignement);
    }

    AfficherPointsTotaux(){
        var points=0;

        for( let cle in this) {
            points += this[cle].Total();
        }
        return points;
    }
}

let Pengouins = new Equipe(Syd,Mario,Jagr);

// console.log(Syd);
// document.write( Syd.Total());

document.write("<br>");
document.write(Pengouins.AfficherAlignement());
document.write("<br>");
document.write(Pengouins.AfficherPointsTotaux());