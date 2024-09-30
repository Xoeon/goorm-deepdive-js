import { useState } from 'react'
import CreatableSelect from 'react-select/creatable'

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
]

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex]
}

const TagModal = () => {
  const [selectedTags, setSelectedTags] = useState([])

  const [tags, setTags] = useState([
    { value: 'personal', label: 'Personal', color: getRandomColor() },
    { value: 'dev', label: 'Dev', color: getRandomColor() },
  ])

  const handleCreateTag = (inputValue) => {
    const newTag = { value: inputValue, label: inputValue }
    setTags([...tags, newTag])
    setSelectedTags([...selectedTags, newTag])
  }

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      boxShadow: state.isFocused ? 'none' : provided.boxShadow,
      borderColor: state.isFocused ? '#ccc' : provided.borderColor,
      '&:hover': {
        borderColor: state.isFocused ? '#ccc' : provided.borderColor,
      },
      cursor: 'pointer',
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
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='flex w-[50%] flex-col gap-5 rounded-lg bg-white p-6'>
        <h2>Create or Select Tags</h2>
        <CreatableSelect
          isMulti
          value={selectedTags}
          onChange={setSelectedTags}
          options={tags}
          onCreateOption={handleCreateTag}
          placeholder='Enter tag name!'
          styles={customStyles}
        />
      </div>
    </div>
  )
}

export default TagModal
