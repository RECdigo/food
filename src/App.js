import './App.css';
import Navbar from './Component/Navbar'
import Menu from './Component/Menu'
import Head from './Component/Head'
import { BrowserRouter, Routes, Route, Link, Router, Switch } from "react-router-dom"
import Payment from './Component/Payment'



function App() {

  return (
    
    <BrowserRouter>
    
          <div className='appContainer'>  
            <Head/>
            
            <div className='app'>
              
              <Routes>                
                <Route path='/' element={<Menu />} />  
                <Route path='/payment' element={<Payment />} />             
              </Routes>    
            </div>
          </div>

    </BrowserRouter>
  

  )
}

export default App;
