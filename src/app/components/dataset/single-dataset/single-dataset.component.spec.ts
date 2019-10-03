import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDatasetComponent } from './single-dataset.component';

describe('SingleDatasetComponent', () => {
  let component: SingleDatasetComponent;
  let fixture: ComponentFixture<SingleDatasetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDatasetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
