import React, { useEffect, useState } from "react";
import { postReq } from "../utils/apiCalls";
import { useLocation, useParams } from "react-router-dom";

export function NewPost({}) {
  let { id } = useParams();
  const loc_state = useLocation();
  const [recipe, setRecipe] = useState({
    recipe_image: "",
    title: "",
    description: "",
    ingredients: "",
    body: "",
  });

  useEffect(() => {}, []);

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = true
      ? "http://localhost/api/recipes/add"
      : "https://urisaul.com/u_api/api/recipes/add";
    postReq(url, undefined, recipe)
      .then((res) => res.json())
      .then((res) => setRecipe(res.res));
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
        width: "750px",
        margin: "auto",
        paddingTop: "50px",
        paddingBottom: "10px",
      }}
    >
      <h1>New Recipe</h1>
      <br />
      <label htmlFor="image">Recipe Image</label>
      <input type="file" id="image" name="recipe_image" />
      <img
        style={{ maxWidth: "200px" }}
        src={
          recipe.recipe_image ||
          "https://worldfoodtour.co.uk/wp-content/uploads/2013/06/neptune-placeholder-48-300x300.jpg"
        }
        alt={"Recipe Image"}
      />
      <br />
      <label htmlFor="title">Recipe Title</label>
      <input
        type="text"
        id="title"
        value={recipe.title || ""}
        onChange={handleChange}
        name="title"
      />
      <br />
      <label htmlFor="description">Recipe Description</label>
      <textarea
        id="description"
        rows={3}
        value={recipe.description || ""}
        onChange={handleChange}
        name="description"
      />
      <br />
      <label htmlFor="ingredients">Recipe Ingredients</label>
      <textarea
        id="ingredients"
        rows={10}
        value={recipe.ingredients || ""}
        onChange={handleChange}
        name="ingredients"
      />
      <br />
      <label htmlFor="instructions">Recipe Instructions</label>
      <textarea
        id="instructions"
        rows={10}
        value={recipe.body || ""}
        onChange={handleChange}
        name="body"
      />
      <br/>
      <button>Save</button>
    </form>
  );
}

export default NewPost;
