import React from "react";
import { Note } from "./Note";
import { Addnote } from "./Addnote";

export const NoteList = ({ notes, handleAddNote, deletenote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return (
          <Note
            id={note.id}
            text={note.text}
            date={note.date}
            deletenote={deletenote}
          />
        );
      })}
      <Addnote handleAddNote={handleAddNote} />
    </div>
  );
};
