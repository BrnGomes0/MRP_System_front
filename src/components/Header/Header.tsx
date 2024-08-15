import React, { useState } from "react";
import Line from "../LineBosch/LineBosch";
import BoschIcon from "../BoschIcon/BoschIcon";

interface NavContext {
    path: string;
    name: string;
}

const NavLinks: NavContext[] = [
    { path: "/warenhouse", name: "Warenhouse" },
    { path: "/registerItem", name: "Register Item" },
    { path: "/manufacturing", name: "Manufacturing" },
    { path: "/about", name: "About" },
];

const Header: React.FC = () => {
    const [activePath, setActivePath] = useState<string | null>(null);

    const handleClick = (path: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        setActivePath(path);
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