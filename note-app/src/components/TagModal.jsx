import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';
import getLocalStorage from '../utils/getLocalStorage';
import setLocalStorage from '../utils/setLocalStorage';

const colors = [
  '#E3E2E0',
  '#F1F0F0',
  '#ECE0DB',
  '#F5DFCC',
  '#F5E5C0',
  '#DEECDC',
  '#D6E4EE',
  '#E6DEED',
  '#F1E1E9',
  '#FAE3DE',
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const getDarkerColor = (color, percent) => {
  const num = parseInt(color.slice(1), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = ((num >> 8) & 0x00ff) - amt;
  const B = (num & 0x0000ff) - amt;

  return `#${(
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  )
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
};

const LOCAL_STORAGE_KEY = 'tags';
const RESERVED_TAGS = ['all', 'untagged'];

const TagModal = ({ notes, setNotes, tags, setTags, handleModalOpen }) => {
  const [isComposing, setIsComposing] = useState(false);

  useEffect(() => {
    const storedTags = getLocalStorage(LOCAL_STORAGE_KEY);
    if (storedTags && Array.isArray(storedTags)) {
      setTags(storedTags);
    }
  }, [setTags]);

  useEffect(() => {
    if (tags.length > 0) {
      setLocalStorage(LOCAL_STORAGE_KEY, tags);
    }
  }, [tags]);

  const handleCreateTag = (inputValue) => {
    const normalizedInput = inputValue.toLowerCase();

    const isDuplicate = tags.some(
      (tag) => tag.value.toLowerCase() === normalizedInput
    );
    if (isDuplicate) {
      toast.error('This tag already exists!');
      return;
    }

    const isReserved = RESERVED_TAGS.includes(normalizedInput);
    if (isReserved) {
      toast.error(`'${inputValue}' is a reserved tag.`);
      return;
    }

    const newTag = {
      id: uuidv4(),
      value: inputValue,
      label: inputValue,
      color: getRandomColor(),
    };
    const updatedTags = [...tags, newTag];
    setTags(updatedTags);
  };

  const handleDeleteTag = (tagToDelete) => {
    const updatedTags = tags.filter((tag) => tag.id !== tagToDelete.id);
    setTags(updatedTags);

    const updatedNotes = notes.map((note) => ({
      ...note,
      tags: note.tags.filter((tag) => tag.id !== tagToDelete.id), // 해당 태그 제거
    }));

    setNotes(updatedNotes);
    setLocalStorage('notes', updatedNotes);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <Toaster />
      <div className="flex w-[50%] flex-col gap-5 rounded-lg bg-white p-6">
        <header className="flex items-center w-full justify-between">
          <h2>Create or Delete Tags</h2>
          <button className="text-xl" onClick={handleModalOpen}>
            ×
          </button>
        </header>
        <input
          type="text"
          placeholder="Enter a tag and press enter"
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          onKeyDown={(e) => {
            if (
              !isComposing &&
              e.key === 'Enter' &&
              e.target.value.trim() !== ''
            ) {
              handleCreateTag(e.target.value);
              e.target.value = '';
            }
          }}
          className="focus:outline-none border p-2"
        />
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag.value}
              className="flex items-center space-x-2 rounded-[2px] px-2 py-1 text-white"
              style={{ backgroundColor: tag.color }}
            >
              <span className="text-sm">{tag.label}</span>
              <button
                className="text-white text-xs bg-transparent border-0 focus:outline-none"
                style={{ color: getDarkerColor(tag.color, 20) }}
                onClick={() => handleDeleteTag(tag)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TagModal;
