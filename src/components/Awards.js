import React from "react";
import { useState, useEffect } from "react";
import AwardItem from "./AwardItem";

const Awards = (props) => {
  const [prize, setprize] = useState([]);

  // Function to fetch data from API call
  const updateNew = async () => {
    let url = `https://api.nobelprize.org/v1/prize.json?year=${props.year}&category=${props.category}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setprize(parsedData.prizes);
  };

  useEffect(() => {
    updateNew();
  }, []);

  return (
    <>
      <div>
        <h1
          className="text-center display-5 text-primary"
          style={{ marginTop: "75px", marginBottom: "20px" }}
        >
          Nobel Award Winners - {props.year}
        </h1>

        {prize.map((element) => {
          return (
            // Iterating all the elements of Prize Array
            <div key={prize.indexOf(element)} style={{ padding: "5px 80px" }}>
              <AwardItem laureates={element.laureates} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Awards;
