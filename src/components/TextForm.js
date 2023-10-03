import React, { useState } from "react";
if (localStorage.getItem("localStorage") === null) {
  localStorage.setItem("localStorage", "");
}

export default function TextForm(props) {
  const handleUpClick = () => {
    var newText = text.toUpperCase();
    localStorage.setItem("localStorage", newText);
    setText(newText);
    props.showAlert("Text converted to UPPER CASE!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    localStorage.setItem("localStorage", newText);
    setText(newText);
    props.showAlert("Text converted to lower case!", "success");
  };
  const handleCopy = () => {
    // var text = document.getElementById("myBox");
    // navigator.clipboard.writeText(text.value);
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!", "success");
  };
  const handleClear = () => {
    let confirmDelete = window.confirm("Do you really want to clear the text");
    if (confirmDelete === true) {
      let newText = "";
      localStorage.setItem("localStorage", newText);
      setText(newText);
      props.showAlert("Text cleard!", "success");
    } else {
      let newText = text;
      localStorage.setItem("localStorage", newText);
      setText(newText);
    }
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    localStorage.setItem("localStorage", newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };
  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(""));
    localStorage.setItem("localStorage", newText.join(""));
    props.showAlert("All spaces removed!", "success");
  };
  const handleAddHyphen = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join("-"));
    localStorage.setItem("localStorage", newText.join("-"));
    props.showAlert("Hyphen ( - ) updated in place of spaces", "success");
  };
  const handleAddUnderscore = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join("_"));
    localStorage.setItem("localStorage", newText.join("_"));
    props.showAlert("Underscore ( _ ) updated in place of spaces", "success");
  };
  const handleAddComma = () => {
    let newText = text.split(/[ ]+/);
    // console.log(newText);
    setText(newText.join(", "));
    localStorage.setItem("localStorage", newText.join(", "));
    props.showAlert("Comma ( , ) updated in place of spaces", "success");
  };

  const handleCapitalizedCase = () => {
    let newText = text.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    localStorage.setItem("localStorage", newText);
    setText(newText);
    props.showAlert("Text converted to Capitalized Case!", "success");
  };

  const handleSentenceCase = () => {
    let newText = text
      .toLowerCase()
      .replace(/\.\s*([a-z])|^[a-z]/gm, (s) => s.toUpperCase());
    localStorage.setItem("localStorage", newText);
    setText(newText);
    props.showAlert("Text converted to Sentence case!", "success");
  };
  const handleInverseCase = () => {
    let newText = text.replace(/./g, (c) =>
      c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
    );
    localStorage.setItem("localStorage", newText);
    setText(newText);
    props.showAlert("Text converted to InVeRsE CaSe!", "success");
  };

  let handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
    // console.log(event.target.value)
    localStorage.setItem("localStorage", event.target.value);
  };

  const [text, setText] = useState(localStorage.getItem("localStorage"));
  // const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1 className="cg-h1-font mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control cg-${props.mode} cg-font`}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Enter text to analyze"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          UPPER CASE
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          lower case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleSpaces}
        >
          Remove All Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleAddHyphen}
        >
          Add ( - )
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleAddComma}
        >
          Add ( , )
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleAddUnderscore}
        >
          Add ( _ )
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCapitalizedCase}
        >
          Capitalized Case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleSentenceCase}
        >
          Sentence case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleInverseCase}
        >
          InVeRsE CaSe
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClear}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summery</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words {text.length} Characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
      </div>
      <div className="container">
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
