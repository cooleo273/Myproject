import React from "react";
import Home from "../sccreens/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../sccreens/about";


const Router = () => {
  return (

    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route exact path="/"   element={<Home/>} />

        </Routes>
        <Routes>
          <Route exact path ="/about" element={<About/>}/>
        </Routes>
      </div>
    </BrowserRouter>

  )
}


export default Router;