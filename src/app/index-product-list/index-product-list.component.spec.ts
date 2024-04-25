import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexProductListComponent } from './index-product-list.component';

describe('IndexProductListComponent', () => {
  let component: IndexProductListComponent;
  let fixture: ComponentFixture<IndexProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexProductListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
