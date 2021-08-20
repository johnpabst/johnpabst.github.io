import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftOrderModuleComponent } from './draft-order-module.component';

describe('DraftOrderModuleComponent', () => {
  let component: DraftOrderModuleComponent;
  let fixture: ComponentFixture<DraftOrderModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftOrderModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftOrderModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
