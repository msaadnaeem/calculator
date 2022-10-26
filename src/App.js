import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.name === "AC") {
      setResult("");
    } else if (e.target.name === "delete") {
      setResult(result.slice(0, -1));
    } else if (e.target.name === "equal") {
      try {
        setResult(eval(result).toString());
      } catch (err) {
        setResult("Wrong Input");
        setTimeout(() => {
          setResult("");
        }, 500);
      }
    } else {
      setResult(result.concat(e.target.name));
    }
  };
  return (
    <div className="container">
      <form>
        <input
          type={"text"}
          value={result}
          className="current-operant output"
        />

        <div className="buttons">
          <button name="AC" onClick={handleClick} className="ac span-two">
            AC
          </button>
          <button name="delete" onClick={handleClick}>
            DEL
          </button>

          <button name="/" onClick={handleClick}>
            /
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="*" onClick={handleClick}>
            x
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="-" onClick={handleClick}>
            -
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="+" onClick={handleClick}>
            +
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>

          <button name="equal" onClick={handleClick} className="ac span-two">
            =
          </button>
        </div>
      </form>
    </div>
  );
}
