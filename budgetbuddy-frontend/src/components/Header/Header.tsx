// Header.tsx
import { useState } from 'react';
import "./Header.css";
import logo from "../../assets/budgetbuddy-logo-2.png";

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <header>
            <div className="header-left">
                <img src={logo} alt="Budget Buddy" className="header-logo" />
                <h1>Budget Buddy</h1>
            </div>

            <div className="menu-toggle" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <nav className={menuOpen ? 'open' : ''}>
                <ul>
                    <li><a href="#dashboard" onClick={toggleMenu}>Dashboard</a></li>
                    <li><a href="#users" onClick={toggleMenu}>Users</a></li>
                    <li><a href="#categories" onClick={toggleMenu}>History</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
