import PropTypes from "prop-types";
import '../../assets/css/component/ProjectCard.css'
import {getUserPic} from "../../service/adminService.js";
import {useEffect, useState} from "react";
import {getProjectImg} from "../../service/ProjectService.js";

const ProjectCard = ({ handelView , projectData , setTargetProject }) =>{



    ProjectCard.propTypes = {
        handelView: PropTypes.func.isRequired,
        projectData: PropTypes.object.isRequired,
        setTargetProject: PropTypes.func.isRequired
    }

    const [userPic, setUserPic] = useState(null);
    const [projectImg, setProjectImg] = useState(null);

    useEffect(() => {
        getUserPic(projectData.user.userName).then(url => {
            setUserPic(url);
        });
        getProjectImg(projectData.projectTitle).then(url => {
            setProjectImg(url);
        });
    }, []);

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    }

    const cardOnClick = () => {
        handelView(projectData,"Update",projectImg);
        setTargetProject(projectData);
    }

    console.log(projectData)

    return(
        <div id={"ProjectCard"} onClick={cardOnClick}>
            <div className={"Thumbnail"}>
                <img src={ projectImg } alt="Project Thumbnail"/>
            </div>
            <div className="projectInfo mt-3">
                <div className="infoHead d-flex">
                    <div className={"w-auto"}>
                        <h4>{projectData.projectType}</h4>
                    </div>
                    <div className="uploadedDate d-flex align-items-center gap-3 ms-2">
                        <div></div>
                        <h4>{projectData.date}</h4>
                    </div>
                </div>
                <h1 className={"mt-2 w-100"}>{truncateText(projectData.projectTitle,60)}</h1>
                <p className={"w-100"}>{
                    truncateText(projectData.summery, 140)
                }</p>
                <div className="ownerInfo d-flex gap-3 mt-4 align-items-center">
                    <img src={userPic} alt="Owner Profile Img"/>
                    <div>
                        <h2>{projectData.user.userName}</h2>
                        <h3>{projectData.user.role}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard