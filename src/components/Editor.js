import React, { useState } from 'react';
import ReactMde from 'react-mde';
import Showdown from 'showdown';
import { PropTypes } from 'prop-types';

const Editor = ({ currentNote, updateNote }) => {
  const [selectedTab, setSelectedTab] = useState('Write');

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return (
    <section className="pane editor">
      <ReactMde
        value={currentNote.body}
        onChange={updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) => Promise.resolve(converter.makeHtml(markdown))}
        minEditorHeight={80}
        heightUnits="vh"
      />

    </section>
  );
};

Editor.propTypes = {
  currentNote: PropTypes.string.isRequired,
  updateNote: PropTypes.string.isRequired,
};

export default Editor;
