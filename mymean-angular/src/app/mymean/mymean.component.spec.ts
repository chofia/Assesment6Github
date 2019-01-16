import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymeanComponent } from './mymean.component';

describe('MymeanComponent', () => {
  let component: MymeanComponent;
  let fixture: ComponentFixture<MymeanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymeanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
