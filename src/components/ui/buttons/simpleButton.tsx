import { Link } from "react-router-dom";
import seta1 from '../../../assets/icons/seta1.png';
import seta12 from '../../../assets/icons/seta12.png';


export default function SimpleButton({path, children, tema, icon}: {path?: string, children?: any, tema?: string, icon?: string}) {
    
    if (!icon) var logo = seta1;
    else var logo = icon;

    if (!tema) var classNam = "btnDark";
    classNam = "btn";
    return(
            <Link to={path || ''} >
                <div className="btnDark">{children || ""} <img src={logo} alt="" /></div> 
            </Link>
    )//className na Div nn vai de jeito nenhum
}
