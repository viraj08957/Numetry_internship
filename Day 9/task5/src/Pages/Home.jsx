/* eslint-disable no-unused-vars */
import React from "react";
import Products from "../components/Products";

function Home() {
  return (
    <div>
      <h2
        style={{ display: "flex", justifyContent: "center" }}
        className="heading"
      >
        Welcome To the Store
      </h2>
      <section>
        <h5>Products</h5>
        <Products />
      </section>
    </div>
  );
}

export default Home;
