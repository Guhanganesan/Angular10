import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReactiveFormsComponent } from './my-reactive-forms.component';

describe('MyReactiveFormsComponent', () => {
  let component: MyReactiveFormsComponent;
  let fixture: ComponentFixture<MyReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyReactiveFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
