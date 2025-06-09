 
import {publicRoutes} from './routes'
import './App.css'
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() { 
  return ( 
    <React.Fragment>
      <Routes> 
        {publicRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={route.component}
            key={idx}
            exact={true}
          />
        ))}
      </Routes>
    </React.Fragment> 
  )
}

export default App
