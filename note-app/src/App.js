import './App.css'
import NoteContainer from './components/NoteContainer'
import SideBar from './components/SideBar'

function App() {
  return (
    <div className='flex h-screen w-full'>
      <aside className='flex-shrink-0'>
        <SideBar />
      </aside>
      <main className='w-full'>
        <NoteContainer />
      </main>
    </div>
  )
}

export default App
