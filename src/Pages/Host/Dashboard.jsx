import { Link } from "react-router-dom"

function Dashboard() {
  return (
    <section className="dashboard-section">
      <h1>Welcome back 👋</h1>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <span className="dashboard-card__label">Total Income</span>
          <span className="dashboard-card__value">$2,260</span>
        </div>

        <div className="dashboard-card">
          <span className="dashboard-card__label">Vans Rented</span>
          <span className="dashboard-card__value">6</span>
        </div>

        <div className="dashboard-card">
          <span className="dashboard-card__label">Avg. Rating</span>
          <span className="dashboard-card__value">4.6 ★</span>
        </div>
      </div>

      <div className="dashboard-links">
        <Link to="/host/income" className="dashboard-link">
          View Income →
        </Link>
        <Link to="/host/reviews" className="dashboard-link">
          View Reviews →
        </Link>
      </div>
    </section>
  )
}

export default Dashboard