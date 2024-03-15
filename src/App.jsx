import './App.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import apiKey from './config'
import Search from './components/Search'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cats from './components/Cats'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='container'>
      <BrowserRouter>
      <Search /> 
      <Nav />
        <Routes>
          <Route path="/" element={ <> </> }/>
          <Route path="/cats" element={ <> <Cats/> </> }/>
          <Route path="/dogs" element={ <> </> }/>
          <Route path="/computers" element={ <> </> }/>
          <Route path="/search/:query" element={ <> </> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
