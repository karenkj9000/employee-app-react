import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/SideBar";
import "./EmployeeDetails.css";
import { MdOutlineModeEditOutline } from "react-icons/md";
import DetailsBox from "../../components/details-box/DetailsBox";
import AddressDetailsBox from "../../components/address-details-box/AddressDetailsBox";
import { useParams } from "react-router-dom";
import { useGetEmployeeByIdQuery } from "./EmployeeDetailsApi";
import { useNavigate } from "react-router-dom";

const EmployeeDetails = () => {
  const { id } = useParams();
  const { data } = useGetEmployeeByIdQuery(id);
  console.log(data?.data?.address.line1);

  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate(`/update/${id}`);
  };

  return (
    <div>
      <Header />
      <SideBar />
      <div className="main section1">
        <div className="mainheading">
          <h1 style={{ marginRight: "82%" }}>Employee Details</h1>
          <div className="createemp" onClick={() => goToNextPage(id)}>
            <div className="circle">
              <MdOutlineModeEditOutline />
            </div>
            Edit
          </div>
        </div>
      </div>
      <div className="outerempdet">
        <div className="empdet">
          <DetailsBox label="Employee Name" value={data?.data?.name} />
          <DetailsBox label="Employee ID" value={data?.data?.id} />
          <DetailsBox label="Joining Date" value={data?.data?.dateofjoining} />
          <DetailsBox label="Role" value={data?.data?.role} />
          <div>
            <div className="label">Status</div>
            <div className="value active">{data?.data?.status}</div>
          </div>
          <DetailsBox label="Experience" value={data?.data?.experience} />
        </div>
        <div className="secondrow">
          <AddressDetailsBox
            label="Address"
            line1={data?.data?.address.line1}
            line2={data?.data?.address.line2}
            city={data?.data?.address.city}
            state={data?.data?.address.state}
            pin={data?.data?.address.pin}
          />
          <DetailsBox label="Employee ID Proof" value="" />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
