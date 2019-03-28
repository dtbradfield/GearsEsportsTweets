import { TestBed } from '@angular/core/testing';

import { EsportsTweetsService } from './esports-tweets.service';

describe('EsportsTweetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EsportsTweetsService = TestBed.get(EsportsTweetsService);
    expect(service).toBeTruthy();
  });
});
