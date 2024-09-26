import { useEffect, useState } from "react";
import { getUserData, getUserPic } from "../service/adminService.js";
import ProjectCard from "./component/ProjectCard.jsx";
import {SearchIcon} from "../util/Icons.jsx";
import AdminNavBar from "./component/admin/AdminNavBar.jsx";
import UpdateProjectPopup from "./component/admin/UpdateProjectPopup.jsx";
import LoginPage from "./component/admin/LoginPage.jsx";
import '../assets/css/admin/AdminPanel.css';

const AdminPanel = () => {
    const [projectPopup, setProjectPopup] = useState(false);
    const [loginPopup, setLoginPopup] = useState(true);
    const [userEmail, setUserEmail] = useState("");
    const [userData, setUserData] = useState({});
    const [userPic, setUserPic] = useState(null);

    const handelLoginPopup = (email) => {
        setLoginPopup(!loginPopup);
        setUserEmail(email);
    }

    useEffect(() => {
        if (userEmail) {
            getUserData(userEmail).then(r => {
                setUserData(r.data);
                getUserPic(r.data.userName).then(url => {
                    setUserPic(url);
                });
            });
        }
    }, [loginPopup, userEmail]);

    const handelProjectPopup = () => {
        setProjectPopup(!projectPopup);
    }

    return (
        <div id={"adminPanel"} className={"d-flex justify-content-center"}>
            {loginPopup && <LoginPage handelLoginToSystem={handelLoginPopup} />}
            {projectPopup && <UpdateProjectPopup handelProjectPouUp={handelProjectPopup} userData={userData} userPic={userPic} />}
            <div className={"w-75 mt-3"}>
                <AdminNavBar userData={userData} userPic={userPic} />
                <div className={"d-flex justify-content-between flex-lg-row flex-column gap-4"}>
                    <div className="search d-flex align-items-center gap-3">
                        <SearchIcon />
                        <input type="text" placeholder="Search.." className={"bg-transparent border-0"} />
                    </div>
                    <button className={"border-0"} onClick={handelProjectPopup}>New Project</button>
                </div>
                <div className="project-list mt-5">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
                <div className="footer mt-5 d-flex justify-content-center mb-5">
                    <h2>Copyright (c) 2024 - Design By Ashen</h2>
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;
