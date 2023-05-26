import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

// Components
import NavBar from './components/NavBar/NavBar';

//Pages
import HomePage from './pages/Home/HomePage';
import ChoresPage from './pages/Chores/ChoresPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <aside>
            <h1>Chores App</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/chores">Chores</Link></li>
                <li><Link to="/calendar">Calendar</Link></li>
                <li><Link to="/family">Family</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </aside>

        <main>
          <NavBar />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chores" element={<ChoresPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
