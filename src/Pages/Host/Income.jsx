const incomeData = [
  { month: "Jan", amount: 350 },
  { month: "Feb", amount: 480 },
  { month: "Mar", amount: 290 },
  { month: "Apr", amount: 610 },
  { month: "May", amount: 400 },
  { month: "Jun", amount: 130 },
]

function Income() {
  const total = incomeData.reduce((sum, item) => sum + item.amount, 0)
  const maxAmount = Math.max(...incomeData.map(item => item.amount))

  return (
    <section className="income-section">
      <h1>Income</h1>
      <p className="income-total">
        Total earned: <span>${total}</span>
      </p>

      <div className="income-chart">
        {incomeData.map(item => (
          <div className="income-bar-wrapper" key={item.month}>
            <div
              className="income-bar"
              style={{ height: `${(item.amount / maxAmount) * 100}%` }}
            >
              <span className="income-bar__value">${item.amount}</span>
            </div>
            <span className="income-bar__label">{item.month}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Income