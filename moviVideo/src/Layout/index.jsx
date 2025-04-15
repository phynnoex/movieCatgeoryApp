import { Outlet,Link } from "react-router-dom";
import "./styles.scss"

export default function Layout() {
    return (
        <>
        
        <div className="layout">
        <h1>movie <br /> Categorizer</h1>
        <nav>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/categories">Categories</Link>
            </li>
        </nav>
        
        </div>
        <Outlet />
        </>
    );
}