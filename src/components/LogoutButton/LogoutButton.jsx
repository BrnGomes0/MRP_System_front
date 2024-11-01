import { useMsal } from "@azure/msal-react";
import React from "react";
import imgLogout from "../../assets/exit.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const logoutButton = () => {
    const { instance } = useMsal();

  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false); // Estado para controlar o logout

  const handleLogout = async (logoutType) => {
    setIsLoggingOut(true); // Inicia o estado de logout

      if (logoutType === "popup") {
        await instance.logoutPopup();
        setIsLoggingOut(false); // Finaliza o estado de logout
        navigate("/login"); // Redireciona após o logout
      } else if (logoutType === "redirect") {
        instance.logoutRedirect({
          postLogoutRedirectUri: "/login", // URL para redirecionar após logout
        });
      }
  };

  return (
    <div className="p-4">
      <button onClick={() => handleLogout("popup")} color="inherit">
        <img src={imgLogout} className="w-[35px] h-[30px] " />
      </button>
    </div>
  );
}

export default logoutButton