/* eslint-disable react/prop-types */
const Step = ({ title, subtitle, className, number, active }) => {
  return (
    <div className={className}>
      <div className={`step-number ${active ? "step-number_active" : null }`}>{number}</div>
      <div className="step-items">
        <h5> {title}</h5>
        <h4>{subtitle}</h4>
      </div>
    </div>
  );
};
export default Step;
