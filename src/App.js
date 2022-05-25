// import { Route, Routes } from "react-router";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Details from "./components/Details";
import Favorites from "./components/Favorites";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Home></Home>
      <Favorites></Favorites>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/photo/details/:id" element={<Details />} />
        <Route path="/fav" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
