// Eric Martins - 30 janvier 2020
//     Créez une classe Cylindre qui contient deux propriétés :
//     une hauteur et un rayon.
//     La classe Cylindre doit contenir une méthode GetVolume() qui retourne son volume.
//     Créez 2 cylindres avec les valeurs de votre choix et testez votre méthode GetVolume().
//     Créez une classe Boite qui contient un tableau de Cylindres.
//     Remplissez la boîte de 5 cylindres de votre choix.
//     Créez une méthode GetVolumeBoite() qui permet d’afficher le volume total des 5 cylindres.

class Cylindre{
    constructor(hauteur,rayon) {
        this.hauteur = hauteur;
        this.rayon = rayon;
    }

    GetVolume() {
        return Math.PI * Math.pow(this.rayon, 2) * this.hauteur;
    }
}

let cyl1 = new Cylindre(10,2);


let tabCylindres= [cyl1,cyl1,cyl1,cyl1,cyl1];

// document.write(cyl1.GetVolume().toFixed(2));

class Boite{
    constructor(tabCylindre) {
        this.tabCylindre=tabCylindre;
    }

    GetVolumeBoite(){
        let volume = 0;
        for(let i=0; i<this.tabCylindre.length; i++){
            volume += this.tabCylindre[i].GetVolume();
        }
        return volume;
    }

}

let boite = new Boite(tabCylindres);
document.write(boite.GetVolumeBoite().toFixed(2));
