import React from "react";

export default function Input(props) {
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const customStyle = {
    color: "red",
    textAlign: "center",
    fontSize: "0.7rem",
    marginTop: "-10px",
    marginBottom: "0px",
  };

  function handleChange(event) {
    const { name, value } = event.target;
    props.onAdd(name, value);
  }

  function handlePassword(event) {
    const secure = event.target.value;
    setPassword(secure);
  }

  function checking(event) {
    const confirmpass = event.target.value;
    if (confirmpass === password) {
      setError("");
      document.getElementById("regbtnreg").style.backgroundColor = "#6eacda";
      document.getElementById("regbtnreg").style.color = "white";
    } else {
      setError("passwords do not match");
      document.getElementById("regbtnreg").style.backgroundColor = "#e2dad6";
      document.getElementById("regbtnreg").style.color = "black";
    }
  }
  return (
    <>
      {props.condition ? (
        <>
          <input type="email" placeholder="Email" name="email" />
          <input
            onChange={handlePassword}
            type="password"
            placeholder="Password"
            name="password"
          />
        </>
      ) : (
        <>
          <input
            onChange={handleChange}
            type="text"
            placeholder="First Name"
            name="fName"
          />
          {props.isValid.fName && (
            <p style={customStyle}>{props.isValid.fName}</p>
          )}

          <input
            onChange={handleChange}
            type="text"
            placeholder="Last Name"
            name="lName"
          />
          {props.isValid.lName && (
            <p style={customStyle}>{props.isValid.lName}</p>
          )}

          <input
            onChange={handleChange}
            type="email"
            placeholder="Email"
            name="email"
          />

          {props.isValid.email && (
            <p style={customStyle}>{props.isValid.email}</p>
          )}

          <input
            onChange={handlePassword}
            type="password"
            placeholder="Password"
            name="password"
          />

          <input
            id="cp"
            onChange={checking}
            type="password"
            placeholder="Confirm Password"
            name="confirmpassword"
          />
        </>
      )}
      {error && <p style={customStyle}>{error}</p>}
    </>
  );
}
