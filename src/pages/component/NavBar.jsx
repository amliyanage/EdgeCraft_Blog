import PropTypes from "prop-types";
import '../../assets/css/component/NavBar.css'
import {SearchIcon} from "../../util/Icons.jsx";

const NavBar = ({ handelSecthion }) =>{

    NavBar.propTypes = {
        handelSecthion: PropTypes.func.isRequired
    }

    const handelCLick = (section) => {
        handelSecthion(section);
    }

    return (
        <nav id={"navBar"} className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center gap-3" href="#" onClick={ () => { handelCLick("Home") } }>
                    <div>
                        E
                    </div>
                    EdgeCraft
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-lg-5" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-4">
                        <li className="nav-item" onClick={ () => { handelCLick("UI Design") } }>
                            <a className="nav-link active" aria-current="page" href="#">UI Design</a>
                        </li>
                        <li className="nav-item" onClick={ () => { handelCLick("Front-End") } }>
                            <a className="nav-link" href="#">Front-End</a>
                        </li>
                        <li className="nav-item" onClick={ () => { handelCLick("Back-End") } }>
                            <a className="nav-link" href="#">Back-End</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </a>
                            <ul className="dropdown-menu">
                                <li onClick={ () => { handelCLick("Java-Project") } } ><a className="dropdown-item" href="#">Java</a></li>
                                <li onClick={ () => { handelCLick("Html-Project") } } ><a className="dropdown-item" href="#">Html</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li onClick={ () => { handelCLick("Js-Project") } }><a className="dropdown-item" href="#">Js</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <div className={"searchBar d-flex align-items-center gap-2"}>
                            <SearchIcon/>
                            <input type="text" className={"bg-transparent border-0"} placeholder={"Search ..."}/>
                        </div>
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default NavBar;