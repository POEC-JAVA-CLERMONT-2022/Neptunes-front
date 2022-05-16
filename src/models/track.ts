export class Track {

  private _id: number = 0;
  private _trackName: string = '';
  private _trackAuthor: string = '';
  private _trackReleaseYear: string = '';
  private _trackURL: string = '';


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get trackName(): string {
    return this._trackName;
  }

  set trackName(value: string) {
    this._trackName = value;
  }

  get trackAuthor(): string {
    return this._trackAuthor;
  }

  set trackAuthor(value: string) {
    this._trackAuthor = value;
  }

  get trackRelaeseYear(): string {
    return this._trackReleaseYear;
  }

  set trackRelaeseYear(value: string) {
    this._trackReleaseYear = value;
  }

  get trackURL(): string {
    return this._trackURL;
  }

  set trackURL(value: string) {
    this._trackURL = value;
  }
}
