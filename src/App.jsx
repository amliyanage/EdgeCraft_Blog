import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage.jsx";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={ <HomePage/> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
