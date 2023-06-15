import React from "react";
import { useState } from "react";

function Textform(props) {
  const OnChange = (p) => {
    setText(p.target.value);
  };
  const [text, setText] = useState("");
  const upperCase = () => {
    let formText = text.toUpperCase();
    setText(formText);
    props.showAlert("Converted To Uppercase!", "primary");
  };
  const lowerCase = () => {
    let formText = text.toLowerCase();
    setText(formText);
    props.showAlert("Converted To Lowercase!", "secondary");
  };
  const clear = () => {
    setText("");
    props.showAlert("Text Cleared!", "danger");
  };
  const useMe = () => {
    setText("I am a useless button");
    props.showAlert("Useless Button Clicked!", "warning");
  };
  const extraSpaces = () => {
    let formText = text.split(/[ ]+/);
    setText(formText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  };
  return (
    <>
      <div
        className="container text-center"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={OnChange}
            rows={3}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          />
        </div>

        <div className="container-md-1">
          <button
            disabled={text.length === 0}
            className={`btn btn${props.btn}-primary mx-1 my-1`}
            onClick={upperCase}
          >
            Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className={`btn btn${props.btn}-secondary mx-1 my-1`}
            onClick={lowerCase}
          >
            Lowercase
          </button>
          <button
            className={`btn btn${props.btn}-warning mx-1 my-1`}
            onClick={useMe}
          >
            Use Me
          </button>
          <button
            disabled={text.length === 0}
            className={`btn btn${props.btn}-danger mx-1 my-1`}
            onClick={clear}
          >
            Clear
          </button>
          <button
            disabled={text.length === 0}
            className={`btn btn${props.btn}-success mx-1 my-1`}
            onClick={extraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
        <div className="container my-3">
          <h2>Your text summary</h2>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          <p>
            {0.008 *
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            Minutes read
          </p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        </div>
      </div>
    </>
  );
}

export default Textform;
