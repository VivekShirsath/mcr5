
import { createContext,useContext,useState,useEffect } from "react";
import { recipeData } from "../data";

export const DataContext = createContext(null);

export const DataProvider = ({children}) => {
    //const storage = JSON?.parse(localStorage?.getItem('details'));
    const [recipe,setRecipe] = useState([]);
    const [loading,setLoading] = useState(true);
    const [filter,setFilter] = useState("name");
    const [query,setquery] = useState("");
   

    useEffect(() => {
       getRecipe()
    },[])

    const getRecipe = () => {
        // localStorage.setItem('details',JSON.stringify({
        //     recipe : recipeData
        // }));
        const storage = JSON?.parse(localStorage?.getItem('details'));
        console.log(storage)
        storage=== null ?
        setRecipe([...recipeData]) : setRecipe([...recipeData,JSON?.parse(localStorage?.getItem('details'))?.recipe])
        setLoading(false);
    }
   console.log(recipe)
    return(
        <DataContext.Provider value={{recipe,setRecipe,loading,filter,setFilter,query,setquery}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)