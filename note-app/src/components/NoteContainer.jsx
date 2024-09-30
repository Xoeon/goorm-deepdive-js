import Note from './Note'

const NoteContainer = () => {
  return (
    <div className='w-full px-5 py-3'>
      <header className='mb-3 flex justify-between'>
        <h1 className='text-lg font-semibold'>Notes</h1>
        <button className='border-main-darkGray flex h-5 w-5 items-center justify-center rounded-full border'>
          +
        </button>
      </header>
      <article className='flex flex-wrap gap-5'>
        <Note />
        <Note />
        <Note />
        <Note />
      </article>
    </div>
  )
}

export default NoteContainer
