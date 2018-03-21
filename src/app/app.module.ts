import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule,  MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { GalleryModule } from './gallery/core';
import { LightboxModule } from './gallery/lightbox';
import { GallerizeModule } from './gallery/gallerize';

import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    GalleryModule.forRoot(),
    LightboxModule.forRoot(),
    GallerizeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
