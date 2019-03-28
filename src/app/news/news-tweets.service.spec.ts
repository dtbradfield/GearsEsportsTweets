import { TestBed } from '@angular/core/testing';

import { NewsTweetsService } from './news-tweets.service';

describe('NewsTweetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsTweetsService = TestBed.get(NewsTweetsService);
    expect(service).toBeTruthy();
  });
});
