import { TestBed } from '@angular/core/testing';

import { SwiperCustomElementService } from './swiper-custom-element.service';

describe('SwiperCustomElementService', () => {
  let service: SwiperCustomElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwiperCustomElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
