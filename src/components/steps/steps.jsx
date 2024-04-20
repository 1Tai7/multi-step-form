/* eslint-disable react/prop-types */
import "./steps.css";
import Step from "./step";
const Steps = ({ step }) => {
  return (
    <div className="steps-container">
      <Step
        number="1"
        title="STEP 1"
        subtitle="YOUR INFO"
        className="step-one"
        active={step === 1}
      />
      <Step
        number="2"
        title="STEP 2"
        subtitle="SELECT PLAN"
        className="step-one"
        active={step === 2}
      />
      <Step
        number="3"
        title="STEP 3"
        subtitle="ADD-ONS"
        className="step-one"
        active={step === 3}
      />
      <Step
        number="4"
        title="STEP 4"
        subtitle="SUMMARY"
        className="step-one"
        active={step === 4}
      />
    </div>
  );
};
export default Steps;
