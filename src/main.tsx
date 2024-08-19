import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import './index.css'


import RegisterItem from "./pages/RegisterAItem/RegisterItem";
import UseCase from "./pages/UseCase/UseCase";
import Footer from "./components/Footer/Footer";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/register_a_item" element={<RegisterItem/>}/>
          <Route path="/use_case" element={<UseCase/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
)