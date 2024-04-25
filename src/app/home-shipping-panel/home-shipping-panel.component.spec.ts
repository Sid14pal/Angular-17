import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShippingPanelComponent } from './home-shipping-panel.component';

describe('HomeShippingPanelComponent', () => {
  let component: HomeShippingPanelComponent;
  let fixture: ComponentFixture<HomeShippingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeShippingPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeShippingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
