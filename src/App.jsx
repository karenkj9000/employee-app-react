import logo from "./logo.svg";
import "./App.css";
//import Button from "./components/Button";
import InputField from "./components/InputField";
import { useState } from "react";
import TextField from "./components/TextField";
import { useEffect } from "react";
import CreateEmployee from "./pages/CreateEmployee";



function App() {
  const [userName, setUserName] = useState("");
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    setUserName("");
  }, [displayName]);

  useEffect(() => {
    setUserName("Your Name");
  }, []);

  const onUserNameChange = (value) => {
    setUserName(value);
  };

  const onButtonClick = () => {
    setDisplayName(userName);
  };
  return (
    <div className="App">
      <CreateEmployee/>
    </div>
  );
}

export default App;
