import { useState } from 'react'

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'advanced_scientific_calculations' ? 'active' : ''}
          onClick={() => setActiveTab('advanced_scientific_calculations')}
        >
          Advanced Scientific Calculations
        </button>
        <button 
          className={activeTab === 'graphing_capabilities' ? 'active' : ''}
          onClick={() => setActiveTab('graphing_capabilities')}
        >
          Graphing Capabilities
        </button>
        <button 
          className={activeTab === 'history_tracking_of_calculations' ? 'active' : ''}
          onClick={() => setActiveTab('history_tracking_of_calculations')}
        >
          History Tracking Of Calculations
        </button>
      </nav>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>Dashboard Overview</h2>
            <div className="cards">
              <div className="card">
                <h3>Total Users</h3>
                <p className="stat">1,234</p>
              </div>
              <div className="card">
                <h3>Active Sessions</h3>
                <p className="stat">567</p>
              </div>
              <div className="card">
                <h3>Revenue</h3>
                <p className="stat">$12,345</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'advanced_scientific_calculations' && (
          <div className="tab-content">
            <h2>Advanced Scientific Calculations</h2>
            <p>Manage your advanced scientific calculations here.</p>
          </div>
        )}

        {activeTab === 'graphing_capabilities' && (
          <div className="tab-content">
            <h2>Graphing Capabilities</h2>
            <p>Manage your graphing capabilities here.</p>
          </div>
        )}

        {activeTab === 'history_tracking_of_calculations' && (
          <div className="tab-content">
            <h2>History Tracking of Calculations</h2>
            <p>Manage your history tracking of calculations here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard