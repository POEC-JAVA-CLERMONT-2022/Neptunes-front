import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { UserComponent } from './user/user.component';
import { TrackComponent } from './track/track.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ScoreComponent } from './score/score.component';
import { ThemeComponent } from './theme/theme.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    UserComponent,
    TrackComponent,
    PlaylistComponent,
    ScoreComponent,
    ThemeComponent,
    CardComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
