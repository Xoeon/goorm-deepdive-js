const Note = () => {
  return (
    <div className='bg-main-lightGray flex h-[300px] min-w-[300px] flex-grow flex-col rounded-[5px] p-5 shadow-md'>
      <header className='flex justify-between'>
        <p>title</p>
        <div className='flex'>
          <p>priority</p>
          <p>pin</p>
        </div>
      </header>
      <article className='h-full'>content</article>
      <div>tag</div>
      <section className='flex justify-between'>
        <p>date</p>
        <div>icons</div>
      </section>
    </div>
  )
}

export default Note
