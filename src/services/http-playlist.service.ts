import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Playlist} from "../models/playlist";
import {Observable} from "rxjs";
import {UrlApiConstantes} from "./url-api-constantes.service";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class HttpPlaylistService {

  randomPlaylistUrl : String = "/random/5"


  constructor(private httpClient: HttpClient, activatedRoute: ActivatedRoute) {
  }

  getPlaylists(): Observable<Array<Playlist>> {
    return this.httpClient.get<Array<Playlist>>(UrlApiConstantes.urlApiplaylists);
  }

  getRandomPlaylist(): Observable<any> {
    return this.httpClient.post<any>(
      UrlApiConstantes.urlApiplaylists+this.randomPlaylistUrl,
      '',
      UrlApiConstantes.headers
    );
  }

  deletePlaylist(id : number): Observable<String> {
    return this.httpClient.delete<String>(UrlApiConstantes.urlApiplaylists+"/"+id);
  }
}
