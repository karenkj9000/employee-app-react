import "./Button.css";

const Button = (props) => {
  const { label, handleClick, className, type } = props;

  return (
    <button className={className} onClick={handleClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
