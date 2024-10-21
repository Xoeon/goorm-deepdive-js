import { useState } from 'react';
import EditorModal from './EditorModal';
import { v4 as uuidv4 } from 'uuid';
import Note from './Note';
import dateFormatter from '../utils/dateFormatter';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import getLocalStorage from '../utils/getLocalStorage';
import setLocalStorage from '../utils/setLocalStorage';

const NoteContainer = ({ tags, setTags, selectedCategory }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    const savedNotes = getLocalStorage('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredNotes(notes);
    } else if (selectedCategory === 'untagged') {
      setFilteredNotes(notes.filter((note) => note.tags.length === 0));
    } else {
      setFilteredNotes(
        notes.filter((note) =>
          note.tags.some((tag) => tag.value === selectedCategory)
        )
      );
    }
  }, [selectedCategory, notes]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBody = (html) => {
    setBody(html);
  };

  const handleSaveNote = () => {
    if (body.trim()) {
      if (editingNote) {
        const updatedNotes = notes.map((note) =>
          note.id === editingNote.id
            ? {
                ...note,
                title,
                tags: selectedTags,
                content: body,
                date: dateFormatter(Date.now()),
              }
            : note
        );
        setNotes(updatedNotes);
        setLocalStorage('notes', updatedNotes);
      } else {
        const newNote = {
          id: uuidv4(),
          title: title,
          tags: selectedTags,
          content: body,
          date: dateFormatter(Date.now()),
        };
        const updatedNotes = [...notes, newNote];
        setNotes(updatedNotes);
        setLocalStorage('notes', updatedNotes);
      }

      setTitle('');
      setSelectedTags([]);
      setBody('');
      setIsModalOpen(false);
      setEditingNote(null);
    }
  };

  const handleCancelNote = () => {
    setTitle('');
    setSelectedTags([]);
    setBody('');
    setIsModalOpen(false);
    setEditingNote(null);
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
    setTitle(note.title);
    setSelectedTags(note.tags);
    setBody(note.content);
    setIsModalOpen(true);
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    setLocalStorage('notes', updatedNotes);
    toast.success('노트가 삭제되었습니다.');
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen w-full px-5 py-3">
        <header className="mb-3 flex justify-between">
          <h1 className="text-lg font-semibold">Notes</h1>
          <button
            className="border-main-darkGray flex h-5 w-5 items-center justify-center rounded-full border"
            onClick={() => setIsModalOpen(true)}
          >
            +
          </button>
        </header>
        {filteredNotes.length > 0 ? (
          <article className="flex flex-wrap gap-5">
            {filteredNotes.map((note) => (
              <Note
                key={note.id}
                note={note}
                onEdit={() => handleEditNote(note)}
                onDelete={() => handleDeleteNote(note.id)}
              />
            ))}
          </article>
        ) : (
          <p className="flex min-h-screen items-center justify-center text-2xl text-main-gray">
            No notes have been created yet.
          </p>
        )}
        {isModalOpen && (
          <EditorModal
            title={title}
            body={body}
            tags={tags}
            setTags={setTags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            handleTitleChange={handleTitleChange}
            handleBody={handleBody}
            handleSaveNote={handleSaveNote}
            handleCancelNote={handleCancelNote}
          />
        )}
      </div>
    </>
  );
};

export default NoteContainer;
