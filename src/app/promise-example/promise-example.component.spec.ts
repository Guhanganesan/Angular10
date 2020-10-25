import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseExampleComponent } from './promise-example.component';

describe('PromiseExampleComponent', () => {
  let component: PromiseExampleComponent;
  let fixture: ComponentFixture<PromiseExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromiseExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
