import { useData } from "../context/DataContext"
import { useState } from "react";
import { Modal } from "./Modal";
import { NavLink } from "react-router-dom";

export const RecipeCard = () => {
    const {recipe,setRecipe,loading,filter,setFilter,query,setquery} = useData();
    const [showModal,setModal] = useState(false);
    
    const filterByName = filter === "name" && query !== "" ? recipe?.filter(({name}) => name?.toLowerCase()?.includes(query?.toLowerCase())) : recipe;

    const filterByCuisine = filter === "type" && query!== "" ? recipe?.filter(({cuisineType}) => cuisineType?.toLowerCase()?.includes(query?.toLowerCase())) : filterByName;

   const filterByIngredients = filter==="ingre" && query!== ""  ? recipe?.filter(({ingredients}) => Array.isArray(ingredients)? ingredients?.some((val) => val?.toLowerCase().includes(query?.toLowerCase())) : ingredients.toLowerCase()?.includes(query?.toLowerCase())) : filterByCuisine

   const handleDelete = (id) => {
      setRecipe(recipe.filter(({_id}) => _id !== id))
   }
    return(
       <div className="flex gap-3 flex-wrap relative">
       {
        loading ? <div>Loading</div>
        :
        filterByIngredients?.map(({_id,name,ingredients,instructions,cuisineType,image}) => {
            return(
                <div key={_id} className="shadow-lg p-3 text-center">
                 <img src={image} className="w-fit"/>
                 <h3>{name}</h3>
                 <h3>Type : {cuisineType}</h3>
                 <h3>Ingredients : <NavLink to ={"/details/" + _id}>See Recipe</NavLink></h3>
                 <h3>Cuisine Type : <NavLink to ={"/details/" + _id}>See Recipe</NavLink></h3>
                 <button className="p-2 bg-black text-white rounded-md"
                 onClick = {() => handleDelete(_id)}>Delete</button>
                </div>
                
            )
        })
        
       }
       <button onClick = {() => setModal(true)}>Add recipe</button>
       {
        showModal && <Modal type="add" setModal={setModal}/>
       }
       </div>
    )
}