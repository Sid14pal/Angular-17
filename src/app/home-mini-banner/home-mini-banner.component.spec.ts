import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMiniBannerComponent } from './home-mini-banner.component';

describe('HomeMiniBannerComponent', () => {
  let component: HomeMiniBannerComponent;
  let fixture: ComponentFixture<HomeMiniBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeMiniBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeMiniBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
