import "./InputSelect.css";

const InputSelect = ({ label, options, defaultValue, handleClick }) => {
  return (
    <div>
      <label className="details">{label}</label>
      <select
        name={label}
        defaultValue={defaultValue}
        onChange={(event) => handleClick(event.target.value)}
      >
        {options.map((item) => (
          <option key={item.key}>{item.label}</option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
