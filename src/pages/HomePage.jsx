import '../../src/assets/css/HomePage.css'
import NavBar from "./component/NavBar.jsx";
import ownerProfileImgTemp from '../assets/image/OwnerImg.png'
import ProjectCard from "./component/ProjectCard.jsx";
import {useEffect, useState} from "react";
import ViewProject from "./component/ViewProject.jsx";
import {
    getAllProject, getBackEndProjects, getFrontEndProjects,
    getLastProject,
    getLastProjectImg,
    getUiProjects
} from "../service/ProjectService.js";

const HomePage = () => {

    const [currentSection, setCurrentSection] = useState("Home");
    const [currentProject, setCurrentProject] = useState(null);
    const [projects, setProjects] = useState([]);
    const [targetProject, setTargetProject] = useState({});


    const [lastProjectData , setLastProjectData] = useState({});
    const [lastProjectUserData , setLastProjectUserData] = useState({});
    
    const [projectImg, setProjectImg] = useState(null);

    const [searchSuggestion, setSearchSuggestion] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]); // For filtered projects
    const [search, setSearch] = useState(false);

    useEffect(() => {
        loadProjects();
        LoadLastProject();
        getProjectPic();
        console.log(lastProjectData,"lasasnascanscancacn");
    }, []);

    const loadProjects = async () => {
        getAllProject().then(response => {
            setProjects(response.data);
        });
    }

    const loadUiDesignProjects = async () => {
        getUiProjects().then(response => {
            console.log("UI Projects",response.data);
            setProjects(response.data);
        });
    }

    const loadFrontEndProjects = async () => {
        getFrontEndProjects().then(response => {
            console.log("Front End Projects",response.data);
            setProjects(response.data);
        })
    }

    const loadBackEndProjects = async () => {
        getBackEndProjects().then(response => {
            console.log("Back End Projects",response.data);
            setProjects(response.data);
        })
    }

    const handleSectionChange = (section) => {
        setCurrentSection(section);
        switch (section) {
            case "Home":
                window.location.reload();
                break;
            case "UI Design":
                loadUiDesignProjects().then(r => console.log(r));
                break;
            case "Front-End":
                loadFrontEndProjects().then(r => console.log(r));
                break;
            case "Back-End":
                loadBackEndProjects().then(r => console.log(r));
                break;

            default:
                loadProjects().then(r => console.log(r));
        }

        setCurrentProject(null);
    }

    const handelViewProject = (project) => {
        setCurrentProject(project);
    }

    const setTargetProjectData = (project) => {
        setTargetProject(project);
    }

    const getProjectPic = async () => {
        getLastProjectImg().then(response => {
            setProjectImg(response);
        })
    }

    const LoadLastProject = async () =>{
        const response = await getLastProject();
        setLastProjectData(response)
        setLastProjectUserData(response.user)
    }

    const handelSearch = (e) => {
        if (e.target.value === "") {
            setCurrentSection("Home");
        }else {
            setCurrentSection("Search");
        }
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
        <>
            <div id="HomePage" className={"w-100 d-flex justify-content-center pt-3"} onClick={() => setSearch(false)}>

                <div className="w-75">

                    <NavBar handelSection={handleSectionChange} handelSearch={ handelSearch } search={search}  handleSuggestionClick={handleSuggestionClick} searchSuggestion={searchSuggestion} />

                    {
                        currentProject === null ? (
                            <div className={"wall pt-5"}>

                                {
                                    currentSection === "Home" ? (
                                        <div className="lastUploadProject d-grid h-100 gap-4 flex-column flex-lg-row">
                                            <div className={"thumbnail"}>
                                                <img src={projectImg} alt="Last Uploaded Project Image"/>
                                            </div>
                                            <div className="projectInfo mt-4">
                                                <div className="infoHead d-flex align-items-center gap-2">
                                                    <h4> {lastProjectData.projectType} </h4>
                                                    <div className="uploadedDate d-flex align-items-center gap-2">
                                                        <div></div>
                                                        <h4> {lastProjectData.date} </h4>
                                                    </div>
                                                </div>
                                                <h1 className={"mt-3"}>{lastProjectData.projectTitle}</h1>
                                                <p className={"mt-4"}> {lastProjectData.description} </p>
                                                <div className="ownerInfo d-flex gap-2 mt-5">
                                                    <img src={ownerProfileImgTemp} alt="Owner Profile Img"/>
                                                    <div>
                                                        {/*<h2> {lastProjectData.user.userName} </h2>*/}
                                                        <h2> {lastProjectUserData.userName} </h2>
                                                        <h3>{lastProjectUserData.role}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : ""
                                }

                                <div className="projectCardSet">
                                    {
                                        filteredProjects.length > 0 ? (
                                            filteredProjects.map((project) => (
                                                <ProjectCard key={project.projectId} projectData={project}
                                                             handelView={handelViewProject}
                                                             setTargetProject={setTargetProjectData}
                                                />
                                            ))
                                        ) : (
                                            projects.map((project) => (
                                                <ProjectCard key={project.projectId} projectData={project}
                                                             handelView={handelViewProject}
                                                             setTargetProject={setTargetProjectData}
                                                />
                                            ))
                                        )
                                    }
                                </div>

                            </div>
                        ) : (<ViewProject projectData={targetProject} />)
                    }

                    <div className={"d-flex justify-content-center mt-5 footer mb-5"}>
                        Copyright (c) 2021 - Design By Ashen
                    </div>

                </div>

            </div>
        </>
    );
}

export default HomePage;