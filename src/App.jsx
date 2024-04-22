/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/personalInfo/personalInfo";
import Steps from "./components/steps/steps";
import SelectYourPlans from "./components/selectYourPlans/selectYourPlans";
import FormButtons from "./components/formButtons/formButtons";
import PickAddOns from "./components/pickAddOns/pickAddOns";

//import Hi from "./components/hi";

const App = () => {
  // const enviar = () => {
  //   alert("se envio!");
  const [step, setStep] = useState(1);
  //const nextStep = () => {};

  return (
    <>
      {/**esto es un fragmento*/}
      <section className="form-container">
        <Steps step={step} />
        <div className="forms">
          {step === 1 && <PersonalInfo />}
          {step === 2 && <SelectYourPlans />}
          {step === 3 && <PickAddOns/>}
          <FormButtons setStep={setStep} step={step} />
        </div>
      </section>
    </>
  );
};

export default App;
