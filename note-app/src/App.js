import NoteContainer from './components/NoteContainer';
import SideBar from './components/SideBar';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import getLocalStorage from './utils/getLocalStorage';
import TagModal from './components/TagModal';
import TagDropdown from './components/TagDropdown';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');

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
          tags={tags}
          setTags={setTags}
          selectedCategory={selectedCategory}
          handleCategory={handleCategory}
        />
      </aside>
      <main className="h-full flex-grow">
        <NoteContainer
          tags={tags}
          setTags={setTags}
          selectedCategory={selectedCategory}
        />
      </main>
    </div>
  );
}

export default App;
