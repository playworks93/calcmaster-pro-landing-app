import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import CalculatorDisplay from './components/CalculatorDisplay'
import InputPanel from './components/InputPanel'
import GraphingArea from './components/GraphingArea'
import AnalyticsDashboard from './components/AnalyticsDashboard'
import UserSettings from './components/UserSettings'

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
          <p className="tagline">Advanced Calculator with Collaboration Tools</p>
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
          <li>Real-time Collaboration</li>
          <li>Advanced Graphing Capabilities</li>
          <li>Customizable Calculations and Functions</li>
          <li>Data Analytics Dashboard</li>
          <li>User-Friendly Interface</li>
          <li>Multi-Device Synchronization</li>
          </ul>
        </div>
        <p>&copy; 2025 CalcMaster Pro. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App