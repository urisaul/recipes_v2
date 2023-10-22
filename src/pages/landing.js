import React, { useEffect, useState } from "react";
import { getReqTok } from "../utils/apiCalls";
import { Link } from "react-router-dom";
import useIntersectionObserver from "../utils/hooks";
import { mergeArrs } from "../utils/funcs";
import OvalLoader from "../components/icons/Loader.tsx";

function Landing() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const url = true
      ? "http://localhost/api/recipes/all"
      : "https://urisaul.com/u_api/api/recipes/all";
    getReqTok(url)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, []);

  if (!data) return <></>;
  return (
    <div>
      <div
      style={{paddingTop: "50px"}}>
         <Link to={"/new-post"}>Add recipe</Link>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          justifyItems: "center",
          maxWidth: "95%",
          margin: "auto",
        }}
      >
        {data.map((item) => (
          <Link
            key={item.id}
            to={"/post/" + item.id}
            state={{ id: item.id, _recipe: item }}
            style={{ width: "250px" }}
          >
            <img
              style={{ maxWidth: "240px" }}
              src={
                "https://urisaul.com/Recipes/images/recipes/" +
                item.recipe_image
              }
            />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Landing;
