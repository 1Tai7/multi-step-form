import "./personalInfo.css";
import PersonalInput from "./personalInput";
const PersonalInfo = () => {
  return (
    <div className="personal-info-container">
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <form action="">
        <PersonalInput
          className="form-info"
          htmlFor="name"
          title="Name"
          type="text"
          name="name"
          placeholder="e.g.Stephen King"
        />

        <PersonalInput
          className="form-info"
          htmlFor="email"
          title="Email Address"
          type="email"
          name="email"
          placeholder="e.g.stephenking@gmail.com"
        />

        <PersonalInput
          className="form-info"
          htmlFor="phoneNumber"
          title="Phone Number"
          type="number"
          name="phoneNumber"
          placeholder="e.g. +1 123 456 7890"
        />
      </form>
      <div className="next-step-button">
        <input type="submit" value="Next Step" />
      </div>
    </div>
  );
};
export default PersonalInfo;
