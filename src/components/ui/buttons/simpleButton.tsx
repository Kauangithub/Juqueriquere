import { Link } from "react-router-dom";

export default function SimpleButton({ children }: { children?: any }) {
    return(
        <>
        <button className="btn">
            <Link to='/'></Link>
        </button>
        </>
    )
}