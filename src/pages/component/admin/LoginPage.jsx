import '../../../assets/css/component/admin/LoginPage.css'
import {useState} from "react";

const LoginPage = () => {

    const [loginOrRegister, setLoginOrRegister] = useState("login");

    const handelLoginOrRegister = (type, e) => {
        e.preventDefault();
        setLoginOrRegister(type);
    }

    return (
        <div id="LoginPage">
            {
                loginOrRegister === "login" ? (
                    <div className={"h-auto d-flex flex-column align-items-center gap-3"}>
                        <h1>Login</h1>
                        <div className="form-floating mb-3 w-100">
                            <input type="email" className="form-control" id="floatingInput"
                                   placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating w-100">
                            <input type="password" className="form-control" id="floatingPassword"
                                   placeholder="Password"/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button type="button" className="btn btn-success w-100 py-3 mt-3">Login</button>
                        <a href="" onClick={(e) => { handelLoginOrRegister("register", e) }}>Register</a>
                    </div>
                ) : (
                    <div className={"m-0 d-flex flex-column align-items-center gap-3"}>
                        <h1>Register</h1>
                        <div className="form-floating mb-3 w-100">
                            <input type="text" className="form-control" id="usernameInput"
                                   placeholder="Enter Your Username"/>
                            <label htmlFor="usernameInput">Enter Your Username</label>
                        </div>
                        <div className="form-floating mb-3 w-100">
                            <input type="email" className="form-control" id="emailInput"
                                   placeholder="name@example.com"/>
                            <label htmlFor="emailInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3 w-100">
                            <input type="text" className="form-control" id="roleInput"
                                   placeholder="Enter Role"/>
                            <label htmlFor="roleInput">Role</label>
                        </div>
                        <div className="form-floating w-100">
                            <input type="password" className="form-control" id="passwordInput"
                                   placeholder="Password"/>
                            <label htmlFor="passwordInput">Password</label>
                        </div>
                        <div className="input-group mb-3 mt-3">
                            <input type="file" className="form-control" id="inputGroupFile02"
                                   placeholder={"Input Profile Pic"}/>
                            <label className="input-group-text" htmlFor="inputGroupFile02">Upload Profile</label>
                        </div>
                        <button type="button" className="btn btn-success w-100 py-3">Register</button>
                        <a href="" onClick={(e) => { handelLoginOrRegister("login", e) }}>Login</a>
                    </div>
                )
            }
        </div>
    );
}

export default LoginPage;
