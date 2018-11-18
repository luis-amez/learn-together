import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChirpComponent } from './chirp.component';

describe('ChirpComponent', () => {
  let component: ChirpComponent;
  let fixture: ComponentFixture<ChirpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChirpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChirpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
