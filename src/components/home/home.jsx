import React, { Component, useState } from "react";
import "./App.css";
import logo from "../../logo.svg";

// Axios
import axios from "axios";

export default function Home() {
  axios.get("http://www.dnd5eapi.co/api/monsters/").then((res) => {
    const data = res;
    console.log(data);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>DND Encounter Randomizer </p>
        <p>
          Edit <code>src/components/home.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
