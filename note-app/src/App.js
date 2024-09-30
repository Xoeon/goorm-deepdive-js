import NoteContainer from './components/NoteContainer'
import SideBar from './components/SideBar'
import './App.css'

function App() {
  return (
    <div className='flex min-h-screen w-full'>
      <aside className='flex-shrink-0'>
        <SideBar />
      </aside>
      <main className='h-full w-full'>
        <NoteContainer />
      </main>
    </div>
  )
}

export default App
