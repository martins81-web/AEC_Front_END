
// Eric Martins - 30 janvier 2020
// Créez une classe Examen qui contient 5 questions. Chaque question vaut de zéro à 20 points. Examen possède la fonction GetNote() qui retourne son score sur 100
// Créez une classe Etudiant qui contient les propriétés : nom, prénom et un Examen.
//
// Instanciez 10 étudiants avec chacun un examen dont chaque résultat de chaque question est choisi aléatoirement.
//
// Affichez les élèves qui réussissent l’examen et ceux qui échouent.

class Examen{
    constructor() {
        this.question1 = Math.floor(Math.random() * 21);
        this.question2 = Math.floor(Math.random() * 21);
        this.question3 = Math.floor(Math.random() * 21);
        this.question4 = Math.floor(Math.random() * 21);
        this.question5 = Math.floor(Math.random() * 21);
    }

    GetNote() {
        let note = 0;
        for( let cle in this) {
            note += this[cle];
        }
        return note;
    }
}

class Etudiant{
    constructor(nom,prenom,Examen) {
        this.nom = nom;
        this.prenom = prenom;
        this.Examen = Examen;
        this.nomComplet = prenom + " " + nom;
    }
}


let etudiant1 = new Etudiant("Martins", "Eric", new Examen().GetNote());
let etudiant2 = new Etudiant("Hébert", "Julien",new Examen().GetNote());
let etudiant3 = new Etudiant("Carle", "Shany",  new Examen().GetNote());
let etudiant4 = new Etudiant("Thériault", "Mathieu", new Examen().GetNote());
let etudiant5 = new Etudiant("Vigneau", "Cédric", new Examen().GetNote());
let etudiant6 = new Etudiant("Beaupré", "Marie-Michelle", new Examen().GetNote());
let etudiant7 = new Etudiant("Da Silva", "Andrea", new Examen().GetNote());
let etudiant8 = new Etudiant("Champagne", "David", new Examen().GetNote());
let etudiant9 = new Etudiant("Vargas", "Francisca", new Examen().GetNote());
let etudiant10 = new Etudiant("Gallard", "Frank", new Examen().GetNote());

class Classe{
    constructor() {
        this.etudiant1 = etudiant1;
        this.etudiant2 = etudiant2;
        this.etudiant3 = etudiant3;
        this.etudiant4 = etudiant4;
        this.etudiant5 = etudiant5;
        this.etudiant6 = etudiant6;
        this.etudiant7 = etudiant7;
        this.etudiant8 = etudiant8;
        this.etudiant9 = etudiant9;
        this.etudiant10= etudiant10;
    }


    AffichageReussiEchec() {
        var reussi="";
        var echec ="";

        for( let key in this) {
            if ( this[key].Examen >= 60){
                reussi += this[key].nomComplet + " <br>Note: <font color=\"green\">" +this[key].Examen +"%</font><br><br>";
            }
            else if (this[key].Examen < 60){
                echec += this[key].nomComplet + " <br>Note: <font color=\"red\">" +this[key].Examen +"%</font><br><br>";
            }
        }
        document.write("<h1> Élèves qui ont Réussi:</h1> " + reussi + "<h1> Élèves qui ont Échoué: </h1> " + echec);
        return true;
    }

}

let resultats = new Classe();
resultats.AffichageReussiEchec();