import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CreatableSelect from 'react-select/creatable';
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

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    boxShadow: state.isFocused ? 'none' : provided.boxShadow,
    borderColor: state.isFocused ? '#ccc' : provided.borderColor,
    '&:hover': {
      borderColor: state.isFocused ? '#ccc' : provided.borderColor,
    },
    cursor: 'pointer',
    fontSize: '15px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#2F3234' : provided.backgroundColor,
    color: state.isFocused ? '#FFFFFF' : provided.color,
    '&:active': {
      backgroundColor: '#2F3234',
    },
    cursor: 'pointer',
  }),
  multiValue: (provided, state) => ({
    ...provided,
    backgroundColor: state.data.color,
    color: '#fff',
  }),
  multiValueRemove: (provided, state) => ({
    ...provided,
    ':hover': {
      backgroundColor: state.data.color,
    },
  }),
};

const LOCAL_STORAGE_KEY = 'tags';

const TagDropdown = ({ tags, setTags, selectedTags, setSelectedTags }) => {
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
    const newTag = {
      id: uuidv4(),
      value: inputValue,
      label: inputValue,
      color: getRandomColor(),
    };
    const updatedTags = [...tags, newTag];
    setTags(updatedTags);
    setSelectedTags([...selectedTags, newTag]);
  };

  return (
    <CreatableSelect
      isMulti
      value={selectedTags}
      onChange={setSelectedTags}
      options={tags}
      onCreateOption={handleCreateTag}
      placeholder="Create or Select Tags Here!"
      styles={customStyles}
    />
  );
};

export default TagDropdown;
