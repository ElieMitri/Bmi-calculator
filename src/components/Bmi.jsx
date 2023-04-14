import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const Bmi = () => {
  const searchRef = useRef("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [outcome, setOutcome] = useState();
  const [response, setResponse] = useState();

  function getBmiWeight(e) {
    setWeight(e.target.value);
  }

  function getBmiHeight(e) {
    setHeight(e.target.value);
  }

  const getOutcome = () => {
    const bmi = (weight / (height * height)) * 10000;
    if (bmi < 18) {
      setOutcome("You are underweight!");
    } else if (bmi > 30) {
      setOutcome("You are obese!");
    } else if (bmi > 25) {
      setOutcome("You are overweight!");
    } else {
      setOutcome("You are healthy!");
    }
    console.log(bmi);
  };

  return (
    <div className="bmi__wrapper">
      <h1 className="bmi__title">Calculate your bmi</h1>
      <div className="bmi__inputs">
        <input
          type="number"
          className="bmi__input"
          ref={searchRef}
          placeholder="Insert weight"
          onChange={getBmiWeight}
        />
        <input
          type="number"
          className="bmi__input"
          ref={searchRef}
          placeholder="Insert height"
          onChange={getBmiHeight}
        />
      </div>
      <div className="weight__wrappers">
        <h1 className="weight">{weight} Kg</h1>
        <h1 className="height">{height} Cm</h1>
      </div>

      {!weight || !height ? (
        <h1 className="needed__statement">Please fill out the needed!</h1>
      ) : (
        <button className="outcome__button" onClick={getOutcome}>
          Know Result
        </button>
      )}
      <h1 className="outcome">{outcome}</h1>
    </div>
  );
};

export default Bmi;
