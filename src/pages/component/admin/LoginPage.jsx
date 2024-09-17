import '../../../assets/css/component/admin/LoginPage.css';
import { useState } from "react";
import {adminLogin, adminRegister} from "../../../service/adminService.js";

const LoginPage = ({handelLoginToSystem}) => {
    const [loginOrRegister, setLoginOrRegister] = useState("login");

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState(null);

    const handelLoginOrRegister = (type, e) => {
        e.preventDefault();
        setLoginOrRegister(type);
    };

    const handelRegister = async () => {
        const formData = new FormData();

        formData.append("userName", username);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("role", role);
        formData.append("file", profilePic);

        try {
            if (await adminRegister(formData)){
                setLoginOrRegister("login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handelLogin = () => {

        const params = {
            email: email,
            password: password
        };

        adminLogin(params).then(r => {
            if (r) {
                 handelLoginToSystem();
            }
        });
    }

    return (
        <div id="LoginPage">
            {
                loginOrRegister === "login" ? (
                    <div className={"h-auto d-flex flex-column align-items-center gap-3"}>
                        <h1>Login</h1>
                        <div className="form-floating mb-3 w-100">
                            <input type="email" className="form-control" id="floatingInput"
                                   placeholder="name@example.com" onChange={(e) => { setEmail(e.target.value) }} />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating w-100">
                            <input type="password" className="form-control" id="floatingPassword"
                                   placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button type="button" className="btn btn-success w-100 py-3 mt-3" onClick={ handelLogin }>Login</button>
                        <a href="" onClick={(e) => { handelLoginOrRegister("register", e) }}>Register</a>
                    </div>
                ) : (
                    <div className={"m-0 d-flex flex-column align-items-center gap-3"}>
                        <h1>Register</h1>
                        <div className="form-floating mb-3 w-100">
                            <input type="text" className="form-control" id="usernameInput"
                                   placeholder="Enter Your Username" onChange={(e) => { setUsername(e.target.value) }} />
                            <label htmlFor="usernameInput">Enter Your Username</label>
                        </div>
                        <div className="form-floating mb-3 w-100">
                            <input type="email" className="form-control" id="emailInput"
                                   placeholder="name@example.com" onChange={(e) => { setEmail(e.target.value) }} />
                            <label htmlFor="emailInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3 w-100">
                            <input type="text" className="form-control" id="roleInput"
                                   placeholder="Enter Role" onChange={(e) => { setRole(e.target.value) }} />
                            <label htmlFor="roleInput">Role</label>
                        </div>
                        <div className="form-floating w-100">
                            <input type="password" className="form-control" id="passwordInput"
                                   placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                            <label htmlFor="passwordInput">Password</label>
                        </div>
                        <div className="input-group mb-3 mt-3">
                            <input type="file" className="form-control" id="inputGroupFile02"
                                   placeholder="Input Profile Pic" onChange={(e) => { setProfilePic(e.target.files[0]) }} />
                            <label className="input-group-text" htmlFor="inputGroupFile02">Upload Profile</label>
                        </div>
                        <button type="button" className="btn btn-success w-100 py-3" onClick={handelRegister}>Register</button>
                        <a href="" onClick={(e) => { handelLoginOrRegister("login", e) }}>Login</a>
                    </div>
                )
            }
        </div>
    );
};

export default LoginPage;
