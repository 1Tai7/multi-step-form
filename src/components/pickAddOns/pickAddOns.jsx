/* eslint-disable react/prop-types */
import "./pickAddOns.css";
import AddOns from "./addOns";
import { useState } from "react";
const PickAddOns = ({ addOns, setAddOns, switchValueYear }) => {
  const [onlineService, setOnlineService] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customProfile, setCustomProfile] = useState(false);

  const handleClick = (id, onsCost) => {
    setAddOns([...addOns, { service: id, onsCost }]);
    console.log(addOns);
    switch (id) {
      case "Online service":
        setOnlineService(!onlineService);
        break;
      case "Larger storage":
        setLargerStorage(!largerStorage);
        break;
      case "Customizable Profile":
        setCustomProfile(!customProfile);
        break;
    }
  };

  return (
    <section className="add-ons-container">
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <AddOns
        className="ons"
        onsText="ons-text"
        service="Online service"
        descriptionService="Access to multiplayer games"
        onsCost="ons-cost"
        cost={`${switchValueYear ? "+$1/mo" : "+$10/yr"}`}
        onClick={() => handleClick("Online service", `+$1/mo`)}
        onlineService={onlineService}
      />
      <AddOns
        className="ons"
        onsText="ons-text"
        service="Larger storage"
        descriptionService="Extra 1TB of cloud save"
        onsCost="ons-cost"
        cost={`${switchValueYear ? "+$2/mo" : "+$20/yr"}`}
        onClick={() => handleClick("Larger storage", `+$2/mo`)}
        largerStorage={largerStorage}
      />
      <AddOns
        className="ons"
        onsText="ons-text"
        service="Customizable Profile"
        descriptionService="Custom theme on your profile"
        onsCost="ons-cost"
        cost={`${switchValueYear ? "+$2/mo" : "+$20/yr"}`}
        onClick={() => handleClick("Customizable Profile", `+$2/mo`)}
        customProfile={customProfile}
      />
    </section>
  );
};
export default PickAddOns;
