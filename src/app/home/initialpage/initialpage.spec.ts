import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Initialpage } from './initialpage';

describe('Initialpage', () => {
  let component: Initialpage;
  let fixture: ComponentFixture<Initialpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Initialpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Initialpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
