import { useState } from 'react';
import TagModal from './TagModal';

const categories = [
  { id: 1, title: 'All', value: 'all', icon: '/icons/note.svg' },
  { id: 2, title: 'Untagged', value: 'untagged', icon: '/icons/archive.svg' },
];

const SideBar = ({ tags, setTags, selectedCategory, handleCategory }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="h-full justify-start bg-main-darkGray px-5 py-3 text-white">
      <header className="mb-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-white">Category</h1>
        <button
          className="flex h-5 w-5 items-center cursor-pointer justify-center rounded-full border border-white text-white"
          onClick={handleModalOpen}
        >
          +
        </button>
      </header>
      <ul className="flex flex-col gap-1">
        {categories.map((category) => {
          return (
            <li
              key={category.id}
              className="flex cursor-pointer items-center justify-start gap-1"
              onClick={() => handleCategory(category.value)}
            >
              <img className="w-5" src={category.icon} alt={category.title} />
              <p
                className={`text-[15px] text-white ${
                  selectedCategory === category.value && 'font-semibold'
                }`}
              >
                {category.title}
              </p>
            </li>
          );
        })}
        {tags?.map((tag) => {
          return (
            <li
              key={tag.id}
              className="flex cursor-pointer items-center justify-start gap-1"
              onClick={() => handleCategory(tag.value)}
            >
              <img className="w-5" src="/icons/clip.svg" alt="clip" />
              <p
                className={`text-[15px] text-white ${
                  selectedCategory === tag.value && 'font-semibold'
                }`}
              >
                {tag.label}
              </p>
            </li>
          );
        })}
      </ul>
      {isModalOpen && (
        <TagModal
          tags={tags}
          setTags={setTags}
          handleModalOpen={handleModalOpen}
        />
      )}
    </nav>
  );
};

export default SideBar;
