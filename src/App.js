import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState({});

  function showAlert(msg, type) {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert({});
    }, 1500);
  }

  function toggleMode() {
    if(mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor="#06033c";
      showAlert("Dark Mode has been Enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been Enabled", "success");
    }
  }
  return (
    // <Router>
    <div>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <TextForm heading="Enter text to Analyze" mode={mode} showAlert={showAlert}/>
        <div className='container'>
        {/* <Routes>
          <Route exact path="/about" element={<About mode={mode} />}>
            
          </Route>
          <Route exact path="/" element={<TextForm heading="Enter text to Analyze" mode={mode} showAlert={showAlert}/>}>
            
          </Route>
        </Routes> */}
        </div>
    </div>
    // </Router>
  );
}

export default App;
