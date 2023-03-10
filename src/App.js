import React, { useState, useEffect } from 'react';
import Split from 'react-split';
import { nanoid } from 'nanoid';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
// import { data } from './data';
import './App.css';

function App() {
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem('notes')) || []);
  const [currentNoteId, setCurrentNoteId] = useState((notes[0] && notes[0].id) || '');

  useEffect(() => (
    localStorage.setItem('notes', JSON.stringify(notes))
  ), [notes]);

  const createNewNote = () => {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };

    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  };

  const updateNote = (text) => {
    setNotes((oldNotes) => oldNotes.map((oldNote) => (oldNote.id === currentNoteId
      ? { ...oldNote, body: text } : oldNote)));
  };

  const findCurrentNote = () => notes.find((note) => note.id === currentNoteId) || notes[0];

  return (
    <main className="App">
      { notes.length > 0
        ? (
          <Split sizes={[30, 70]} direction="horizontal" className="split">
            <Sidebar
              notes={notes}
              currentNote={findCurrentNote()}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
            />
            {currentNoteId
          && notes.length > 0

          && (
          <Editor
            currentNote={findCurrentNote()}
            updateNote={updateNote}
          />
          )}

          </Split>
        )
        : (
          <div className="no-notes">
            <h1>You have no notes</h1>
            <button
              className="first-note"
              onClick={createNewNote}
              type="button"
            >
              Create one now
            </button>
          </div>
        )}
    </main>
  );
}

export default App;
