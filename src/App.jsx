
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


function App() {


  return (
    <CartProvider>
    <Router>
      <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route exact path='/Register' element={<Register/>}/>
       <Route exact path='/Login' element={<Login/>}/>
    </Routes>
    </Router>
    </CartProvider>
  )
}

export default App
