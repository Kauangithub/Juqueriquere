import { Link } from 'react-router-dom';
import Scanner from '../Scanner';
import logo from "../../assets/logo.png";
import { useState } from "react";

export default function Header() {
    const [openScanner, setOpenScanner] = useState(false);

    return (
        <>
            <header className="horizontal">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo do parque"></img>
                </Link>
                <nav className="horizontal">
                    <div className="navBtn" id="scanner" onClick={() => setOpenScanner(true)}></div>
                    <div className="navBtn" id="menu"></div>
                </nav>
            </header>

            {openScanner && (
                <Scanner onClose={() => setOpenScanner(false)} />
            )}
        </>
    );
};