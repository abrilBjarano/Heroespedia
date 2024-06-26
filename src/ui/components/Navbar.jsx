import { Link, useLocation, useNavigate } from 'react-router-dom';


export const Navbar = ({ routes = [] }) => {

    const location = useLocation();
    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <a className="navbar-brand text-success pe-5"> Asociaciones </a>

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

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        Abril
                    </span>

                    <button
                        className='nav-item nav-link btn'
                        onClick={ onLogout }
                    >
                            Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}