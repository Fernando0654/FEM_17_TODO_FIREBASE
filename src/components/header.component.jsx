import React from "react";
// Icons
import { FiSun } from "react-icons/fi";
import { HiMoon } from "react-icons/hi";

const Header = () => {
    return (
        <div className="header-task">
            <h1>TODO</h1>
            <div className="theme-box">
                <FiSun />
                <HiMoon />
            </div>
        </div>
    )
}

export default Header
