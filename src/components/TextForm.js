import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");


  function handleOnChange(event) {
    setText(event.target.value);
  }

  function handleUppercase() {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }

  function handleLowercase() {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");

  }

  function handleReverse() {
    let newText = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newText += text[i];
    }
    setText(newText);
    props.showAlert("Text Reversed!", "success");

  }

  function handleClearText() {
    const newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");

  }

  function handleCopy() {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");

  }

  function handleSpaces() {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");

  }

  return (
    <div className="container">
      <div style={{color: props.mode === "light" ? "black" : "white"}}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{backgroundColor: props.mode === "light" ? "white" : "#161b5c", color: props.mode === "light" ? "black" : "white"}}
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"

          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUppercase}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowercase}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleReverse}>
          Reverse
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
          Clear Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleSpaces}>
          Handle Spaces
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === "light" ? "black" : "white"}}>
        <h2>Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => {return element !== ""}).length} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Nothing to preview "}</p>
      </div>
    </div>
  );
}
