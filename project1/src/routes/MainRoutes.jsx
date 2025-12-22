import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import CreateRecipe from '../pages/CreateRecipe'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
        <Route path='/create-recipe' element={<CreateRecipe />} />

    </Routes>
  )
}

export default MainRoutes