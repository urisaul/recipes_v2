import React, { useEffect, useState } from "react";
import { getReqTok } from "../utils/apiCalls";
import { useLocation, useParams } from "react-router-dom";

export function Post({ }) {
   let { id } = useParams();
   const loc_state = useLocation();
   const [recipe, setRecipe] = useState(loc_state.state["_recipe"] || {});
   console.log(id, loc_state);

   useEffect(() => {
      getReqTok("https://urisaul.com/u_api/api/recipes/single/" + id)
         .then((res) => res.json())
         .then((res) => setRecipe(res));
   }, []);

   return (
      <div>
         <img style={{ maxWidth: "350px" }} src={"https://urisaul.com/Recipes/images/recipes/" + recipe.recipe_image} alt={recipe.title} />
         <h1>{recipe.title}</h1>
         <p>{recipe.description}</p>
         {/* comments */}
      </div>
   );
}

export default Post;
