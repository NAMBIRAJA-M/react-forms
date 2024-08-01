import React from "react";

export default function Input(props) {
  const [detail, setDetail] = React.useState({
    fName: "",
    lName: "",
    email: " ",
  });

  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const customStyle = {
    color: "red",
    fontSize: "19px",
    marginTop: "-10px",
    marginLeft: "-100px",
    marginBottom: "0px",
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setDetail((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    console.log(detail);
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
      setError("*passwords do not match");
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
          <input
            onChange={handleChange}
            type="text"
            placeholder="Last Name"
            name="lName"
          />
          <input
            onChange={handleChange}
            type="email"
            placeholder="Email"
            name="email"
          />
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
