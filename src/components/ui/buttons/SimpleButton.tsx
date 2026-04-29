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
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        if(onClick) onClick(event);
        if(path? true : false) window.scrollTo(0, 0);// scroll to top of the page when the button is clicked and has a path to navigate to
    };

    return(
            <Link to={path || ''} onClick={handleClick}>
                <div className={className}> 
                    {type == "back" ? imagemSrc && <img src={imagemSrc} alt={icon} className="back"/> : children}
                    {type == "back" ?  children : imagemSrc && <img src={imagemSrc} alt={icon} />}
                    {}
                </div> 
            </Link>
    ) 
}
