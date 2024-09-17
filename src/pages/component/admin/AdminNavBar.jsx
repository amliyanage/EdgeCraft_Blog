import '../../../assets/css/component/admin/AdminNavBar.css'
import { useState, useEffect } from 'react';
import { updateUserData } from "../../../service/adminService.js";

const AdminNavBar = ({ userData, userPic }) => {
    const [email, setEmail] = useState(userData.email);
    const [password, setPassword] = useState(userData.password);

    const handleUpdateUserData = async () => {
        const params = {
            email: email,
            password: password,
            userName: userData.userName
        };
        try {
            const response = await updateUserData(params);
            if (response.status === 200) {
                alert('User data updated successfully!');
            } else {
                alert('Failed to update user data.');
            }
        } catch (error) {
            console.error('Error updating user data:', error);
            alert('Failed to update user data.');
        }
    };


    // Sync form fields with props if they change
    useEffect(() => {
        setEmail(userData.email);
        setPassword(userData.password);
    }, [userData]);

    return (
        <div id="AdminNavBar">
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center gap-3" href="#">
                        <div>E</div>
                        EdgeCraft
                    </a>
                    <img
                        src={userPic}
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation"
                        alt="Profile"
                    />
                    <div
                        className="offcanvas offcanvas-end p-3"
                        tabIndex="-1"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header bg-transparent">
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body d-flex flex-column align-items-center">
                            <img src={userPic} alt="Profile" />
                            <h1 className="mt-3">@{userData.userName}</h1>
                            <h2>{userData.role}</h2>
                            <div className="info">
                                <form className="form-floating mt-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="validationServer01"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <label htmlFor="validationServer01">Email</label>
                                </form>
                                <form className="form-floating mt-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="validationServer02"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <label htmlFor="validationServer02">Password</label>
                                </form>
                                <button
                                    className="btn btn-success w-100 mt-4"
                                    onClick={handleUpdateUserData}
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default AdminNavBar;
