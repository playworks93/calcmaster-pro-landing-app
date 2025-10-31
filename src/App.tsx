import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import CalculatorDisplay from './components/CalculatorDisplay'
import ButtonPad from './components/ButtonPad'
import HistoryPanel from './components/HistoryPanel'
import SettingsModal from './components/SettingsModal'
import GraphingTool from './components/GraphingTool'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>CalcMaster Pro</h1>
          <p className="tagline">Empower Your Calculations</p>
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        )}
      </header>

      <main className="app-main">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </main>

      <footer className="app-footer">
        <div className="features">
          <h3>Key Features:</h3>
          <ul>
          <li>Basic Arithmetic Operations</li>
          <li>Advanced Scientific Functions</li>
          <li>Graphing Capabilities</li>
          <li>Data Sharing and Collaboration</li>
          <li>Customizable User Interface</li>
          <li>Performance Analytics Dashboard</li>
          </ul>
        </div>
        <p>&copy; 2025 CalcMaster Pro. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App