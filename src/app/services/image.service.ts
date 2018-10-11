import {Injectable} from '@angular/core';
import {Image} from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  images: Image[] = [
    new Image('1', 'Primera Imagen', 'Descripción 1er Imagen', 'https://videotutoriales.com/maspa/maspa1.jpg', 'https://videotutoriales.com/maspa/maspa1.jpg'),
    new Image('2', 'Segunda Imagen', 'Descripción 2da Imagen', 'https://videotutoriales.com/maspa/maspa2.jpg', 'https://videotutoriales.com/maspa/maspa2.jpg'),
    new Image('3', 'Tercera Imagen', 'Descripción 3er Imagen', 'https://videotutoriales.com/maspa/maspa3.jpg', 'https://videotutoriales.com/maspa/maspa3.jpg'),
    new Image('4', 'Cuarta Imagen', 'Descripción 4ta Imagen', 'https://videotutoriales.com/maspa/maspa4.jpg', 'https://videotutoriales.com/maspa/maspa4.jpg'),
    new Image('5', 'Quinta Imagen', 'Descripción 5ta Imagen', 'https://videotutoriales.com/maspa/maspa5.jpg', 'https://videotutoriales.com/maspa/maspa5.jpg'),
    new Image('6', 'Sexta Imagen', 'Descripción 6ta Imagen', 'https://videotutoriales.com/maspa/maspa6.jpg', 'https://videotutoriales.com/maspa/maspa6.jpg'),
    new Image('7', 'Septima Imagen', 'Descripción 7ma Imagen', 'https://videotutoriales.com/maspa/maspa7.jpg', 'https://videotutoriales.com/maspa/maspa7.jpg'),
    new Image('8', 'Octava Imagen', 'Descripción 8va Imagen', 'https://videotutoriales.com/maspa/maspa8.jpg', 'https://videotutoriales.com/maspa/maspa8.jpg'),
  ];

  constructor() {

  }

  getImages() {
    return this.images;
  }
}
