import React, { useEffect, useState } from "react";
import { deleteReq, getReqTok } from "../utils/apiCalls";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "../styles/cmps/post.css";

export function Post({ }) {
  let { id } = useParams();
  const loc_state = useLocation();
  const navigate = useNavigate();
  const [messageBox, setMessageBox] = useState({
    message: "",
    success: false,
  })
  const [recipe, setRecipe] = useState({properties: {}});

  useEffect(() => {
    // !recipe && setRecipe(loc_state.state?._recipe || {});
    const url = !true
      ? "http://localhost/api/recipes/single/"
      : "https://urisaul.com/u_api/api/a_v1/225/2/get/";
    getReqTok(url + id)
      .then((res) => res.json())
      .then((res) => setRecipe(res));
  }, []);

  const deleteRecipe = (e) => {
    const url = !true
    ? "http://localhost/api/recipes/add"
    : "https://urisaul.com/u_api/api/a_v1/225/2/delete";
    deleteReq(url, undefined, {ids: [id]})
    .then((res) => {
      if (!res.ok) {
        throw new Error('Something went wrong');
      }
      return res.json();
    })
    .then((res) => {
      setMessageBox({
        message: "Recipe deleted successfully",
        success: true,
      })
      navigate("/")
    })
    .catch((err) => {
      console.log(err.message);
      setMessageBox({
        message: err.message,
        success: false,
      })
    });
  }

  return (

    <div class="recipe-container single">
          <Link to={"/edit-post/"+id}>Edit</Link>
          <Link onClick={deleteRecipe}>Delete</Link>
      <div class="recipe-card-full">
        <img src={recipe.properties.image} alt={recipe.properties.title} />
        <div class="recipe-details">
          <h1>{recipe.properties.title}</h1>
          <p>{recipe.properties.description}</p>

          <h2>Ingredients:</h2>
          <div className="line-b">
            {recipe.properties.ingredients}
          </div>

          <h2>Instructions:</h2>
          <div className="line-b">
            {recipe.properties.instructions}
          </div>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Post;
