import { useEffect, useState } from "react";
import { getReqTok } from "../utils/apiCalls";
import { Link } from "react-router-dom";
import "../styles/cmps/landing.css";

export function Landing() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = !true
      ? "http://localhost/api/recipes/all"
      : "https://urisaul.com/u_api/api/a_v1/225/2/get";
    getReqTok(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data)
        setIsLoading(false)
      });
  }, []);

  if (!data) return <></>;
  return (
    <div>

      <div>
        <Link to={"/new-post"}>Add recipe</Link>
      </div>
      <div class="recipe-container">
        {isLoading && <div>Loading...</div>}
        {data.map((item) => (
          // <Link
          //   key={item.id}
          //   to={"/post/" + item.id}
          //   state={{ id: item.id, _recipe: item }}
          //   style={{ width: "250px" }}
          // >
            <div class="recipe-card" key={item.id}>
              <img src={item.properties.image} alt="Recipe 1" />
              <div class="recipe-details">
                <h3>{item.properties.title}</h3>
                <p>{item.properties.description}</p>
                <Link
                  key={item.id}
                  to={"/post/" + item.id}
                  state={{ id: item.id, _recipe: item }}
                  style={{ width: "250px" }}
                >
                  Read more
                </Link>
              </div>
            </div>
          // </Link>
        ))}
      </div>
    </div>
  );
}

export default Landing;
