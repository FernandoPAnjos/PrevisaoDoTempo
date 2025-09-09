import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheaterCards } from './wheater-cards';

describe('WheaterCards', () => {
  let component: WheaterCards;
  let fixture: ComponentFixture<WheaterCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WheaterCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheaterCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
