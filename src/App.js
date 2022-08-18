/* ex3: 
Password should contain a number. Show error if user misses character. */

import { useState } from "react";
import "./styles.css";

export default function App() {
  const [alphaNum, setAlphaNum] = useState();

  /* optional chaining concept */
  const inputHandler = (event) => {
    const value = event?.target?.value || "";

    if (value.match(/[A-Z]/gi) && value.match(/[0-9]/gi)) {
      setAlphaNum("Success");
    } else {
      setAlphaNum("error");
    }
  };
  return (
    <div className="App">
      <h1>hello</h1>
      <input
        style={{ width: "200px", padding: "1rem" }}
        type="password"
        placeholder="Enter alphanumeric password"
        onChange={inputHandler}
      ></input>
      <div>{alphaNum}</div>
    </div>
  );
}
