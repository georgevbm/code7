import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { ItemMovieComponent } from './components/item-movie/item-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie/movie.service';

@NgModule({

  declarations: [
    AppComponent,
    MainComponent,
    ItemMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
