import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

export default function Form() {
  const [isPage, setPage] = React.useState(false);

  function pageSelection(event) {
    setPage(true);
    event.preventDefault();
  }

  function handleClickreg(event) {
    null;
  }

  function handleClick(event) {
    event.preventDefault();
  }
  return (
    <div className="">
      <div className="section-container">
        <form className="form-container">
          <div className="headingbtns">
            <button className="headreg">Sign Up</button>

            <button className="headreg" onClick={pageSelection}>
              Sign In
            </button>
          </div>
          <h1> {isPage ? "Welcome Back!" : "Hello Newbie.!"}</h1>
          <Input condition={isPage} />
          {isPage ? (
            <button id="regbtnlog" onClick={handleClick}>
              Login{" "}
            </button>
          ) : (
            <Link to={"/success"}>
              <button id="regbtnreg" onClick={handleClickreg}>
                {" "}
                Register{" "}
              </button>
            </Link>
          )}
        </form>
      </div>
    </div>
  );
}
