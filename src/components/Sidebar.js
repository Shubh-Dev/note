import React from 'react';
import { PropTypes } from 'prop-types';

const Sidebar = (props) => {
  const {
    currentNote, setCurrentNoteId, newNote, notes,
  } = props;

  const noteElements = notes.map((note, index) => (
    <div key={note.id}>

      <div
        className={`title ${note.id === currentNote.id ? 'selected-note' : ''} `}
        onClick={() => setCurrentNoteId(note.id)}
      >
        <h4 className="text-snippet">
          Note
          {index + 1}
        </h4>

      </div>
    </div>
  ));
  return (
    <section className="pane sidebar">
      <div className="sidebar--header">

        <h3>Notes</h3>
        <button className="new-note" onClick={newNote} type="button">+</button>
      </div>
      {noteElements}

    </section>
  );
};

Sidebar.propTypes = {
  currentNote: PropTypes.string.isRequired,
  setCurrentNoteId: PropTypes.string.isRequired,
  newNote: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
};

export default Sidebar;
