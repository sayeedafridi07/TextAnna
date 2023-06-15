import Nav from "./Components/Nav";
import Alert from "./Components/Alert";
import Textform from "./Components/Textform";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [effect, setEffect] = useState("Click to enable dark mode");
  const [alert, setAlert] = useState(null);
  const [btn, setBtn] = useState("");

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
      document.body.style.backgroundColor = "black";
      setEffect("Click to disable dark mode");
      showAlert("Dark mode has been enabled", "success");
      setBtn("-outline");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setEffect("Click to enable dark mode");
      showAlert("Light mode has been enabled", "success");
      setBtn("");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Nav effect={effect} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <Textform
                showAlert={showAlert}
                mode={mode}
                btn={btn}
                heading={"Enter your text to analyse"}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
