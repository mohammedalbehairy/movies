import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSwiperComponent } from './list-swiper.component';

describe('ListSwiperComponent', () => {
  let component: ListSwiperComponent;
  let fixture: ComponentFixture<ListSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSwiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
