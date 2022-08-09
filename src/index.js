import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Login from "./pages/login/Login";
import EmployeeList from "./pages/employee-list/EmployeeList";
import CreateEmployee from "./pages/create-employee/CreateEmployee";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import EmployeeDetails from "./pages/employee-details/EmployeeDetails";
import UpdateEmployee from "./pages/update-employee/UpdateEmployee";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<EmployeeList />} />
          <Route path="/list/:id" element={<EmployeeDetails />} />
          <Route path="/create" element={<CreateEmployee />} />
          <Route path="/update/:id" element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
      {/*<App />*/}
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
