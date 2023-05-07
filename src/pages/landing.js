import React, { useEffect, useState } from "react";
import { getReqTok } from "../utils/apiCalls";
import { Link } from "react-router-dom";
import useIntersectionObserver from "../utils/hooks";
import { mergeArrs } from "../utils/funcs";
import OvalLoader from "../components/icons/Loader.tsx";

function Landing({}) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const target = useIntersectionObserver(
    () => {
      console.log("Target element is visible");
      // setPage(page + 1);
    },
    { rootMargin: "0px 0px 100px 0px" }
  );

  useEffect(() => {
    getReqTok("https://urisaul.com/u_api/api/recipes/all?page=" + page)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, [page]);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          justifyContent: "center",
          maxWidth: "95%",
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
            <h2>{item.Title}</h2>
            <p>{item.description}</p>
          </Link>
        ))}
      </div>
      <div
        ref={target}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <span style={{display: "flex", alignItems: "center", marginBottom: "15px"}}><OvalLoader />&nbsp;&nbsp;Loading more delicious recipes...</span>
      </div>
    </>
  );
}

export default Landing;
