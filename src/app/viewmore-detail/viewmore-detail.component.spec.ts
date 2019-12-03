import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmoreDetailComponent } from './viewmore-detail.component';

describe('ViewmoreDetailComponent', () => {
  let component: ViewmoreDetailComponent;
  let fixture: ComponentFixture<ViewmoreDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmoreDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
