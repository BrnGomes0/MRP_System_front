import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Line from "../Icons/LineBosch/LineBosch";
import BoschIcon from "../Icons/BoschIcon/BoschIcon";
import { useMsal } from "@azure/msal-react";
import { callMsGraph } from "../../sso/MsGraphApiCalls";
import { loginRequest } from "../../sso/authConfig";
import { InteractionRequiredAuthError, InteractionStatus,} from "@azure/msal-browser";
import { useEffect } from "react";
import Logoutbutton from "../../components/LogoutButton/LogoutButton.jsx"
import imgLogOut from "../../assets/exit.png"


interface NavContext {
    path: string;
    name: string;
}

const NavLinks: NavContext[] = [
    { path: "/use_case", name: "Use Case" },
    { path: "/register_a_item", name: "Register a Item" },
    { path: "/inventory_management", name: "Inventory Management" },
    {path: "/po_management", name: "PO Management " },
];

const Header: React.FC = () => {
    const [activePath, setActivePath] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleClick = (path: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        setActivePath(path);
        navigate(path)
    };

const [imageUrl, setImageUrl] = useState("");
const [loading, setLoading] = useState(true);

const { instance, inProgress } = useMsal();
const account = instance.getActiveAccount();

useEffect(() => {
    if (!imageUrl && inProgress === InteractionStatus.None) {
      callMsGraph()
        .then((response) => {
          setImageUrl(response?.blobUrl);
          setLoading(false);
        })
        .catch((e) => {
          if (e instanceof InteractionRequiredAuthError) {
            instance.acquireTokenRedirect({
              ...loginRequest,
              account: instance.getActiveAccount(),
            });
          }
        });
    }
  }, [inProgress, instance, imageUrl, account?.name]);

    return (
        <nav className="shadow-md w-full fixed h-[73px] bg-white z-20">
            <Line />
            <div className="flex items-center">
                <BoschIcon />
                <div className="flex-1 flex justify-center">
                    <ul className="flex gap-16 list-none">
                        {NavLinks.map((link) => (
                            <li key={link.path}>
                                <a
                                    href={link.path}
                                    onClick={(event) => handleClick(link.path, event)}
                                    className={`relative text-black hover:text-gray-700 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 ${activePath === link.path ? 'after:w-full' : ''}`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <Logoutbutton/>
                </div>

            </div>
            <section className="navbar-content-child">
                <div className="user-data navbar-content-child">
                    <div className="profile">
                        <img src={imageUrl} alt="img-profile" className="img-profile" />
                    </div>
                </div>
            </section>
        </nav>
    );
};

export default Header;