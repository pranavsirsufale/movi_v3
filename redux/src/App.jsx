import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import Home from "./components/Home";
import Products from "./components/Products";

function App() {
  return (
    <>
      <div className="w-screen h-screen">
        <nav className="pt-5 flex justify-center gap-10">
          <Link to='/' > Home </Link>
          <Link to="/user"> Users </Link>
          <Link to='/products'> Product </Link>
        </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      </div>
      
    </>
  );
}

export default App;
