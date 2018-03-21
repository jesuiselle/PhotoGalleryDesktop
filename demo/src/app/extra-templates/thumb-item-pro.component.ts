import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
// import { GalleryItemComponent } from '@ngx-gallery/core';
import { GalleryItemComponent } from '../gallery/core';

@Component({
  selector: 'thumbnail-item-pro',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  template: `
    <div class="thumb-pro-pic" [lazyImage]="data.thumbSrc"></div>
    <div class="thumb-pro-body">
      <div fxLayout="column" fxLayoutAlign="space-around start">
        <div fxLayout fxLayoutAlign="start center">
          <mat-icon class="likes">thumb_up</mat-icon>
          {{data.likes | nFormatter}}
        </div>
        <div fxLayout fxLayoutAlign="start center">
          <mat-icon class="favs">favorite</mat-icon>
          {{data.favorites | nFormatter}}
        </div>
        <div fxLayout fxLayoutAlign="start center">
          <mat-icon class="views">remove_red_eye</mat-icon>
          {{data.views | nFormatter}}
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      font-size: 12px;
    }

    .thumb-pro-pic {
      width: 70px;
      height: 70px;
      background-size: cover;
      margin-right: 10px;
    }

    .thumb-pro-body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      color: white;
    }
  `]
})
export class ThumbnailItemProComponent implements GalleryItemComponent {
  @Input() data: any;
}
