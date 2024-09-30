import { useState } from 'react'
import EditorModal from './EditorModal'
import { v4 as uuidv4 } from 'uuid'
import Note from './Note'
import dateFormatter from '../utils/dateFormatter'
import toast, { Toaster } from 'react-hot-toast'

const NoteContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [notes, setNotes] = useState([])
  const [selectedOptions, setSelectedOptions] = useState([])

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleBody = (html) => {
    setBody(html)
  }

  const handleSaveNote = () => {
    if (body.trim()) {
      setNotes([
        ...notes,
        {
          id: uuidv4(),
          title: title,
          tags: selectedOptions,
          content: body,
          date: dateFormatter(Date.now()),
        },
      ])
      setTitle('')
      setSelectedOptions([])
      setBody('')
      setIsModalOpen(false)
    }
  }

  const handleCancelNote = () => {
    setTitle('')
    setSelectedOptions([])
    setBody('')
    setIsModalOpen(false)
  }

  const handleTagChange = (options) => {
    if (options.length <= 2) {
      setSelectedOptions(options)
    } else {
      toast.error('태그는 최대 2개까지 생성 가능합니다.')
    }
  }

  return (
    <>
      <Toaster />
      <div className='min-h-screen w-full px-5 py-3'>
        <header className='mb-3 flex justify-between'>
          <h1 className='text-lg font-semibold'>Notes</h1>
          <button
            className='border-main-darkGray flex h-5 w-5 items-center justify-center rounded-full border'
            onClick={() => setIsModalOpen(true)}>
            +
          </button>
        </header>
        {notes.length > 0 ? (
          <article className='flex flex-wrap gap-5'>
            {notes.map((note) => (
              <Note key={note.id} note={note} />
            ))}
          </article>
        ) : (
          <p className='flex min-h-screen items-center justify-center text-2xl text-main-gray'>
            No notes have been created yet.
          </p>
        )}
        {isModalOpen && (
          <EditorModal
            title={title}
            selectedOptions={selectedOptions}
            handleTitleChange={handleTitleChange}
            handleBody={handleBody}
            handleSaveNote={handleSaveNote}
            handleCancelNote={handleCancelNote}
            handleTagChange={handleTagChange}
          />
        )}
      </div>
    </>
  )
}

export default NoteContainer
