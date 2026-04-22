import { Link } from "react-router-dom";

export default function SimpleButton({teste, children}: {teste?: string, children?: any}) {
    
    return(
        <>
        <button className="btn">
            <Link to={teste || ''}>{children || ""}</Link>
        </button>
        </>
    )
}
