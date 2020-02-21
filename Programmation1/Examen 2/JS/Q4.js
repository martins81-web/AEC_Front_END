/*<!-- Q4.js -->*/
/*<!-- Programmation1 -->*/
/*<!-- Examen  2 par Eric Martins -->*/
/*<!-- Crée le 15 février 2020 -->*/

// L’AGENCE DE VOYAGES
//
// Créez une classe Activité
// Une activité a un nom
// Une activité a un coût

class Activite {
    constructor(nom, cout) {
        this.nom = nom;
        this.cout = cout;
    }
}

// Créez une classe Voyage
// Un voyage a une destination
// Un voyage a prix pour billet avion
// Un voyage un tableau d’activités

class Voyage {
    constructor(destination, prix, tabActivites) {
        this.destination = destination;
        this.prix = prix;
        this.tabActivites = tabActivites;
    }

    PrixTotal(){
        let prixTotal=this.prix;
        for(let i=0;i<this.tabActivites.length;i++){
            prixTotal+=this.tabActivites[i].cout;
        }
        return prixTotal;
    }

    AfficheActivites(){
        let infoActivites="";
        for(let i=0;i<this.tabActivites.length;i++){
            infoActivites+=this.tabActivites[i].nom+": "+this.tabActivites[i].cout+"$<br>";
        }
        return infoActivites;
    }
}

// Créez une classe Personne
// Une personne a un nom
// Une personne a un voyage

class Personne {
    constructor(nom, voyage) {
        this.nom = nom;
        this.voyage = voyage;
    }
}

// Instanciez l’activité “Golden Knights hockey” 125$
// Instanciez l’activité “Raiders football” 200$
// Instanciez l’activité “Tournoi de poker” 500$

var hockey= new Activite("Golden Knights hockey",125);
var football= new Activite("Raiders football",200);
var poker= new Activite("Tournoi de poker",500);

// Instanciez le voyage “Las Vegas” 400$ avec les 3 activités précédentes

var activites=[hockey,football,poker];
var vegas= new Voyage("Las Vegas",400,activites);

// Instanciez la personne “Shany Carle” avec le voyage précédent

var client1= new Personne("Shany Carle",vegas);

// Faites afficher toutes ces informations à l’écran. Vous devez en plus afficher le coût total pour le voyage (le billet d’avion et les activités).

document.write("<h3>"+client1.nom+"</h3>");
document.write("<b>Voyage:</b> "+ client1.voyage.destination+" "+ client1.voyage.prix+"$<br><br>");
document.write("<b>Activités:</b><br> "+ client1.voyage.AfficheActivites());
document.write("<br><b>Prix total:</b> "+client1.voyage.PrixTotal()+"$");