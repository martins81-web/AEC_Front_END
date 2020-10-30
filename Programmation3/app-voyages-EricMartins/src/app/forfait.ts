import { Hotel } from './hotel';

export interface Forfait {
    destination: string,
    villeDeDepart: string,
    hotel: Hotel,
    dateDeDepart: string,
    dateDeRetour: string,
    prix: number,
    rabais: number,
    forfaitVedette: boolean,

}
