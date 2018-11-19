import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostChirpComponent } from './post-chirp.component';

describe('PostChirpComponent', () => {
  let component: PostChirpComponent;
  let fixture: ComponentFixture<PostChirpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostChirpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostChirpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
