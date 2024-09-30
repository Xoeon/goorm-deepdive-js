import { useState } from 'react'
import EditorModal from './EditorModal'
import Note from './Note'

const NoteContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [body, setBody] = useState('')

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleBody = (html) => {
    setBody(html)
  }

  return (
    <div className='w-full px-5 py-3'>
      <header className='mb-3 flex justify-between'>
        <h1 className='text-lg font-semibold'>Notes</h1>
        <button
          className='border-main-darkGray flex h-5 w-5 items-center justify-center rounded-full border'
          onClick={handleModalOpen}>
          +
        </button>
      </header>
      <article className='flex flex-wrap gap-5'>
        <Note body={body} />
      </article>
      {isModalOpen && (
        <EditorModal
          body={body}
          handleModalOpen={handleModalOpen}
          handleBody={handleBody}
        />
      )}
    </div>
  )
}

export default NoteContainer
