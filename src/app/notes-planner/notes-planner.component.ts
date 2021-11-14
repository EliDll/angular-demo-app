import { Component, OnInit } from '@angular/core';

type Note = {
  title: string,
  description: string
}


@Component({
  selector: 'app-notes-planner',
  templateUrl: './notes-planner.component.html',
  styleUrls: ['./notes-planner.component.css']
})
export class NotesPlannerComponent implements OnInit {

  showNotes: boolean = true;

  notes: Note[];
  tempTitle: string = "Sample title";
  tempDescription: string = "This is a description";

  constructor() {
    this.notes = [];
   }

  ngOnInit(): void {

  }



  addNote(){
    let newNote: Note = {title: this.tempTitle, description: this.tempDescription};
    this.notes.push(newNote);
  }

  toggleNotes(){
    this.showNotes = !this.showNotes;
  }

}
