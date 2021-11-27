import React from "react";
import Home from "../sccreens/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const Router = () => {
  return (

    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route exact path="/"   element={<Home/>} />

        </Routes>
      </div>
    </BrowserRouter>

  )
}


export default Router;