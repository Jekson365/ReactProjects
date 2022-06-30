import { useState } from "react";
import "./App.css";
import { NoteList } from "./components/NoteList";



function App() {
  const [notes, setNotes] = useState([
    {
    text: "This is my first note",
    date: "15/04/2021",
    id:Math.floor(Math.random() * 999999)
    },
    {
      text: "This is my second note",
      date: "15/04/2021",
      id:Math.floor(Math.random() * 999999)
    },
    {
      text: "This is my third note",
      date: "15/04/2021",
      id:Math.floor(Math.random() * 999999)
    },
  ])
  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id:Math.floor(Math.random() * 999999),
      text: text,
      date:date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)

    setNotes(newNotes)
  }
  return (
    <div className="container">
      <NoteList notes={notes} handleAddNote={addNote} deletenote={deleteNote} />
    </div>
    
  );
}

export default App;
