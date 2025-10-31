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
          className={activeTab === 'real_time_collaboration' ? 'active' : ''}
          onClick={() => setActiveTab('real_time_collaboration')}
        >
          Real Time Collaboration
        </button>
        <button 
          className={activeTab === 'advanced_graphing_capabilities' ? 'active' : ''}
          onClick={() => setActiveTab('advanced_graphing_capabilities')}
        >
          Advanced Graphing Capabilities
        </button>
        <button 
          className={activeTab === 'customizable_calculations_and_functions' ? 'active' : ''}
          onClick={() => setActiveTab('customizable_calculations_and_functions')}
        >
          Customizable Calculations And Functions
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

        {activeTab === 'real_time_collaboration' && (
          <div className="tab-content">
            <h2>Real-time Collaboration</h2>
            <p>Manage your real time collaboration here.</p>
          </div>
        )}

        {activeTab === 'advanced_graphing_capabilities' && (
          <div className="tab-content">
            <h2>Advanced Graphing Capabilities</h2>
            <p>Manage your advanced graphing capabilities here.</p>
          </div>
        )}

        {activeTab === 'customizable_calculations_and_functions' && (
          <div className="tab-content">
            <h2>Customizable Calculations and Functions</h2>
            <p>Manage your customizable calculations and functions here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard