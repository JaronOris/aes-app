function Card() {
  return (
    <div className="card">
      <div className="timeInfo">
        <div className="timeBlock allottedTime">
          <p>Allotted Time</p>
          <input type="text" name="allottedValue" value="" />
        </div>
        <div className="timeBlock startTime">
        </div>
      </div>
    </div>
  );
}
export default Card
