import "./AddressDetailsBox.css";
const AddressDetailsBox = ({ label, line1, line2, city, state, pin }) => {
  return (
    <div className="address">
      <div className="label">{label}</div>
      <div className="line1">{line1}</div>
      <div className="line2">{line2}</div>
      <div className="city">{city}</div>
      <div className="state">{state}</div>
      <div className="pin">{pin}</div>
    </div>
  );
};

export default AddressDetailsBox;
