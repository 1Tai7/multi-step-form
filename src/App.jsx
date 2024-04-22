/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/personalInfo/personalInfo";
import Steps from "./components/steps/steps";
import SelectYourPlans from "./components/selectYourPlans/selectYourPlans";

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
        {step === 1 && <PersonalInfo setStep={setStep} step={step} />}
        {step === 2 && <SelectYourPlans />}

   
      </section>
    </>
  );
};

export default App;
