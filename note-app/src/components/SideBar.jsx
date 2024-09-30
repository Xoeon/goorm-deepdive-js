const categories = [
  { id: 1, title: 'All', value: 'all', icon: '/icons/note.svg' },
  { id: 2, title: 'Untagged', value: 'untagged', icon: '/icons/archive.svg' },
]

const SideBar = () => {
  return (
    <nav className='bg-main-darkGray h-full px-5 py-3 text-white'>
      <header className='mb-3'>
        <h1 className='text-lg font-semibold text-white'>Category</h1>
      </header>
      <ul className='flex flex-col gap-1'>
        {categories.map((category) => {
          return (
            <li
              key={category.id}
              className='flex items-center justify-start gap-1'>
              <img className='w-5' src={category.icon} alt={category.title} />
              <p className='text-[15px] text-white'>{category.title}</p>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default SideBar
