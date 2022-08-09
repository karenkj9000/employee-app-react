import "./Login.css";
import InputField from "../../components/input-field/InputField";
import Button from "../../components/button/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import KVLogo from "../../images/kv logo.png";
import LoginImage from "../../images/login img.png";
import { useLoginEmployeeMutation } from "./LoginApi";
import { setStorage } from "../../services/Utils";

const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const onChangeValue = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  const [loginemployee, result] = useLoginEmployeeMutation();

  const goToNextPage = () => {
    navigate("/list");
  };

  useEffect(() => {
    if (result.isSuccess) goToNextPage();
  }, [result]);

  const onClickSubmit = async () => {
    const payload = {
      username: state.username,
      password: state.password,
    };
    const response = await loginemployee(payload);
    setStorage("idToken", response?.data?.data?.idToken);
  };

  return (
    <main className="login">
      <section className="left-side">
        <img src={LoginImage} />
      </section>
      <section className="right-side">
        <div className="login-area">
          <img src={KVLogo} />
          <InputField
            label="Username"
            type="text"
            id="uname"
            placeholder="Username"
            onChange={(value) => onChangeValue("username", value)}
          ></InputField>
          <br />
          <InputField
            label="Password"
            type="text"
            id="pword"
            placeholder="Password"
            onChange={(value) => onChangeValue("password", value)}
          ></InputField>
          <Button
            className="button-login"
            label="Log In"
            handleClick={() => {
              onClickSubmit();
            }}
          ></Button>
        </div>
      </section>
    </main>
  );
};

export default Login;
