import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  // const [green, setGreen] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2b2b2b";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled", "success");
      // setInterval(() => {
      //   document.title = "Install TextUtils now";
      // }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled", "success");
      // document.title = "TextUtils - Light Mode"
    }
  };

  // const greenMode = () => {
  //   if (green === "light") {
  //     setGreen("green");
  //     document.body.style.backgroundColor = "#0B6623";
  //     document.body.style.color = "white";
  //     showAlert("Green Mode Enabled", "success");
  //    }
  //    else {
  //     setGreen("light");
  //     document.body.style.backgroundColor = "white";
  //     document.body.style.color = "black";
  //     showAlert("Green Mode Disabled", "success");
  //   }
  // };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          // aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
          // green={green}
          // greenMode={greenMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route path="/about" element={<About />} />
            <Route */}
              {/* exact path="/"
              element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              {/* }
            /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
