import './App.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import apiKey from './config'
import Search from './components/Search'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='container'>

      <Search /> 
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <> </> }/>
          <Route path="/cats" element={ <> </> }/>
          <Route path="/dogs" element={ <> </> }/>
          <Route path="/computers" element={ <> </> }/>
          <Route path="/search/:query" element={ <> </> }/>
        </Routes>
      </BrowserRouter>
    </div>

    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more stuff
    //   </p>
    // </>
  )
}

export default App
