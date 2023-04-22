import React, { useEffect } from "react";
import { getReqTok } from "../utils/apiCalls";
import { Link } from "react-router-dom";

function Landing({}) {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    getReqTok("https://urisaul.com/u_api/api/recipes/all")
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        justifyContent: "center",
        maxWidth: "95%",
      }}
    >
      {data.map((item) => (
        <Link key={item.id} to={"/post/" + item.id} state={{"id": item.id, "_recipe" : item}} style={{ width: "250px" }}>
          <img
            style={{ maxWidth: "240px" }}
            src={
              "https://urisaul.com/Recipes/images/recipes/" + item.recipe_image
            }
          />
          <h2>{item.Title}</h2>
          <p>{item.description}</p>
        </Link>
      ))}
    </div>
  );
}

export default Landing;
