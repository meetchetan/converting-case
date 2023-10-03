import React, { useState } from "react";

if (localStorage.getItem("localNotepad") === null) {
  localStorage.setItem("localNotepad", "");
}

export default function Notepad(props) {
  let handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
    // console.log(event.target.value)
    localStorage.setItem("localNotepad", event.target.value);
  };
  const [text, setText] = useState(localStorage.getItem("localNotepad"));
  return (
    <>
      <div className="container">
        <h1 className="cg-h1-font mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control cg-${props.mode} cg-font`}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="20"
            placeholder="Write Anything, your text will get saved automatically!"
          ></textarea>
        </div>
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
