/* eslint-disable react/prop-types */
const PersonalInput = ({
  className,
  title,
  htmlFor,
  type,
  name,
  placeholder,
  onChange,
  onBlur,
}) => {
  return (
    <div className={className}>
      <label htmlFor={htmlFor}>{title}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        onBlur={(e) => onBlur(e)}
      />
    </div>
  );
};
export default PersonalInput;
