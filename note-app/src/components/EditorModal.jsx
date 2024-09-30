import ToastEditor from './ToastEditor'
import TagDropdown from './TagDropdown'

const EditorModal = ({
  title,
  body,
  tags,
  setTags,
  selectedTags,
  setSelectedTags,
  handleTitleChange,
  handleBody,
  handleSaveNote,
  handleCancelNote,
}) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='w-[70%] rounded-lg bg-white p-6'>
        <header className='mb-4 flex flex-col gap-4'>
          <input
            className='w-full rounded-[3px] border border-[#ccc] p-2 text-sm focus:outline-none'
            type='text'
            placeholder='Title'
            value={title}
            onChange={handleTitleChange}
          />
          <TagDropdown
            tags={tags}
            setTags={setTags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        </header>
        <ToastEditor body={body} handleBody={handleBody} />
        <div className='mt-4 flex gap-3'>
          <button
            className='bg-main-darkGray rounded px-4 py-2 text-white'
            onClick={handleSaveNote}>
            Save
          </button>
          <button
            className='border-main-darkGray rounded border px-4 py-2'
            onClick={handleCancelNote}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditorModal
