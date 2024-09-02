import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Line from "../Icons/LineBosch/LineBosch";
import BoschIcon from "../Icons/BoschIcon/BoschIcon";

interface NavContext {
    path: string;
    name: string;
}

const NavLinks: NavContext[] = [
    { path: "/use_case", name: "Use Case" },
    { path: "/register_a_item", name: "Register a Item" },
    { path: "/warenhouse", name: "Inventory Management" },
    {path: "/manufacturing", name: "Manufacturing" },
];

const Header: React.FC = () => {
    const [activePath, setActivePath] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleClick = (path: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        setActivePath(path);
        navigate(path)
    };

    return (
        <nav className="shadow-md w-full fixed h-[73px] bg-white">
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
            </div>
        </nav>
    );
};

export default Header;