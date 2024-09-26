import PropTypes from 'prop-types';
import '../../../assets/css/component/admin/AdminNavBar.css'
import { useState, useEffect } from 'react';
import { updateUserData } from "../../../service/adminService.js";

const AdminNavBar = ({ userData, userPic }) => {

    AdminNavBar.propTypes = {
        userData: PropTypes.object.isRequired,
        userPic: PropTypes.object.isRequired
    }

    const [email, setEmail] = useState(userData.email);
    const [password, setPassword] = useState(userData.password);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    const handleUpdateUserData = async () => {
        if (!email || !password) {
            return;
        }

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        if (!passwordRegex.test(password)) {
            alert('Password must contain at least 8 characters, including uppercase, lowercase letters, and numbers');
            return;
        }

        const params = {
            email: email,
            password: password,
            username: userData.userName
        };

        try {
            console.log('Updating user data...', params);
            const response = await updateUserData(params);
            if (response && response.status === 201) {
                alert('User data updated successfully!');
            }
        } catch (error) {
            console.error('Error updating user data:', error);
            alert('Failed to update user data.');
        }
    };

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
