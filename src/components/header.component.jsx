import React, { useState } from "react";
// Icons
import { BsFillSunFill } from "react-icons/bs";
import { HiMoon } from "react-icons/hi";

const Header = () => {
    const [ThemeDark, setThemeDark] = useState(true);
    return (
        <div className="header-task">
            <h1>T O D O</h1>
            <div className="theme-box">
                {
                    ThemeDark ? <BsFillSunFill className="icon" /> : <HiMoon className="icon" />
                }
            </div>
        </div>
    )
}

export default Header
