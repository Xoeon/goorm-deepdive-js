import TagDropdown from './TagDropdown'
import ToastEditor from './ToastEditor'

const EditorModal = ({
  title,
  body,
  selectedOptions,
  handleTitleChange,
  handleBody,
  handleSaveNote,
  handleCancelNote,
  handleTagChange,
}) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='w-[70%] rounded-lg bg-white p-6'>
        <header className='mb-4 flex gap-4'>
          <input
            className='w-full rounded-[3px] border border-[#ccc] px-2 py-1 text-sm focus:outline-none'
            type='text'
            placeholder='Title'
            value={title}
            onChange={handleTitleChange}
          />
          <TagDropdown
            selectedOptions={selectedOptions}
            handleTagChange={handleTagChange}
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
