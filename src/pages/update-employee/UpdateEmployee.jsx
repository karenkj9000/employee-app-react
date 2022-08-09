import InputField from "../../components/input-field/InputField";
import InputSelect from "../../components/input-select/InputSelect";
import "./UpdateEmployee.css";
import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/SideBar";
import { useState, useEffect } from "react";
import { useUpdateEmployeeByIdMutation } from "./UpdateEmployeeApi";
import { useGetEmployeeByIdQuery } from "./UpdateEmployeeApi";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdateEmployee = () => {
  const { id } = useParams();
  const { data } = useGetEmployeeByIdQuery(id);

  const [updateEmployee, result] = useUpdateEmployeeByIdMutation();

  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/list");
  };

  useEffect(() => {
    if (result.isSuccess) goToNextPage();
  }, [result]);

  const [state, setState] = useState({
    name: data?.data?.name,
    id: data?.data?.id,
    dateofjoining: data?.data?.dateofjoining,
    experience: data?.data?.experience,
    role: data?.data?.role,
    status: data?.data?.status,
    username: data?.data?.username,
    password: data?.data?.password,
    age: data?.data?.age,
    departmentId: data?.data?.departmentId,
    addressId: data?.data?.address.id,
    line1: data?.data?.address.line1,
    line2: data?.data?.address.line2,
    city: data?.data?.address.city,
    state: data?.data?.address.state,
    pin: data?.data?.address.pin,
  });

  useEffect(() => {
    if (data?.data) {
      setState(data.data);
    }
  }, [data]);

  const onChangeValue = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleEdit = () => {
    const payload = {
      name: state.name,
      id: state.id,
      dateofjoining: state.dateofjoining,
      experience: Number(state.experience),
      role: state.role,
      status: state.status,
      age: Number(state.age),
      username: state.username,
      password: state.password,
      departmentId: state.departmentId,
      address: {
        addressId: state.addressId,
        line1: state.line1,
        line2: state.line2,
        city: state.city,
        state: state.state,
        pin: Number(state.pin),
      },
    };
    updateEmployee(payload);
  };

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
              defaultvalue={state.name}
              onChange={(value) => onChangeValue("name", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Employee ID"
              defaultvalue={state.id}
              onChange={(value) => onChangeValue("id", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Joining Date"
              defaultvalue={state.dateofjoining}
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
              defaultvalue={state.experience}
              onChange={(value) => onChangeValue("experience", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Username"
              defaultvalue={state.username}
              onChange={(value) => onChangeValue("username", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Password"
              defaultvalue={state.password}
              onChange={(value) => onChangeValue("password", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Age"
              defaultvalue={state.age}
              onChange={(value) => onChangeValue("age", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Address Line 1"
              defaultvalue={state.line1}
              onChange={(value) => onChangeValue("line1", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Address Line 2"
              defaultvalue={state.line2}
              onChange={(value) => onChangeValue("line2", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="City"
              defaultvalue={state.city}
              onChange={(value) => onChangeValue("city", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="State"
              defaultvalue={state.state}
              onChange={(value) => onChangeValue("state", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Pin"
              defaultvalue={state.pin}
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
            onClick={() => handleEdit()} //"validate()?debounce_leading():val_error()"
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

export default UpdateEmployee;
