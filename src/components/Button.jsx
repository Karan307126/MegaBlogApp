import PropTypes from "prop-types";

const Button = ({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  className: PropTypes.string,
};
