import { Link } from 'react-router-dom';
import Scanner from '../Scanner';
import logo from "../../assets/logo.png";
export default function Header(){
    return(
            <header className="horizontal">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo do parque"></img>
                </Link>
                <nav className="horizontal">
                    <div className="navBtn" id="scanner" onClick={Scanner}></div>
                    <div className="navBtn" id="menu"></div>
                </nav>
            </header>
    )
}