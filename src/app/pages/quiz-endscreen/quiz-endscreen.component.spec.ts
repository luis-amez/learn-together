import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizEndscreenComponent } from './quiz-endscreen.component';

describe('QuizEndscreenComponent', () => {
  let component: QuizEndscreenComponent;
  let fixture: ComponentFixture<QuizEndscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizEndscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizEndscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
