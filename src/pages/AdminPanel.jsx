import '../assets/css/admin/AdminPanel.css'
import AdminNavBar from "./component/admin/AdminNavBar.jsx";
import {SearchIcon} from "../util/Icons.jsx";
import ProjectCard from "./component/admin/ProjectCard.jsx";
import UpdateProjectPopup from "./component/admin/UpdateProjectPopup.jsx";
import {useState} from "react";

const AdminPanel = () => {

    const [projectPopup, setProjectPopup] = useState(false);

  return (
    <div id={"adminPanel"} className={"d-flex justify-content-center"}>

        {
            projectPopup && <UpdateProjectPopup/>
        }

        <div className={"w-75 mt-3"}>
            <AdminNavBar/>

            <div className={"d-flex justify-content-between flex-lg-row flex-column gap-4"}>
                <div className="search d-flex align-items-center gap-3">
                    <SearchIcon/>
                    <input type="text" placeholder="Search.." className={"bg-transparent border-0"}/>
                </div>
                <button className={"border-0"}>New Project</button>
            </div>

            <div className="project-list mt-5">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>

            <div className="footer mt-5 d-flex justify-content-center mb-5">
                <h2>Copyright (c) 2024 - Design By Ashen</h2>
            </div>
        </div>

    </div>
  );
}

export default AdminPanel;