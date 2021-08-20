import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftOrderCardComponent } from './draft-order-card.component';

describe('DraftOrderCardComponent', () => {
  let component: DraftOrderCardComponent;
  let fixture: ComponentFixture<DraftOrderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftOrderCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
