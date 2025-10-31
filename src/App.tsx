import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import AuthComponent from './components/AuthComponent'
import CalculatorComponent from './components/CalculatorComponent'
import ChartComponent from './components/ChartComponent'
import HistoryComponent from './components/HistoryComponent'
import WorkspaceComponent from './components/WorkspaceComponent'

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
          <p className="tagline">Effortless Calculations, Insightful Analytics</p>
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
          <li>User Authentication & Onboarding</li>
          <li>Real-time Calculations</li>
          <li>Data Visualization & Charts</li>
          <li>Collaborative Workspaces</li>
          <li>Customizable Calculations</li>
          <li>History Tracking & Management</li>
          </ul>
        </div>
        <p>&copy; 2025 CalcMaster Pro. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App