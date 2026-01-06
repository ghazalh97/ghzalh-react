function InfoCard({ title, items }) {
  return (
    <div className="info-card">
      <h3>{title}</h3>

      {items.map((item, index) => (
        <div className="row" key={index}>
          <span>{item[0]}</span>
          <strong>{item[1]}</strong>
        </div>
      ))}
    </div>
  );
}

export default InfoCard;
