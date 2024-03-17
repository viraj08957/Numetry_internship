/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="Logo">My Fashion STORE</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Carts
        </Link>
        <Link className="navLink" to="/cart">
          Special Offers
        </Link>
      </div>
      <span className="cartCount">Cart Items :{items.length}</span>
    </div>
  );
}

export default Navbar;
