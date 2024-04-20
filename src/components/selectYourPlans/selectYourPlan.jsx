/* eslint-disable react/prop-types */
const SelectYourPlan = (
{  container,
  iconContainer,
  icon,
  iconName,
  plan,
  name,
  planCost}
) => {
  return (
    <div className={container}>
      <div className={iconContainer}>
        <img src={icon} alt={iconName} />
      </div>
      <div className={plan}>
        <h3>{name}</h3>
        <span>{planCost}</span>
      </div>
    </div>
  );
};
export default SelectYourPlan;
