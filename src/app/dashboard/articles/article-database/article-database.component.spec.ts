import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDatabaseComponent } from './article-database.component';

describe('ArticleDatabaseComponent', () => {
  let component: ArticleDatabaseComponent;
  let fixture: ComponentFixture<ArticleDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
