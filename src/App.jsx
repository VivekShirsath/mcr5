
import './App.css'
import {Routes,Route} from "react-router-dom"
import { Home } from './pages/Home'
import { RecipeDetails } from './pages/RecipeDetails'
function App() {
  

  return (
  <Routes>
  <Route>
  <Route path="/" element={<Home/>}/>
  <Route path="/details/:id" element={<RecipeDetails/>}/>
  </Route>
  </Routes>
  )
}

export default App
