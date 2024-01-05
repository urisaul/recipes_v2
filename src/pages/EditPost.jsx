import React, { useEffect, useState } from "react";
import { getReqTok, patchReq } from "../utils/apiCalls";
import { Link, useParams } from "react-router-dom";
import { convertImageToBase64 } from "../utils/funcs";

export function EditPost({ }) {
  let { id } = useParams();
  const [messageBox, setMessageBox] = useState({
    message: "",
    success: false,
  })
  const [recipe, setRecipe] = useState({
    image: "",
    title: "",
    description: "",
    ingredients: "",
    instructions: "",
  });

  useEffect(() => {
    const url = !true
      ? "http://localhost/api/recipes/single/"
      : "https://urisaul.com/u_api/api/a_v1/225/2/get/";
    getReqTok(url + id)
      .then((res) => res.json())
      .then((res) => setRecipe(res));
  }, []);

  const handleChange = (e) => {
    if (e.target.type === "file") {
      convertImageToBase64(e.target)
        .then(b64File => (
          setRecipe({ ...recipe, properties: { ...recipe.properties, [e.target.name]: b64File } })
        ))
    } else {
      setRecipe({ ...recipe, properties: { ...recipe.properties, [e.target.name]: e.target.value } });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = !true
      ? "http://localhost/api/recipes/add"
      : "https://urisaul.com/u_api/api/a_v1/225/2/update";
    patchReq(url, undefined, recipe)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Something went wrong');
        }
        return res.json();
      })
      .then((res) => {
        // setRecipe(res.data)
        setMessageBox({
          message: "Recipe updated successfully",
          success: true,
        })
      })
      .catch((err) => {
        console.log(err.message);
        setMessageBox({
          message: err.message,
          success: false,
        })
      });
  };

  return (
    <div class="recipe-container">
      <div class="recipe-card-full">
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
          <h1>Edit Recipe</h1>
          <br />
          {messageBox.message && <div style={{ border: (messageBox.success ? "none" : "1px solid red") }}>{messageBox.message}</div>}
          <br />
          <label htmlFor="image">Recipe Image</label>
          <input type="file" id="image" name="image" onChange={handleChange} />
          <img
            style={{ maxWidth: "200px" }}
            src={
              recipe.properties?.image ||
              "https://worldfoodtour.co.uk/wp-content/uploads/2013/06/neptune-placeholder-48-300x300.jpg"
            }
            alt={"Recipe Image"}
          />
          <br />
          <label htmlFor="title">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={recipe.properties?.title || ""}
            onChange={handleChange}
            name="title"
          />
          <br />
          <label htmlFor="description">Recipe Description</label>
          <textarea
            id="description"
            rows={3}
            value={recipe.properties?.description || ""}
            onChange={handleChange}
            name="description"
          />
          <br />
          <label htmlFor="ingredients">Recipe Ingredients</label>
          <textarea
            id="ingredients"
            rows={10}
            value={recipe.properties?.ingredients || ""}
            onChange={handleChange}
            name="ingredients"
          />
          <br />
          <label htmlFor="instructions">Recipe Instructions</label>
          <textarea
            id="instructions"
            rows={10}
            value={recipe.properties?.instructions || ""}
            onChange={handleChange}
            name="instructions"
          />
          <br />
          {messageBox.message && <div style={{ border: (messageBox.success ? "none" : "1px solid red") }}>{messageBox.message}</div>}
          <br />
          <button>Save</button>
        </form>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default EditPost;
