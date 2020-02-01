//  Eric Martins - 31 janvier 2020
// Exercice Facultatif
//
// Créez une classe très grosse poupée russe qui contient une grosse poupée russe qui contient une poupé russe qui
// contient une petite poupée russe qui contient une très petite poupée russe.
//     Chacune de ces poupées possède la fonction GetParents() qui retourne dans combien de poupées russes elle se
//     situe et GetEnfants() qui retourne combien de poupées russes sont à l’intérieur d’elle.

class TresPetitePoupeeRusse{
    constructor(nom) {
        this.nom = nom;
    }

    GetParents(){
        return (PetitePoupeeRusse.prototype.GetParents())+1;
    }

    GetEnfants(){
        return 0;
    }
}

class PetitePoupeeRusse{
    constructor(nom,TresPetitePoupeeRusse) {
        this.nom = nom;
        this.TresPetitePoupeeRusse=TresPetitePoupeeRusse;
    }

    GetParents(){
        return (PoupeeRusse.prototype.GetParents())+1;
    }

    GetEnfants(){
        return (this.TresPetitePoupeeRusse.GetEnfants())+1;
    }
}

class PoupeeRusse{
    constructor(nom,PetitePoupeeRusse) {
        this.nom = nom;
        this.PetitePoupeeRusse=PetitePoupeeRusse;
    }

    GetParents(){
        return ( GrossePoupeeRusse.prototype.GetParents())+1;
    }

    GetEnfants(){
        return (this.PetitePoupeeRusse.GetEnfants())+1;
    }
}

class GrossePoupeeRusse{
    constructor(nom,PoupeeRusse) {
        this.nom = nom;
        this.PoupeeRusse=PoupeeRusse;
    }

    GetParents(){
        return 0;
    }

    GetEnfants(){
        return (this.PoupeeRusse.GetEnfants())+1;
    }
}

let tresPetite = new TresPetitePoupeeRusse("très petite poupée russe");
let petite = new PetitePoupeeRusse("petite poupée russe",tresPetite);
let poupee = new PoupeeRusse("poupée russe",petite);
let grosse = new GrossePoupeeRusse("grosse poupée russe",poupee);

document.write("La " + tresPetite.nom +" a " + tresPetite.GetEnfants()+" enfants et " + tresPetite.GetParents()+" parents.<br>");
document.write("La " + petite.nom +" a " + petite.GetEnfants()+" enfants et " + petite.GetParents()+" parents.<br>");
document.write("La " + poupee.nom +" a " + poupee.GetEnfants()+" enfants et " + poupee.GetParents()+" parents.<br>");
document.write("La " + grosse.nom +" a " + grosse.GetEnfants()+" enfants et " + grosse.GetParents()+" parents.<br>");