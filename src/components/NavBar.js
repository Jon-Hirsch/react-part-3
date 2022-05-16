import React from "react";
import "./css/navbar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <a className="navbar--link" href="/">
        Home
      </a>
      <a className="navbar--link" href="/personal-projects">
        Personal Projects
      </a>
      <a className="navbar--link" href="/articles">
        Articles
      </a>
      <a className="navbar--link" href="/search">
        Search
      </a>
    </div>
  );
}
