import "./InputField.css";

const InputField = ({ label, defaultvalue, onChange }) => {
  return (
    <div>
      <label className="details">{label}</label>
      <input
        onChange={(event) => onChange(event.target.value)}
        type="text"
        placeholder={defaultvalue}
      />
    </div>
  );
};

export default InputField;
