import { useState } from "react";
import { useData } from "../context/DataContext";
import { v4 as uuid } from "uuid";

export const Modal = ({type,setModal}) => {
   const {recipe,setRecipe} = useData();
    const [data,setData] = useState({
      name : "",
      ingredients:"",
      instructions:""
      ,cuisineType:"",
      image:"",
      _id : uuid(),
    })
    console.log(recipe);
    const saveRecipe = (e) => {
        e.preventDefault();
        localStorage.setItem('details',JSON.stringify({
            recipe : [...recipe,data]
        }));
         setRecipe([...recipe,data])
         setModal(false);
    }
    return(
        <div className=" flex absolute top-2 flex-col justify-center ">
            <form className="flex flex-col p-4 gap-4 bg-black shadow-sm ">
                <input type="text" name="name" placeholder="Enter name"
                value={data.name} onInput = {(e) => setData({...data,name:e.target.value})} required/>
                <input type="text" name="ingredients" placeholder="Enter ingredients"
                value={data.ingredients}
                onInput = {(e) => setData({...data,ingredients:e.target.value})}
                required/>
                <input type="text" name="cuisine type" placeholder="Enter cuisine type" value={data.cuisineType}
                onInput = {(e) => setData({...data,cuisineType:e.target.value})}
                required/>
                <input type="text" name="instructions" placeholder="Enter instructions" value={data.instructions}
                onInput = {(e) => setData({...data,instructions:e.target.value})}/>
                <input type="text" name="image" placeholder="Enter image"
                value={data.image}
                onInput = {(e) => setData({...data,image:e.target.value})}
                required/>
                <button onClick = {(e) => saveRecipe(e)} className="text-white">Save</button>
            </form>
        </div>
    )
}