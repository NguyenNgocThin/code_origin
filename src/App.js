import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { MapContainer } from "react-leaflet";
import Map from "./component_Map/Map";
import SearchBar from "./component/Search";
import LoginForm from "./component_Form/Login";
import { Route, Routes, Router } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Register from "./component_Form/Register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Register" element={<Register/>}/>
        <Route path="Login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
