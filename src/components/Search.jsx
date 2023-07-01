import { useData } from "../context/DataContext"
import { useState } from "react";

export const Search = () => {
    const {recipe,setRecipe,filter,setFilter,query,setquery} = useData();

    const handle = (e) => {
       setquery(e.target.value)
    }


    return(
        <div className="p-3">
            <input type="text" placeholder="Enter items" value={query} 
            onInput = {(e) => handle(e)} />
            
            <input type="radio" id="html" name="fav" value="name" 
            checked={filter === "name"}
            onChange = {() => setFilter("name")} className="p-3 mr-1"/>
            <label>Name</label>
            <input type="radio" id="css" name="fav" value="ingre"
            checked={filter === "ingre"}
            onChange = {() => setFilter("ingre")} className="p-3 mr-1"/>
            <label>Ingredients</label>
            <input type="radio" id="javascript" name="fav" value="type"
            checked={filter === "type"}
            onChange = {() => setFilter("type")} className="p-3 mr-1"/>
            <label>Cuisine Type</label>
        </div>
    )
}