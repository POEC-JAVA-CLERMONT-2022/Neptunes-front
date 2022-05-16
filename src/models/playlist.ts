import {Track} from "./track";

export class Playlist {

  private _id: number = 0;
  private _name: string = '';
  private _tracks: Array<Track> = [];
  private _random: boolean = false;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }


  get tracks(): Array<Track> {
    return this._tracks;
  }

  set tracks(value: Array<Track>) {
    this._tracks = value;
  }

  get random(): boolean {
    return this._random;
  }

  set random(value: boolean) {
    this._random = value;
  }
}
