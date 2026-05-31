import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import Order from './pages/Order';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/order' element={<Order/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
