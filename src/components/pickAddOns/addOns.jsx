/* eslint-disable react/prop-types */
import React from "react";
import { Checkbox } from "@nextui-org/react";
import { PlusIcon } from "./plusIcon";

const AddOns = ({ onsText, service, descriptionService, onsCost, cost }) => {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <>
      <div className="ons">
        <Checkbox
          isSelected={isSelected}
          onValueChange={setIsSelected}
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
