import { Component, OnInit } from '@angular/core';
import {Playlist} from "../../models/playlist";
import {HttpPlaylistService} from "../../services/http-playlist.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  apiResult: Array<Playlist>|undefined;
  paramId: number|undefined;
  playlist: String|undefined;

  constructor(private playlistService: HttpPlaylistService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.playlistService.getPlaylists().subscribe((results) => {
      this.apiResult = results;
      console.log(this.apiResult)
    });
  }

  deletePlaylist(id: number): void {
    this.activatedRoute.params.subscribe(() => {
      this.paramId = id;
      if (this.paramId) {
        this.playlistService.deletePlaylist(this.paramId).subscribe((playlist) => {
          this.playlist = playlist;
        });
      }
    });
    window.location.reload()
  }
}
