/* eslint-disable react/prop-types */
import React from "react";
import { Checkbox } from "@nextui-org/react";
import { PlusIcon } from "./plusIcon";

const AddOns = ({
  className,
  onsText,
  service,
  descriptionService,
  onsCost,
  cost,
  onClick,
  onlineService,
  largerStorage,
  customProfile,
}) => {
  const [isSelected, setIsSelected] = React.useState(false);
  const handleCheckbox = () => {
    setIsSelected(!isSelected);
    onClick();
  };
  return (
    <>
      <div
        onClick={onClick}
        className={`${className} 
        ${onlineService && "active"} 
        ${largerStorage && "active"} 
        ${customProfile && "active"}`}
      >
        <Checkbox
          isSelected={onlineService || largerStorage || customProfile}
          onValueChange={() => handleCheckbox()}
          icon={<PlusIcon />}
          color="warning"
        ></Checkbox>
        <div className="ons-description">
          <div className={onsText}>
            <h3>{service}</h3>
            <span>{descriptionService}</span>
          </div>
          <div className={onsCost}>{cost}</div>
        </div>
      </div>
    </>
  );
};
export default AddOns;
