import { Link } from "react-router-dom"
import "./Home.css"

export default function Header(){
    return(
        <div className="up-menu">
            <Link to={"/"}><h1 className="logo">FOOD SELLER</h1></Link>
             <ul className="links">
                <Link to={"/"}><li className="link">Home</li></Link>
                <Link to={"/signup"}><li className="link">Sign Up</li></Link>
                <Link to={"/cart"}><li className="link">Cart</li></Link>
            </ul>
        </div>
    )
}