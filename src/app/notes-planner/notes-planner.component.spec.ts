import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesPlannerComponent } from './notes-planner.component';

describe('NotesPlannerComponent', () => {
  let component: NotesPlannerComponent;
  let fixture: ComponentFixture<NotesPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesPlannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
