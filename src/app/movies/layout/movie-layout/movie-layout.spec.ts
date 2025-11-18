import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLayout } from './movie-layout';

describe('MovieLayout', () => {
  let component: MovieLayout;
  let fixture: ComponentFixture<MovieLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
