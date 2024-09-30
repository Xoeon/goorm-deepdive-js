import React from 'react'
import '@toast-ui/editor/dist/toastui-editor-viewer.css'
import { Viewer } from '@toast-ui/react-editor'

const Note = ({ note, onEdit, onDelete }) => {
  const { title, tags, content, date } = note

  return (
    <div className='bg-main-lightGray flex h-[300px] min-w-[300px] flex-col rounded-[5px] p-5 shadow-md'>
      <header className='flex justify-between'>
        <h1 className='text-lg font-semibold'>{title}</h1>
      </header>
      <article className='h-full'>
        <Viewer key={content} initialValue={content} />
      </article>
      <div className='mb-2 flex gap-2'>
        {tags.map((tag) => (
          <p
            key={tag.id}
            className='bg-main-darkGray rounded-[80px] px-3 py-1 text-sm text-white'>
            {tag.label}
          </p>
        ))}
      </div>
      <section className='flex items-center justify-between'>
        <p className='text-sm'>{date}</p>
        <div className='flex gap-1'>
          <button onClick={onEdit}>
            <img className='w-6' src='/icons/edit.svg' alt='edit button' />
          </button>
          <button onClick={onDelete}>
            <img className='w-6' src='icons/trash.svg' alt='deletion' />
          </button>
        </div>
      </section>
    </div>
  )
}

export default Note
