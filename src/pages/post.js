import React, { useEffect, useState } from "react";
import { getReqTok } from "../utils/apiCalls";
import { useLocation, useParams } from "react-router-dom";

function Post({}) {
  let { id } = useParams();
  const loc_state = useLocation();
  const [recipe, setRecipe] = useState(loc_state.state["_recipe"] || {});
  console.log(id, loc_state);

  useEffect(() => {
    const url = true
      ? "http://localhost/api/recipes/single/"
      : "https://urisaul.com/u_api/api/recipes/single/";
    getReqTok(url + id)
      .then((res) => res.json())
      .then((res) => setRecipe(res));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
        width: "750px",
        margin: "auto",
        paddingBottom: "10px",
      }}
    >
      <img
        style={{ maxWidth: "350px" }}
        src={
          "https://urisaul.com/Recipes/images/recipes/" + recipe.recipe_image
        }
        alt={recipe.title}
      />
      <h1>{recipe.title}</h1>
      <h3>{recipe.description}</h3>
      <br />
      <h4>Ingredients</h4>
      <div dangerouslySetInnerHTML={{__html: recipe.ingredients}}></div>
      <br />
      <h4>Instructions</h4>
      <p style={{ whiteSpace: "pre" }}>{recipe.body}</p>
      {/* comments */}
    </div>
  );
}

export default Post;
