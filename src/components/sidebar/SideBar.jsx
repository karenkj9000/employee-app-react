import "./SideBar.css";
import Icon from "../../images/List.png";
import Button from "../button/Button";
import { removeStorage } from "../../services/Utils";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const goToNextPage = () => {
    removeStorage("idToken");
    navigate("/");
  };

  return (
    <aside className="aside">
      <div className="tile">
        <div className="imagebg">
          <img src={Icon} />
        </div>
        <a href=" " className="tile-text">
          {" "}
          Employee List
        </a>
      </div>
      <div>
        <Button
          className="btn-primary"
          label="Log Out"
          handleClick={goToNextPage}
        ></Button>
      </div>
    </aside>
  );
};

export default SideBar;
