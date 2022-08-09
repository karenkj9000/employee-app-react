import InputField from "../../components/input-field/InputField";
import InputSelect from "../../components/input-select/InputSelect";
import "./CreateEmployee.css";
import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/SideBar";
import { useState, useEffect } from "react";
import { useCreateEmployeeMutation } from "./CreateEmployeeApi";
import { useNavigate } from "react-router-dom";

const CreateEmployee = () => {
  const [state, setState] = useState({
    name: "",
    id: "",
    dateofjoining: "",
    experience: "",
    role: "",
    status: "",
    username: "",
    password: "",
    age: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    pin: "",
  });

  const [makeEmployee, result] = useCreateEmployeeMutation();

  const onChangeValue = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/list");
  };

  useEffect(() => {
    if (result.isSuccess) goToNextPage();
  }, [result]);

  return (
    <div>
      <Header />
      <SideBar />
      <div>
        <div className="main section1">
          <h1 className="mainheading">Create Employee</h1>
        </div>
      </div>
      <div id="form" className="main formsection">
        <div className="employee-details">
          <div className="input-box">
            <InputField
              label="Employee Name"
              defaultvalue="Employee Name"
              onChange={(value) => onChangeValue("name", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Employee ID"
              defaultvalue="Employee ID"
              onChange={(value) => onChangeValue("id", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Joining Date"
              defaultvalue="Joining Date"
              onChange={(value) => onChangeValue("dateofjoining", value)}
            />
          </div>

          <div className="input-box">
            <InputSelect
              label="Role"
              options={[
                { key: "DEV", label: "Developer" },
                { key: "QA", label: "QA" },
                { key: "DEVOPS", label: "Dev Ops" },
              ]}
              handleClick={(value) => onChangeValue("role", value)}
            />
          </div>

          <div className="input-box">
            <InputSelect
              label="Status"
              options={[
                { key: "Active", label: "Active" },
                { key: "Probation", label: "Probation" },
                { key: "Inactive", label: "Inactive" },
              ]}
              handleClick={(value) => onChangeValue("status", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Experience"
              defaultvalue="Experience"
              onChange={(value) => onChangeValue("experience", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Username"
              defaultvalue="Username"
              onChange={(value) => onChangeValue("username", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Password"
              defaultvalue="Password"
              onChange={(value) => onChangeValue("password", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Age"
              defaultvalue="Age"
              onChange={(value) => onChangeValue("age", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Address Line 1"
              defaultvalue="Address Line 1"
              onChange={(value) => onChangeValue("line1", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Address Line 2"
              defaultvalue="Address Line 2"
              onChange={(value) => onChangeValue("line2", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="City"
              defaultvalue="City"
              onChange={(value) => onChangeValue("city", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="State"
              defaultvalue="State"
              onChange={(value) => onChangeValue("state", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Pin"
              defaultvalue="Pin"
              onChange={(value) => onChangeValue("pin", value)}
            />
          </div>

          <div className="input-box">
            <span className="details">Upload ID Proof</span>
            <div className="input-box-id">
              <span className="details choose-file">Choose File</span>
              <div>
                <label for="upload-photo" className="browse">
                  Browse
                </label>
                <input type="file" id="upload-photo" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            type="button"
            className="button button1"
            value="Create"
            onClick={() =>
              makeEmployee({
                name: state.name,
                id: state.id,
                dateofjoining: state.dateofjoining,
                experience: Number(state.experience),
                role: state.role,
                status: state.status,
                age: Number(state.age),
                username: state.username,
                password: state.password,
                departmentId: "32508539-1fe7-4260-b168-abac4e599925",
                address: {
                  line1: state.line1,
                  line2: state.line2,
                  city: state.city,
                  state: state.state,
                  pin: Number(state.pin),
                },
              })
            } //"validate()?debounce_leading():val_error()"
            id="subbtn"
          >
            Create
          </button>
          {/* <Button
            className="button1"
            onclick={makeEmployee()}
            type="submit"
            label="Create"
          /> */}
          <button className="button button2" onClick={() => goToNextPage()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
