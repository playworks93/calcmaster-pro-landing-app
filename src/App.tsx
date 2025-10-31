import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import AuthComponent from './components/AuthComponent'
import CalculatorComponent from './components/CalculatorComponent'
import AnalyticsDashboardComponent from './components/AnalyticsDashboardComponent'
import HistoryComponent from './components/HistoryComponent'
import CollaborationComponent from './components/CollaborationComponent'

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
          <p className="tagline">Your Advanced Calculation Companion</p>
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
          <li>Basic Arithmetic Functions (Addition, Subtraction, Multiplication, Division)</li>
          <li>Advanced Calculations (Scientific, Graphing)</li>
          <li>Analytics Dashboard for Insights</li>
          <li>Collaboration Tools for Sharing Results</li>
          <li>History of Calculations</li>
          </ul>
        </div>
        <p>&copy; 2025 CalcMaster Pro. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App