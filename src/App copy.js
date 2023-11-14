  import './App.css';
  import Navbar from './Component/Navbar'
  import Menu from './Component/Menu'
  import Head from './Component/Head'
  import { BrowserRouter, Routes, Route, Link, Router, Switch } from "react-router-dom"




  function App() {

    return (
      

            <div className='appContainer'>
            
            
              <Head/>
              
              <div className='app'>
                <Navbar />
                <Menu />        
              </div>
            
            
            </div>

    

    )
  }

  export default App;
