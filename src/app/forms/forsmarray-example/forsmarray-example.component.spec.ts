import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForsmarrayExampleComponent } from './forsmarray-example.component';

describe('ForsmarrayExampleComponent', () => {
  let component: ForsmarrayExampleComponent;
  let fixture: ComponentFixture<ForsmarrayExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForsmarrayExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForsmarrayExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
