import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesDatabaseComponent } from './sales-database.component';

describe('SalesDatabaseComponent', () => {
  let component: SalesDatabaseComponent;
  let fixture: ComponentFixture<SalesDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
