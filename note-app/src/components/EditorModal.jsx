import ToastEditor from './ToastEditor'

const EditorModal = ({ body, handleBody, handleModalOpen }) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='w-[70%] rounded-lg bg-white p-6'>
        <ToastEditor handleBody={handleBody} />
        <div className='mt-4 flex gap-3'>
          <button
            className='bg-main-darkGray rounded px-4 py-2 text-white'
            onClick={() => {
              console.log(`Content Saved: ${body}`)
              handleModalOpen()
            }}>
            Save
          </button>
          <button
            className='border-main-darkGray rounded border px-4 py-2'
            onClick={handleModalOpen}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditorModal
