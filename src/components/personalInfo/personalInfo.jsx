/* eslint-disable react/prop-types */
import { useState } from "react";
import "./personalInfo.css";
import PersonalInput from "./personalInput";
const PersonalInfo = ({
  personalInfo,
  setPersonalInfo,
  setValidateStepOne,
}) => {
  const [validateInputName, setValidateInputName] = useState(false);
  const [validateInputEmail, setValidateInputEmail] = useState(false);
  const [validateInputPhoneNumber, setValidateInputPhoneNumber] =
    useState(false);

  const validateName = () => {
    const { name } = personalInfo;
    if (name) {
      setValidateInputName(false);
    } else {
      setValidateInputName(true);
    }
  };

  const validateEmail = () => {
    const { email } = personalInfo;
    if (email) {
      const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      if (regex.test(email)) {
        setValidateInputEmail(false);
      } else {
        setValidateInputEmail(true);
      }
    }
  };

  const validatePhoneNumber = () => {
    const { phoneNumber } = personalInfo;
    if (phoneNumber && phoneNumber.length <= 13 && phoneNumber.length >= 10) {
      setValidateInputPhoneNumber(false);
    } else {
      setValidateInputPhoneNumber(true);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
    validateName();
    validateEmail();
    validatePhoneNumber();
    setValidateStepOne(
      validateInputName && validateInputEmail && validateInputPhoneNumber
    );
  };
  const handleOnBlur = () => {};

  return (
    <div className="personal-info-container">
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <form action="">
        {validateInputName ? <span>Error</span> : null}

        <PersonalInput
          className="form-info"
          htmlFor="name"
          title="Name"
          type="text"
          name="name"
          placeholder="e.g.Stephen King"
          onChange={(e) => handleInput(e)}
          onBlur={(e) => handleOnBlur(e)}
        />
        {validateInputEmail ? <span>Error</span> : null}

        <PersonalInput
          className="form-info"
          htmlFor="email"
          title="Email Address"
          type="email"
          name="email"
          placeholder="e.g.stephenking@gmail.com"
          onChange={(e) => handleInput(e)}
          onBlur={(e) => handleOnBlur(e)}
        />
        {validateInputPhoneNumber ? <span>Error</span> : null}

        <PersonalInput
          className="form-info"
          htmlFor="phoneNumber"
          title="Phone Number"
          type="tel"
          name="phoneNumber"
          placeholder="e.g. +1 123 456 7890"
          onChange={(e) => handleInput(e)}
          onBlur={(e) => handleOnBlur(e)}
        />
      </form>
    </div>
  );
};
export default PersonalInfo;
