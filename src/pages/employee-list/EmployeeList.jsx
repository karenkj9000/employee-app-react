import "./EmployeeList.css";
import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/SideBar";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineModeEditOutline } from "react-icons/md";
import CustomSelect from "../../components/custom-select/CustomSelect";
import { BsPlusLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {
  useDeleteEmployeeByIdMutation,
  useGetEmployeeQuery,
} from "./EmployeeListApi";

const EmployeeList = () => {
  const { data } = useGetEmployeeQuery();
  console.log(data);

  const [deleteEmployee] = useDeleteEmployeeByIdMutation();
  const deleteFunction = (e, id) => {
    e.stopPropagation();
    deleteEmployee(id);
  };

  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/create");
  };

  const goToDetailPage = (id) => {
    navigate(`/list/${id}`);
  };

  const updatePage = (e, id) => {
    e.stopPropagation();
    navigate(`/update/${id}`);
  };

  return (
    <div>
      <Header />
      <SideBar />
      <div>
        <div className="main section1">
          <div className="mainheading">
            <h1 style={{ marginRight: "60%" }}>Employee List</h1>
            <div className="sidesection">
              <span style={{ fontSize: "15px", marginRight: "15px" }}>
                Filter By
              </span>
              <CustomSelect />
              <div className="createemp" onClick={goToNextPage}>
                <div className="circle">
                  <BsPlusLg />
                </div>
                Create Employee
              </div>
            </div>
          </div>
        </div>
        <table className="table main">
          <thead>
            <tr align="left" className="subheading">
              <th>Employee Name</th>
              <th>Employee ID</th>
              <th>Joinig Date</th>
              <th>Role</th>
              <th>Status</th>
              <th>Experience</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((elem) => (
              <tr onClick={() => goToDetailPage(elem.id)}>
                <td>{elem.name}</td>
                <td>{elem.id}</td>
                <td>{elem.dateofjoining}</td>
                <td>{elem.role}</td>
                <td>
                  <div className={elem.status}>{elem.status}</div>
                </td>
                <td>{elem.experience} Years</td>
                <td>
                  <div>
                    <div
                      onClick={(e) => {
                        deleteFunction(e, elem.id);
                      }}
                    >
                      <FaRegTrashAlt style={{ color: "#FA4242" }} />
                    </div>
                    <div
                      onClick={(e) => {
                        updatePage(e, elem.id);
                      }}
                    >
                      <MdOutlineModeEditOutline
                        style={{ color: "#10AAC0", marginLeft: "20px" }}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
