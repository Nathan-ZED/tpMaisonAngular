import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdViewComponent } from './create-ad-view.component';

describe('CreateAdViewComponent', () => {
  let component: CreateAdViewComponent;
  let fixture: ComponentFixture<CreateAdViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAdViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
