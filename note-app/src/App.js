import NoteContainer from './components/NoteContainer'
import SideBar from './components/SideBar'
import './App.css'

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
