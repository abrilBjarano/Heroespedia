import { Link, useLocation } from 'react-router-dom';


export const Navbar = ({ routes }) => {

    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <a className="navbar-brand"> Asociaciones </a>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    {
                        routes.map( route => (
                            <Link 
                                className={`nav-link ${ location.pathname === route.path ? 'active' : '' }`} 
                                key={ route.path }
                                to={ route.path }
                                >
                                { route.name }
                            </Link>
                    ))}
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <Link 
                        className="nav-item nav-link" 
                        to="/login"
                    >
                        Logout
                    </Link>
                </ul>
            </div>
        </nav>
    )
}