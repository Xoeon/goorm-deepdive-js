import NoteContainer from './components/NoteContainer';
import SideBar from './components/SideBar';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import getLocalStorage from './utils/getLocalStorage';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);

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

  const getInitialTags = () => {
    const savedTags = getLocalStorage('tags');
    return savedTags ? JSON.parse(savedTags) : [];
  };

  const [tags, setTags] = useState(getInitialTags);

  useEffect(() => {
    localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex min-h-screen w-full">
      <aside className="w-[200px] flex-shrink-0">
        <SideBar
          notes={notes}
          setNotes={setNotes}
          tags={tags}
          setTags={setTags}
          selectedCategory={selectedCategory}
          handleCategory={handleCategory}
        />
      </aside>
      <main className="h-full flex-grow">
        <NoteContainer
          notes={notes}
          setNotes={setNotes}
          filteredNotes={filteredNotes}
          tags={tags}
          setTags={setTags}
        />
      </main>
    </div>
  );
}

export default App;
