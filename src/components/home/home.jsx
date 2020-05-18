import React, { Component, useState, useEffect } from "react";
import "./App.css";
import logo from "../../logo.svg";
import Filter from "./monsterFilter";

// Axios
import axios from "axios";

export default function Home() {
  // ------------------------------------------------------------------
  //initializing all variables
  // ------------------------------------------------------------------
  var baseURL = "http://www.dnd5eapi.co/api/monsters/";
  const monsterIndexArray = [];

  // ------------------------------------------------------------------
  //axios call to get all 5e Monster data
  // ------------------------------------------------------------------
  useEffect(() => {
    axios.get(baseURL).then((res) => {
      const data = res.data.results;
      for (var i = 0; i < data.length; i++) {
        var index = data[i].index;
        monsterIndexArray.push(index);
      }
      //Will take all the the index values from all 5e monsters.
      //Each element is searchable if plugged into baseURL
      // console.log(monsterIndexArray);
    });
  }, []);

  // ------------------------------------------------------------------
  // Initial Hook
  // ------------------------------------------------------------------
  function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
      setValue(e.target.value);
    }
    return [value, handleChange];
  }

  // ------------------------------------------------------------------
  // Log in form logic
  // ------------------------------------------------------------------
  function LoginForm() {
    const [requestedCR, setRequestedCR] = useInput("");

    function handleSubmit(e) {
      e.preventDefault();
      if (requestedCR > 30) {
        console.log(
          "So, you have chosen to fight Cthulhu, roll a new character!" //Thanks Cam
        );
      }
      if (requestedCR < 0) {
        console.log("You fool! Fight an Awakened Shrub!");
      } else {
        console.log("Requested Challenge Rating: " + requestedCR);
        // add Filter function here
      }
    }

    return (
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Requested CR"
          type="text"
          value={requestedCR}
          onChange={setRequestedCR}
        />
        <button>Submit</button>
      </form>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>DND Encounter Randomizer </p>
        <p>
          Edit <code>src/components/home.jsx</code> and save to reload.
        </p>
        {/* ---------------------------------------------- */}
        <LoginForm />
        {/* ---------------------------------------------- */}
      </header>
    </div>
  );
}
