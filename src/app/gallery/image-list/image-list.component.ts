import {Component, OnInit, Input} from '@angular/core';
import {Image} from '../../models/image';

@Component({
  selector: 'ng-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {
  // image = new Image('1', 'Primera Imagen', 'Descripción 1er Imagen', 'https://videotutoriales.com/maspa/maspa1.jpg', 'https://videotutoriales.com/maspa/maspa1.jpg');
  images : Image[] = [
    new Image('1', 'Primera Imagen', 'Descripción 1er Imagen', 'https://videotutoriales.com/maspa/maspa1.jpg', 'https://videotutoriales.com/maspa/maspa1.jpg'),
    new Image('2', 'Primera Imagen', 'Descripción 1er Imagen', 'https://videotutoriales.com/maspa/maspa2.jpg', 'https://videotutoriales.com/maspa/maspa2.jpg'),
    new Image('3', 'Primera Imagen', 'Descripción 1er Imagen', 'https://videotutoriales.com/maspa/maspa3.jpg', 'https://videotutoriales.com/maspa/maspa3.jpg'),
    new Image('4', 'Primera Imagen', 'Descripción 1er Imagen', 'https://videotutoriales.com/maspa/maspa4.jpg', 'https://videotutoriales.com/maspa/maspa4.jpg'),
    new Image('5', 'Primera Imagen', 'Descripción 1er Imagen', 'https://videotutoriales.com/maspa/maspa5.jpg', 'https://videotutoriales.com/maspa/maspa5.jpg'),
    new Image('6', 'Primera Imagen', 'Descripción 1er Imagen', 'https://videotutoriales.com/maspa/maspa6.jpg', 'https://videotutoriales.com/maspa/maspa6.jpg'),
    new Image('7', 'Primera Imagen', 'Descripción 1er Imagen', 'https://videotutoriales.com/maspa/maspa7.jpg', 'https://videotutoriales.com/maspa/maspa7.jpg'),
    new Image('8', 'Primera Imagen', 'Descripción 1er Imagen', 'https://videotutoriales.com/maspa/maspa8.jpg', 'https://videotutoriales.com/maspa/maspa8.jpg'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
