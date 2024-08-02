import React from "react";
import { Link, useParams } from "react-router-dom";
import Input from "./Input";
import SuccessMsg from "../pages/successPage";

export default function Form() {
  const [isPage, setPage] = React.useState(false);
  const [detail, setDetail] = React.useState({
    fName: " ",
    lName: " ",
    email: " ",
  });
  const [err, newError] = React.useState({
    fName: "",
    lName: "",
    email: "",
  });

  function pageSelection(event) {
    setPage(true);
    event.preventDefault();
  }

  const validate = () => {
    const newErrors = {};
    if (detail.fName === " ") {
      newErrors.fName = "First Name is Reqired";
    }
    if (detail.lName === " ") {
      newErrors.lName = "Last Name is Reqired";
    }
    if (detail.email === " ") {
      newErrors.email = "Email is Reqired";
    }

    newError(newErrors);
  };

  function handleState(name, value) {
    setDetail((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    validate();
  }
  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <div className="">
      <div className="section-container">
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="headingbtns">
            <button className="headreg">Sign Up</button>

            <button className="headreg" onClick={pageSelection}>
              Sign In
            </button>
          </div>
          <h1>
            {" "}
            {isPage ? "Welcome Back!" : "Hello Newbie.!  "}
            {detail.fName}
          </h1>
          <Input condition={isPage} onAdd={handleState} isValid={err} />
          {isPage ? (
            <button id="regbtnlog" onClick={handleClick}>
              Login{" "}
            </button>
          ) : (
            <button id="regbtnreg" type="submit">
              {" "}
              Register{" "}
            </button>

            //<Link to={"/success"}></Link>
          )}
        </form>
      </div>
    </div>
  );
}
