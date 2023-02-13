import "./App.css";
import { useState } from "react";
import DisplayConfirmErrorMessage from "./components/DisplayConfirmErrorMessage";
import DisplayUserErrMessage from "./components/DisplayUserErrMessage";
import DisplayPassErrMessage from "./components/DisplayPassErrMessage";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userErrMessage, setUserErrMessage] = useState("");
  const [passErrMessage, setPassErrMessage] = useState("");
  const [confirmErrMessage, setConfirmErrMessage] = useState("");
  const pass = document.querySelectorAll(".pass");
  const confirmPass = document.querySelector("#confirmPass");

  // Function for data binding
  const inputUserName = (e) => {
    setUserName(e.target.value);
  };

  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  // Function for password validation
  const passwordValidation = () => {
    if (password.length < 8) {
      setPassErrMessage("Your password must be at least 8 characters.");
      return false;
    } else if (password.search(/[a-z]/) < 0) {
      setPassErrMessage(
        "Your password should contain at least one lowercase letter."
      );
      return false;
    } else if (password.search(/[A-Z]/) < 0) {
      setPassErrMessage(
        "Your password should contain at least one uppercase letter."
      );
      return false;
    } else if (password.search(/\d/) < 0) {
      setPassErrMessage("Your password should contain at least one digit.");
      return false;
    } else if (password.search(/[!@#$%^&*()_+\-=\]\[{};':"\\|,.<>\/?]/) < 0) {
      setPassErrMessage(
        "Your password should contain at least one special character."
      );
      return false;
    } else {
      return true;
    }
  };

  // Function for submitting the registration form
  const submitButton = (e) => {
    e.preventDefault();
    if (userName) {
      setUserErrMessage("");
      if (passwordValidation()) {
        setPassErrMessage("");
        if (confirmPass.value === password) {
          alert(
            `Welcome ${userName}! You have successfully registered your account.`
          );
          setUserName("");
          setPassword("");
          setConfirmErrMessage("");
          confirmPass.value = "";
        } else {
          setConfirmErrMessage("Your password did not match.");
        }
      }
    } else {
      setUserErrMessage("This field is required.");
    }
  };

  //Function for hiding and showing password
  const showPassword = () => {
    pass.forEach((pass) => {
      if (pass.type === "password") {
        pass.type = "text";
      } else {
        pass.type = "password";
      }
    });
  };

  return (
    <div className="App">
      <form>
        <h1>Account Registration</h1>
        <p>
          Username:{" "}
          <input
            type="text"
            value={userName}
            onChange={inputUserName}
            required
          ></input>
        </p>
        <DisplayUserErrMessage userErrMessage={userErrMessage} />
        <p>
          Password:{" "}
          <input
            type="password"
            className="pass"
            value={password}
            onChange={inputPassword}
            required
          ></input>
        </p>
        <DisplayPassErrMessage passErrMessage={passErrMessage} />
        <p>
          Confirm Password:{" "}
          <input
            type="password"
            className="pass"
            id="confirmPass"
            required
          ></input>
        </p>
        <DisplayConfirmErrorMessage confirmErrMessage={confirmErrMessage} />
        <p>
          Show Password
          <input type="checkbox" onClick={showPassword}></input>
        </p>
        <button onClick={submitButton}>Submit</button>
      </form>
    </div>
  );
}

export default App;
