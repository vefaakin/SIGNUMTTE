import logo from "./logo.svg";
import "./App.css";
import Screen1 from "./components/screen-1/screen-1";
import CountriesDetails from "./components/screen-1/countriesdetails";
import Screen2 from "./components/screen-2/screen-2";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <div className="navbar">
        <a className="nav-item" href="/">
          Screen-1
        </a>
        <a className="nav-item" href="/screen2">
          Screen-2
        </a>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Screen1 />} />
          <Route path="/countrydetails" element={<CountriesDetails />} />
          <Route path="/screen2" element={<Screen2 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
