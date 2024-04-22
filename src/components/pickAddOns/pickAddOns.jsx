import "./pickAddOns.css";

import AddOns from "./addOns";
const PickAddOns = () => {
  return (
    <section className="add-ons-container">
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <AddOns
        onsText="ons-text"
        service="Online service"
        descriptionService="Access to multiplayer games"
        onsCost="ons-cost"
        cost={`+$1/mo`}
      />
      <AddOns
        onsText="ons-text"
        service="Larger storage"
        descriptionService="Extra 1TB of cloud save"
        onsCost="ons-cost"
        cost={`+$2/mo`}
      />{" "}
      <AddOns
        onsText="ons-text"
        service="Customizable Profile"
        descriptionService="Custom theme on your profile"
        onsCost="ons-cost"
        cost={`+$2/mo`}
      />
    </section>
  );
};
export default PickAddOns;
