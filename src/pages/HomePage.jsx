import '../../src/assets/css/HomePage.css'
import NavBar from "./component/NavBar.jsx";
import lastUploadedProjectImgTemp from '../assets/image/thumbnail.png'
import ownerProfileImgTemp from '../assets/image/OwnerImg.png'
import ProjectCard from "./component/ProjectCard.jsx";
import {useState} from "react";
import ViewProject from "./component/ViewProject.jsx";

const HomePage = () => {

    const [currentSection, setCurrentSection] = useState("Home");
    const [currentProject, setCurrentProject] = useState(null);

    const handleSectionChange = (section) => {
        setCurrentSection(section);
        setCurrentProject(null);
    }

    const handelViewProject = (project) => {
        setCurrentProject(project);
    }

    return (
        <>
            <div id="HomePage" className={"w-100 d-flex justify-content-center pt-3"}>

                <div className="w-75">

                    <NavBar handelSecthion={handleSectionChange} />

                    {
                        currentProject === null ? (
                            <div className={"wall pt-5"}>

                                {
                                    currentSection === "Home" ? (
                                        <div className="lastUploadProject d-flex h-100 gap-4 flex-column flex-lg-row">
                                            <div className={"thumbnail"}>
                                                <img src={lastUploadedProjectImgTemp} alt="Last Uploaded Project Image"
                                                     className={"w-auto h-auto"}/>
                                            </div>
                                            <div className="projectInfo mt-4">
                                                <div className="infoHead d-flex align-items-center gap-2">
                                                    <h4>UI DESIGN</h4>
                                                    <div className="uploadedDate d-flex align-items-center gap-2">
                                                        <div></div>
                                                        <h4>July 2, 2021</h4>
                                                    </div>
                                                </div>
                                                <h1 className={"mt-3"}>Understanding color theory: the color wheel and
                                                    finding
                                                    complementary colors</h1>
                                                <p className={"mt-4"}>Nulla Lorem mollit cupidatat irure. Laborum magna
                                                    nulla
                                                    duis
                                                    ullamco cillum dolor. Voluptate exercitation incididunt aliquip
                                                    deserunt
                                                    reprehenderit elit laborum. </p>
                                                <div className="ownerInfo d-flex gap-2 mt-5">
                                                    <img src={ownerProfileImgTemp} alt="Owner Profile Img"/>
                                                    <div>
                                                        <h2>Leslie Alexander</h2>
                                                        <h3>UI Designer</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : ""
                                }

                                <div className="projectCardSet">
                                    <ProjectCard handelView={ handelViewProject }/>
                                    <ProjectCard/>
                                    <ProjectCard/>
                                </div>

                            </div>
                        ) : (<ViewProject />)
                    }

                    <div className={"d-flex justify-content-center mt-5 footer mb-5"}>
                        Copyright (c) 2021 - Design By Nauval
                    </div>

                </div>

            </div>
        </>
    );
}

export default HomePage;