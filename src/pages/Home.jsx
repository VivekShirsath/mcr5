import { useData } from "../context/DataContext"
import { Search } from "../components/Search"
import { RecipeCard } from "../components/RecipeCard"

export const Home = () => {
    
    return(
        <div className="flex flex-col gap-5 p-4">
        <Search />
        <RecipeCard/>
        </div>
    )
}