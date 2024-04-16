/* eslint-disable react/prop-types */
const PersonalInput = ({
    className,
  title,
  htmlFor,
  type,
  name,
  placeholder,
}) => {
  return (
    <div className={className}>
      <label htmlFor={htmlFor}>{title}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};
export default PersonalInput;
