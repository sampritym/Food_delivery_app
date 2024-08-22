
import './App.css'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { CartProvider } from './components/ContextReducer'
import Cart from './components/Cart'
import MyOrder from './pages/MyOrder/MyOrder'



function App() {


  return (
    <CartProvider>
    <Router>
      <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route exact path='/Register' element={<Register/>}/>
       <Route exact path='/Login' element={<Login/>}/>
       <Route exact path='/myCart' element={<Cart/>}/>
       <Route exact path='/myOrder' element={<MyOrder/>}/>
    
    </Routes>
    </Router>
    </CartProvider>
  )
}

export default App
