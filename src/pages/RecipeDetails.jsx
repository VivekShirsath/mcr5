import { useParams } from "react-router-dom"
import { useData } from "../context/DataContext";

export const RecipeDetails = () => {
    const {recipe,setRecipe} = useData();
    const {id} = useParams();
    
    const detail = recipe.filter(({_id}) => id === _id);
    console.log(detail)
    return(
        <div className="text-lg">
       
        {
            detail.map(({_id,name,ingredients,instructions,cuisineType,image}) => {
                return(
                    <div key={_id} className="text-center p-3">
                      <h3 className="mb-3">{name}</h3>
                      <div className="flex gap-2 shadow-md">
                        <img src={image} alt="image" className="self-start"/>
                        <div>
                            <h3><span className="font-bold">Cuisine</span> : {cuisineType}</h3>
                            <h3><span className="font-bold">Ingredients</span> : {ingredients.join(" ")}</h3>
                            <h3><span className="font-bold">Instructions</span></h3>
                            <ol>
                                {
                                    instructions.map((inst) =>
                                     <li>{inst}</li>)
                                }
                            </ol>
                        </div>
                      </div>
                    </div>
                )
            })
        }
        </div>
    )
}