import "./CustomSelect.css";

const CustomSelect = () => {
  return (
    <div>
      <select className="customselect">
        <option value="0">Status</option>
        <option value="0">Role</option>
        <option value="1">Experience</option>
        <option value="2">Joining Date</option>
        <option value="3">Name</option>
      </select>
    </div>
  );
};
export default CustomSelect;
