import { Link } from "react-router-dom";
import { icons } from "../icons";
interface props {
    path?: string;
    children?: React.ReactNode;
    tema?: string;
    icon?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function SimpleButton({path, children, tema, icon, onClick}: props) {
    if(!icon) icon = 'seta';
    tema = (tema && icons[tema]) ? tema : 'default';
    const imagemSrc = icons[tema]?.[icon] || null;
    const className = tema == 'default'? 'btn' : `btn btn${tema.charAt(0).toUpperCase() + tema.slice(1)}`; // ensuring that the theme will always match the class, and if doesnt exist an specific style, it'll use the default one
    return(
            <Link to={path || ''} onClick={onClick}>
                <div className={className}> 
                    {children || ""} 
                    {imagemSrc && <img src={imagemSrc} alt={icon} />}
                </div> 
            </Link>
    ) 
}
