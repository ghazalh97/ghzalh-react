function StatCard({ title, value, sub }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <h2>{value}</h2>
      <p>{sub}</p>
    </div>
  );
}

export default StatCard;
