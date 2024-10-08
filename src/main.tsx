import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import './index.css'
import Header from "./components/Header/Header";
import RegisterItem from "./pages/RegisterAItem/RegisterItem";
import UseCase from "./pages/UseCase/UseCase";
import Footer from "./components/Footer/Footer";
import RegisterAInforRecord from "./Pages/RegisterAInforRecord/RegisterAInforRecord";
import Warenhouse from "./Pages/WarenHouse/WarenHouse";
import Manufacturing from "./Pages/Manufacturing/Manufacturing";
import Login from "./Pages/Login/Login";
import Error from "./Pages/ErrorPage/Error";



const App = () => {

  const location = useLocation();

  const isLoginPage = location.pathname === "/login" || location.pathname === "/";

  return (
    <>
    {!isLoginPage && <Header/>}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register_a_item" element={<RegisterItem />} />
        <Route path="/use_case" element={<UseCase />} />
        <Route path="/info_record" element={<RegisterAInforRecord />} />
        <Route path="/inventory_management" element={<Warenhouse />} />
        <Route path="/po_management" element={<Manufacturing />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
      {!isLoginPage && <Footer/>}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);