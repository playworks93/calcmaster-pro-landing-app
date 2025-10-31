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
          className={activeTab === 'user_authentication_&_onboarding' ? 'active' : ''}
          onClick={() => setActiveTab('user_authentication_&_onboarding')}
        >
          User Authentication & Onboarding
        </button>
        <button 
          className={activeTab === 'basic_arithmetic_functions_(addition,_subtraction,_multiplication,_division)' ? 'active' : ''}
          onClick={() => setActiveTab('basic_arithmetic_functions_(addition,_subtraction,_multiplication,_division)')}
        >
          Basic Arithmetic Functions (Addition, Subtraction, Multiplication, Division)
        </button>
        <button 
          className={activeTab === 'advanced_calculations_(scientific,_graphing)' ? 'active' : ''}
          onClick={() => setActiveTab('advanced_calculations_(scientific,_graphing)')}
        >
          Advanced Calculations (Scientific, Graphing)
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

        {activeTab === 'user_authentication_&_onboarding' && (
          <div className="tab-content">
            <h2>User Authentication & Onboarding</h2>
            <p>Manage your user authentication & onboarding here.</p>
          </div>
        )}

        {activeTab === 'basic_arithmetic_functions_(addition,_subtraction,_multiplication,_division)' && (
          <div className="tab-content">
            <h2>Basic Arithmetic Functions (Addition, Subtraction, Multiplication, Division)</h2>
            <p>Manage your basic arithmetic functions (addition, subtraction, multiplication, division) here.</p>
          </div>
        )}

        {activeTab === 'advanced_calculations_(scientific,_graphing)' && (
          <div className="tab-content">
            <h2>Advanced Calculations (Scientific, Graphing)</h2>
            <p>Manage your advanced calculations (scientific, graphing) here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard