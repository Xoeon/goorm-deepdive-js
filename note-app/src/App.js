import NoteContainer from './components/NoteContainer'
import SideBar from './components/SideBar'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import getLocalStorage from './utils/getLocalStorage'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const getInitialTags = () => {
    const savedTags = getLocalStorage('tags')
    return savedTags ? JSON.parse(savedTags) : []
  }

  const [tags, setTags] = useState(getInitialTags)

  useEffect(() => {
    localStorage.setItem('tags', JSON.stringify(tags))
  }, [tags])

  return (
    <div className='flex min-h-screen w-full'>
      <aside className='w-[200px] flex-shrink-0'>
        <SideBar tags={tags} selectedCategory={selectedCategory} />
      </aside>
      <main className='h-full flex-grow'>
        <NoteContainer tags={tags} setTags={setTags} />
      </main>
    </div>
  )
}

export default App
