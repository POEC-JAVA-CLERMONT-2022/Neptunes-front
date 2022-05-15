import { Component} from '@angular/core';
import {HttpPlaylistService} from "../../services/http-playlist.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private playlistService : HttpPlaylistService) { }

  randomPlaylist: void|undefined;

  getRandomPlaylist(): void {
    this.playlistService.getRandomPlaylist().subscribe((results) => {
      this.randomPlaylist = results;
    });
    location.reload()
  }
}
