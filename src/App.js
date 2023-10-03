import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Notepad from "./components/Notepad";

import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsandConditions from "./components/TermsandConditions";

function App() {
  const [mode, setMode] = useState("dark"); //whether dark mode is enable or not

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
      document.body.style.backgroundColor = "#072441";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      // document.body.textarea.placeholder.style.color = "white";
      showAlert("Light Mode has been enable", "success");
    }
    // state = {
    //   progress: 0
    // }
    // setProgress(progress){
    //   this.setState({progress: progress})
    // }
  };
  return (
    <>
      {/* <LoadingBar
        color="#f11946"
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      /> */}
      <Router>
        <Navbar title="Converting Case" mode={mode} toggleMode={toggleMode} />
        <Alert exact alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/notepad"
              element={
                <Notepad
                  heading="Local Notepad"
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            ></Route>
            <Route
              exact
              path="/privacypolicy"
              element={
                <PrivacyPolicy
                  heading="Privacy Policy"
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            ></Route>
            <Route
              exact
              path="/termsandcondiitions"
              element={
                <TermsandConditions
                  heading="Terms And Condiitions"
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
