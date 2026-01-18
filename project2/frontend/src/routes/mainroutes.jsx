import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CreateProduct from '../pages/admin/CreateProduct'
import UpdateProduct from '../pages/admin/UpdateProduct'
import ProductDetails from '../pages/ProductDetails'
const mainroutes = () => {

  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin/create-product' element={<CreateProduct />} />
        <Route path='/admin/update-product/:id' element={<UpdateProduct />} />
        <Route path='/product/:id' element={<ProductDetails />} />
    </Routes>
  )
}

export default mainroutes