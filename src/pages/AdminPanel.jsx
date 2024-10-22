import { useEffect, useState } from "react";
import { getUserData, getUserPic } from "../service/adminService.js";
import ProjectCard from "./component/ProjectCard.jsx";
import { SearchIcon } from "../util/Icons.jsx";
import AdminNavBar from "./component/admin/AdminNavBar.jsx";
import UpdateProjectPopup from "./component/admin/UpdateProjectPopup.jsx";
import LoginPage from "./component/admin/LoginPage.jsx";
import '../assets/css/admin/AdminPanel.css';
import { getUserProjects } from "../service/ProjectService.js";

const AdminPanel = () => {
    const [projectPopup, setProjectPopup] = useState(false);
    const [loginPopup, setLoginPopup] = useState(true);
    const [userEmail, setUserEmail] = useState("");
    const [userData, setUserData] = useState({});
    const [userPic, setUserPic] = useState(null);
    const [projects, setProjects] = useState([]);
    const [projectData, setProjectData] = useState({});
    const [projectType, setProjectType] = useState("");
    const [projectImg, setProjectImg] = useState(null);
    const [searchSuggestion, setSearchSuggestion] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]); // For filtered projects
    const [search, setSearch] = useState(false);

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
            loadProjects();
        }
    }, [loginPopup, userEmail]);

    const handelProjectPopup = (projectData, projectType, projectImg) => {
        setProjectData(projectData);
        setProjectType(projectType);
        setProjectImg(projectImg);
        setProjectPopup(!projectPopup);
        loadProjects().then(r => {
            console.log(r);
        });
    }

    const loadProjects = async () => {
        const userProjects = await getUserProjects(userEmail);
        setProjects(userProjects.data);
        setSearchSuggestion(userProjects.data.map(project => project.projectTitle));
    };

    const handelSearch = (e) => {
        setSearch(true);
        const searchText = e.target.value.toLowerCase();
        const filteredSuggestions = projects.filter(project =>
            project.projectTitle.toLowerCase().includes(searchText)
        );
        setSearchSuggestion(filteredSuggestions.map(proj => proj.projectTitle));

        const filtered = projects.filter(project =>
            project.projectTitle.toLowerCase().includes(searchText)
        );
        setFilteredProjects(filtered);
    };

    const handleSuggestionClick = (suggestion) => {
        const selectedProject = projects.filter(project => project.projectTitle === suggestion);
        setFilteredProjects(selectedProject);
        setSearch(false);
    };

    return (
        <div id={"adminPanel"} className={"d-flex justify-content-center"} onClick={() => { setSearch(false) }}>
            {loginPopup && <LoginPage handelLoginToSystem={handelLoginPopup} />}
            {projectPopup && <UpdateProjectPopup projectData={projectData} handelProjectPouUp={handelProjectPopup} userData={userData} userPic={userPic} projectType={projectType} projectImg={projectImg} />}
            <div className={"w-75 mt-3"}>
                <AdminNavBar userData={userData} userPic={userPic} />
                <div className={"d-flex justify-content-between flex-lg-row flex-column gap-4"}>
                    <div className="search">
                        <div className={"d-flex align-items-center gap-3"}>
                            <SearchIcon />
                            <input type="text" placeholder="Search.." className={"bg-transparent border-0"}
                                   onChange={(e) => handelSearch(e)}
                            />
                        </div>
                        {
                            search && (
                                <div className={"searchHistory"}>
                                    {searchSuggestion.map((suggestion, index) => (
                                        <p key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                            {suggestion}
                                        </p>
                                    ))}
                                </div>
                            )
                        }
                    </div>
                    <button className={"border-0"} onClick={() => handelProjectPopup(null, "Save", null)}>New Project</button>
                </div>
                <div className="project-list mt-5">
                    {
                        filteredProjects.length > 0 ? (
                            filteredProjects.map((project) => (
                                <ProjectCard key={project.projectId} projectData={project} handelView={handelProjectPopup} />
                            ))
                        ) : (
                            projects.map((project) => (
                                <ProjectCard key={project.projectId} projectData={project} handelView={handelProjectPopup} />
                            ))
                        )
                    }
                </div>
                <div className="footer mt-5 d-flex justify-content-center mb-5">
                    <h2>Copyright (c) 2024 - Design By Ashen</h2>
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;
