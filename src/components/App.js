import React from "react";
import HelloWorld from "./HelloWorld";
import NavBar from "./NavBar";

export default function App() {
  return (
    <div>
      <NavBar />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <NavBar />
    </div>
  );
}
