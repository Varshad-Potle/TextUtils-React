import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopyClick = async () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to Clipboard", "success")
  }
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed", "success")
  }
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success")
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control" 
          style={{
            backgroundColor: props.mode === "dark" ? "#2b2b2b" : "white", 
            color: props.mode === "dark" ? "white" : "black"
          }}
          id="myBox" rows="8" value={text} onChange={handleOnChange}>
        </textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary" onClick={handleLowClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
        Remove Extra Space
      </button>
      <button className="btn btn-primary mx-2.5" onClick={handleClearClick}>
        Clear Text
      </button>
    </div>
    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the text box above"}</p>
    </div>
    </>
  );
}
