import "./selectYourPlan.css";
import iconArcade from "./../../assets/icon-arcade.svg";
import iconAdvanced from "./../../assets/icon-advanced.svg";
import iconPro from "./../../assets/icon-pro.svg";
import { Switch } from "@nextui-org/react";
import SelectYourPlan from "./selectYourPlan";
import { useState } from "react";
const SelectYourPlans = () => {
  const [arcade, setArcade] = useState(false);
  const [advanced, setAdvanced] = useState(false);
  const [pro, setPro] = useState(false);

  const [switchValue, setSwitchValue] = useState(true);

  const handleClick = (id) => {
    switch (id) {
      case "Arcade":
        setArcade(true);
        setAdvanced(false);
        setPro(false);
        break;
      case "Advanced":
        setArcade(false);
        setAdvanced(true);
        setPro(false);
        break;
      case "Pro":
        setArcade(false);
        setAdvanced(false);
        setPro(true);
        break;
    }
  };

  const handleSwitch = () => {
    setSwitchValue(!switchValue);
    console.log(switchValue);
  };

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
          plan="plan"
          name="Arcade"
          planCost={`${switchValue ? "$9/mo" : "$90/yr"} `}
          disclaimer={`${switchValue ? "" : "2 months free"} `}
          onClick={() => handleClick("Arcade")}
          arcade={arcade}
        />
        <SelectYourPlan
          container="plan-container"
          iconContainer="icon-container"
          icon={iconAdvanced}
          iconName="advanced-icon"
          plan="plan"
          name="Advanced"
          planCost={`${switchValue ? "$12/mo" : "$120/yr"} `}
          disclaimer={`${switchValue ? "" : "2 months free"} `}
          onClick={() => handleClick("Advanced")}
          advanced={advanced}
        />
        <SelectYourPlan
          container="plan-container"
          iconContainer="icon-container"
          icon={iconPro}
          iconName="pro-icon"
          plan="plan"
          name="Pro"
          planCost={`${switchValue ? "$15/mo" : "$150/yr"} `}
          disclaimer={`${switchValue ? "" : "2 months free"} `}
          onClick={() => handleClick("Pro")}
          pro={pro}
        />
      </div>
      <div className="plans">
        <h4>Monthly</h4>
        <Switch
          defaultSelected={false}
          aria-label="Automatic updates"
          size="sm"
          onChange={(e) => handleSwitch(e.target.checked)}
        />
        <h4>Yearly</h4>
      </div>
    </div>
  );
};

export default SelectYourPlans;
