import "./Header.css";
import KVLogo from "../../images/kv logo.png";
const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <img src={KVLogo} height={45} width={190} />
      </div>
    </header>
  );
};

export default Header;
