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

  const togglePage = () => {
    setPage((prevIsPage) => !prevIsPage); // Toggle between true and false
  };

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
        password: password,
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
          <div className="decision">
            {isPage ? (
              <p>
                Create Account? <span onClick={togglePage}>Sign Up</span>
              </p>
            ) : (
              <p>
                Already have an Account?{" "}
                <span onClick={togglePage}>Log In</span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
