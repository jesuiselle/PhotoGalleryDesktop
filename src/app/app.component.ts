import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from './gallery/core';
import { Lightbox } from './gallery/lightbox';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {
  items: GalleryItem[];
  result: any[];
  constructor(public gallery: Gallery, public lightbox: Lightbox, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('https://my-json-server.typicode.com/jesuiselle/photo/db')
      .subscribe(response => {
        console.log('res');
        console.log(response['photo-gallery'].photos);
        console.log(this.result);
        this.result = response['photo-gallery'].photos;
      });
    // This is for Lightbox example
    this.gallery.ref('lightbox').load(this.items);
  }
}

