import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "../../logo.svg";

// Axios
import axios from "axios";

export default function Home() {
  // ------------------------------------------------------------------
  //initializing all variables
  // ------------------------------------------------------------------
  var baseURL = "http://www.dnd5eapi.co/api/monsters/";
  const monsterIndexArray = [];
  const requestedCRArray = [];

  // ------------------------------------------------------------------
  var monsterArray = [];
  // ------------------------------------------------------------------

  // ------------------------------------------------------------------
  // useEffect(() => {
  //   axios.get(baseURL).then((res) => {
  //     const data = res.data.results;
  //     for (var i = 0; i < data.length; i++) {
  //       var index = data[i].index;
  //       monsterIndexArray.push(index);
  //     }
  //     //Will take all the the index values from all 5e monsters.
  //     //Each element is searchable if plugged into baseURL
  //     // console.log(monsterIndexArray);
  //   });
  // });
  // ------------------------------------------------------------------

  // ------------------------------------------------------------------
  //axios call to get all 5e Monster data
  // ------------------------------------------------------------------
  useEffect(() => {
    // ------------------------------------------------------------------
    // Getting all searchable indexs
    // ------------------------------------------------------------------
    axios.get(baseURL).then((res) => {
      const data = res.data.results;
      for (var i = 0; i < data.length; i++) {
        var searchableTerms = data[i].index;
        monsterIndexArray.push(searchableTerms);
      }
      // ------------------------------------------------------------------
      // Gathering all relevent data for each monster
      // ------------------------------------------------------------------
      for (var i = 0; i < monsterIndexArray.length; i++) {
        axios.get(baseURL + monsterIndexArray[i]).then((res) => {
          var monsterData = res.data;
          monsterArray.push(monsterData);
        });
      }
    });
  });

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

    // ------------------------------------------------------------------
    // Error Messages/Sucess
    // ------------------------------------------------------------------
    function handleSubmit(e) {
      e.preventDefault();
      if (requestedCR > 30) {
        console.log(
          "So, you have chosen to fight Cthulhu, roll a new character!" //Thanks Cam
        );
      } else if (requestedCR < 0) {
        console.log("You fool! Fight an Awakened Shrub!");
      } else {
        console.log("Requested Challenge Rating: " + requestedCR);
        // monsterFilter(requestedCR);
        console.log(monsterArray);
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

  // function monsterFilter(requestedCR) {
  //   for (var i = 0; i < monsterIndexArray.length; i++) {
  //     axios.get(baseURL + monsterIndexArray[i]).then((res) => {
  //       var CR = res.data.challenge_rating;
  //       if (CR.toString() === requestedCR) {
  //         // var name = res.data.name;
  //         var monsterIndex = res.data.index;
  //         // console.log(CR, name, monsterIndex);
  //         axios.get(baseURL + monsterIndex).then((res) => {
  //           requestedCRArray.push(res.data);
  //           console.log(res.data);
  //         });
  //       }
  //     });
  //   }
  // }

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
