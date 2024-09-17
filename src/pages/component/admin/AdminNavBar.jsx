import '../../../assets/css/component/admin/AdminNavBar.css'
import profilePic from '../../../assets/image/OwnerImg.png'

const AdminNavBar = ({userData , userPic}) => {
    return (
        <div id={"AdminNavBar"}>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center gap-3" href="#">
                        <div>
                            E
                        </div>
                        EdgeCraft
                    </a>
                     <img src={userPic} data-bs-toggle="offcanvas"
                             data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                             aria-label="Toggle navigation" alt=""/>
                    <div className="offcanvas offcanvas-end p-3" tabIndex="-1" id="offcanvasNavbar"
                         aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header bg-transparent">
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body d-flex flex-column align-items-center">
                            <img src={userPic} alt=""/>
                            <h1 className={"mt-3"}>@{userData.userName}</h1>
                            <h2>{userData.role}</h2>
                            <div className="info">
                                <form className="form-floating mt-3">
                                    <input type="email" className="form-control" id="validationServer01"
                                           required defaultValue={userData.email}/>
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                    <label htmlFor="floatingInputValue">Email</label>
                                </form>
                                <form className="form-floating mt-3">
                                    <input type="password" className="form-control is-valid" id="validationServer02"
                                           required defaultValue={userData.password}/>
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                    <label htmlFor="floatingInputValue">Password</label>
                                </form>
                                <button className={"btn btn-success w-100 mt-4"}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default AdminNavBar;