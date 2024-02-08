import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Navigation from './components/ui/Navigation'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home';
import ListadoAtletas from './components/pages/ListadoAtletas';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import ListadoNotas from './components/pages/ListadoAtletas';



export default function App() {
  return (
    <Router className="navbarr">
    <div>
      <Navigation></Navigation>
    </div>
    <Routes>
      <Route exact path="/home" element={<Home/>}>Home</Route>
      <Route exact path="/listadonotas" element={<ListadoNotas/>}>ListadoNotas</Route>
      <Route exact path="/login" element={<Login/>}>Login</Route>
      <Route exact path="/register" element={<Register/>}>Register</Route>
    </Routes>
   </Router>
   
    
  )
}
