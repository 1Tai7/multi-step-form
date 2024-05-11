/* eslint-disable react/prop-types */
const SelectYourPlan = ({
  container,
  iconContainer,
  icon,
  iconName,
  plan,
  name,
  planCost,
  disclaimer,
  arcade,
  advanced,
  pro,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`${container}
       ${arcade && "active"} 
       ${advanced && "active"} 
       ${pro && "active"}`}
    >
      <div className={iconContainer}>
        <img src={icon} alt={iconName} />
      </div>
      <div className={plan}>
        <h3>{name}</h3>
        <span>{planCost}</span>
        <span className="two-months-free">{disclaimer}</span>
      </div>
    </div>
  );
};
export default SelectYourPlan;
