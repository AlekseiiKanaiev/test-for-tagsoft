import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';
import { LayoutComponent } from './components/layout/layout.component';
import { GetDataService } from './_services/getData.service';

@NgModule({
  declarations: [
    AppComponent,
    RickAndMortyComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
