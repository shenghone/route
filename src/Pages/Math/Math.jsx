import React, { useState, useEffect, useRef } from "react";
import MathWrapper from "./Style/MathWrapper";
import { useParams } from "react-router-dom";
import axios from "axios";
import { gsap } from "gsap";

export default () => {
  const [counter, setCounter] = useState(0);
  const divRef = useRef(null);
  const params = useParams();
  const incre = () => {
    setCounter(counter + 1);
  };
  const decre = () => {
    setCounter(counter - 1);
  };
  console.log(params);
  useEffect(() => {
    if (divRef && divRef.current) {
      if (counter % 2 === 0) {
        gsap.to(divRef.current, 1, {
          scale: 1.1,
          background: "#9a1f40",
        });
      } else {
        gsap.to(divRef.current, 1, {
          scale: 0.9,
          background: "#74d4c0",
        });
      }
    }
  }, [counter]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=c593132c2e4c43799c7767555ad39b31"
      );
      console.log(data);
    };
    getData();
  }, []);

  return (
    <MathWrapper>
      <div ref={divRef}>
        <h4>{counter}</h4>
      </div>
      <div>
        <button onClick={() => incre()}>+</button>
        <button onClick={() => decre()}>-</button>
      </div>
    </MathWrapper>
  );
};
