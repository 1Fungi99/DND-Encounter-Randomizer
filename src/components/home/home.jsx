import React, { Component, useState } from "react";
import "./App.css";
import logo from "../../logo.svg";

// Axios
import axios from "axios";

export default function Home() {
  //initializing all variables
  var baseURL = "http://www.dnd5eapi.co/api/monsters/";

  //axios call to get all 5e Monster data
  axios.get(baseURL).then((res) => {
    const data = res.data.results;
    const array = [];
    for (var i = 0; i < data.length; i++) {
      var index = data[i].index;
      array.push(index);
    }
    //Will take all the the index values from all 5e monsters.
    //Each element is searchable if plugged into baseURL
    // console.log(array);
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
