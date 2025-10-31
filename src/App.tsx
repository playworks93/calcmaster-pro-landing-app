import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import CalculatorDisplay from './components/CalculatorDisplay'
import ButtonPanel from './components/ButtonPanel'
import HistoryLog from './components/HistoryLog'
import GraphingComponent from './components/GraphingComponent'
import SettingsPanel from './components/SettingsPanel'

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
          <p className="tagline">Your Ultimate Calculation Companion</p>
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
          <li>Advanced Functions (Trigonometric, Logarithmic)</li>
          <li>Graphing Capabilities</li>
          <li>Historical Calculation Log</li>
          <li>Collaboration Tools (Share Calculations)</li>
          <li>Data Analytics Integration</li>
          </ul>
        </div>
        <p>&copy; 2025 CalcMaster Pro. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App