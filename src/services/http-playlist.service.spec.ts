import { TestBed } from '@angular/core/testing';

import { HttpPlaylistService } from './http-playlist.service';

describe('HttpPlaylistService', () => {
  let service: HttpPlaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpPlaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
