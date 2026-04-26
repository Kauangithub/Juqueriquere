import { Link } from "react-router-dom";
import { icons } from "../icons";
interface props {
    path?: string;
    children?: React.ReactNode;
    tema?: string;
    icon?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    type?: string;
}

export default function SimpleButton({path, children, tema, icon, type, onClick}: props) {
    if(!icon) icon = 'seta';
    tema = (tema && icons[tema]) ? tema : 'default';
    const imagemSrc = icons[tema]?.[icon] || null;
    const className = tema == 'default'? 'btn' : `btn btn${tema.charAt(0).toUpperCase() + tema.slice(1)}`; // ensuring that the theme will always match the class, and if doesnt exist an specific style, it'll use the default one
    return(
            <Link to={path || ''} onClick={onClick}>
                <div className={className}> 
                    {type == "back" ? imagemSrc && <img src={imagemSrc} alt={icon} className="back"/> : children}
                    {type == "back" ?  children : imagemSrc && <img src={imagemSrc} alt={icon} />}
                    {}
                </div> 
            </Link>
    ) 
}
