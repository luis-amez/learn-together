import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploScreenComponent } from './explo-screen.component';

describe('ExploScreenComponent', () => {
  let component: ExploScreenComponent;
  let fixture: ComponentFixture<ExploScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
