import { Component, OnInit } from '@angular/core';
import {Playlist} from "../../models/playlist";
import {HttpPlaylistService} from "../../services/http-playlist.service";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  apiResult: Array<Playlist>|undefined;

  constructor(private playlistService: HttpPlaylistService) {
  }

  ngOnInit(): void {
    this.playlistService.getPlaylists().subscribe((results) => {
      this.apiResult = results;
      console.log(this.apiResult)
    });
  }
}
