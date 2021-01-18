import { Injectable } from '@angular/core';
import {Ad} from '../models/ad.model';

@Injectable({
  providedIn: 'root'
})
export class AdServiceService {

  ads: Array<Ad>;

  constructor() {

    this.ads = [
      new Ad('Titre 1', 'Auteur 1', '16-09-1998', 'Description 1', '19,99$', 1),
      new Ad('Titre 2', 'Auteur 2', '23-10-1998', 'Description 2', '24,99$', 2),
      new Ad('Titre 3', 'Auteur 3', '22-11-1998', 'Description 3', '75,99$', 3),
      new Ad('Titre 4', 'Auteur 4', '31-12-1998', 'Description 4', '12,99$', 4),
    ];

  }

  getAdById(id: number): Ad {
    for (const ad of this.ads) {
      if (ad.id === id) {
        return ad;
      }
    }
  }

}
