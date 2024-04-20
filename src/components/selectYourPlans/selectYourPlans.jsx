import "./selectYourPlan.css";
import iconArcade from "./../../assets/icon-arcade.svg";
import iconAdvanced from "./../../assets/icon-advanced.svg";
import iconPro from "./../../assets/icon-pro.svg";
import { Switch } from "@nextui-org/react";
import SelectYourPlan from "./selectYourPlan";
const SelectYourPlans = () => {
  return (
    <div className="select-your-plan-container">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="plans-containers">
        <SelectYourPlan
          container="plan-container"
          iconContainer="icon-container"
          icon={iconArcade}
          iconName="arcade-icon"
          plan="arcade-plan"
          name="Arcade"
          planCost={`$9/mo`}
        />
        <SelectYourPlan
          container="plan-container"
          iconContainer="icon-container"
          icon={iconAdvanced}
          iconName="advanced-icon"
          plan="advanced-plan"
          name="Advanced"
          planCost={`$12/mo`}
        />
        <SelectYourPlan
          container="plan-container"
          iconContainer="icon-container"
          icon={iconPro}
          iconName="pro-icon"
          plan="pro-plan"
          name="Pro"
          planCost={`$15/mo`}
        />
      </div>
      <div className="plans">
        <h4>Monthly</h4>
        <Switch
          defaultSelected={false}
          aria-label="Automatic updates"
          size="sm"
        />
        <h4>Yearly</h4>
      </div>
    </div>
  );
};

export default SelectYourPlans;
