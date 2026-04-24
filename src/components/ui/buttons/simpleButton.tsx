import { Link } from "react-router-dom";
import seta1 from '../../../assets/icons/seta1.png';
import seta12 from '../../../assets/icons/seta12.png';

export default function SimpleButton({path, children, tema, icon}: {path?: string, children?: any, tema?: string, icon?: string}) {
    if(!tema) tema = 'default';
    if(!icon) icon = 'seta';
    const icons = {
        "default": {
            "seta" : seta1
        },
        "dark": {
            "seta" : seta12
        }
        
    } as any;
    tema = (tema && icons[tema]) ? tema : 'default';
    const imagemSrc = icons[tema]?.[icon] || null;
    return(
            <Link to={path || ''} >
                <div className={tema == 'dark'? 'btnDark' : ''}>
                    {children || ""} 
                    {imagemSrc && <img src={imagemSrc} alt={icon} />}
                </div> 
            </Link>
    )
    
}
