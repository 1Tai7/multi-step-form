/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/personalInfo/personalInfo";
import Steps from "./components/steps/steps";
import SelectYourPlans from "./components/selectYourPlans/selectYourPlans";
import FormButtons from "./components/formButtons/formButtons";
import PickAddOns from "./components/pickAddOns/pickAddOns";
import Summary from "./components/summary/summary";

//import Hi from "./components/hi";

const App = () => {
  // const enviar = () => {
  //   alert("se envio!");
  const [step, setStep] = useState(1);
  //const nextStep = () => {};
  const [personalInfo, setPersonalInfo] = useState({});
  const [validateStepOne, setValidateStepOne] = useState(false);
  const [selectPlan, setSelectPlan] = useState();
  const [validateStepTwo, setValidateStepTwo] = useState(true);
  return (
    <>
      {/**esto es un fragmento*/}
      <section className="form-container">
        <Steps step={step} />
        <div className="forms">
          {step === 1 && (
            <PersonalInfo
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
              setValidateStepOne={setValidateStepOne}
            />
          )}
          {step === 2 && (
            <SelectYourPlans
              selectPlan={selectPlan}
              setSelectPlan={setSelectPlan}
              setValidateStepTwo={setValidateStepTwo}
            />
          )}
          {step === 3 && <PickAddOns />}
          {step === 4 && <Summary />}
          <FormButtons
            setStep={setStep}
            step={step}
            validateStepOne={validateStepOne}
            validateStepTwo={validateStepTwo}
          />
        </div>
      </section>
    </>
  );
};

export default App;
