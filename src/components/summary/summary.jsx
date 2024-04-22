import "./summary.css";
const Summary = () => {
  return (
    <section className="summary-container">
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="confirmation-container">
        <div className="plan-confirmation">
          <div className="text-plan">
            <h3>Arcade {`(Monthly)`}</h3>
            <a href="#" target="_blank">
              Change
            </a>
          </div>
          <div className="plan-cost">{`$9/mo`}</div>
        </div>
        <hr />
        <div className="add-srv">
          <span>online service</span>
          <span>{`+$1/mo`}</span>
        </div>
        <div className="add-srv">
          <span>Larger storage</span>
          <span>{`+$2/mo`}</span>
        </div>
        <div className="add-srv">
          <span>Customizable Profile</span>
          <span>{`+$2/mo`}</span>
        </div>
      </div>
      <div className="total-cost-plan">
        <span>Total {`(per month)`}</span>
        <span>{`$12/mo`}</span>
      </div>
    </section>
  );
};
export default Summary;
