import PropTypes from "prop-types";
import '../../assets/css/component/ViewProject.css'
import {getProjectImg} from "../../service/ProjectService.js";
import {useEffect, useState} from "react";
import {getUserPic} from "../../service/adminService.js";

const ViewProject = ({ projectData }) => {

    const [ownerProfileImg, setOwnerProfileImg] = useState(null);
    const [projectImg, setProjectImg] = useState(null);

    useEffect(() => {
        getProjectPic().then(r => console.log(r));
        getOwnerProfilePic().then(r => console.log(r));
    }, []);

    ViewProject.propTypes = {
        projectData: PropTypes.object.isRequired
    }

    const getProjectPic = async () => {
        getProjectImg(projectData.projectTitle).then(response => {
            setProjectImg(response);
        })
    }

    const getOwnerProfilePic = async () => {
        getUserPic(projectData.user.userName).then(response => {
            setOwnerProfileImg(response);
        })
    }

    return(
        <div id={"viewProject"} className={"d-flex flex-column align-items-center"}>
            <div className="infoHead d-flex gap-3 align-items-center mt-5">
                <div className={"w-auto"}>
                    <h4>{projectData.projectType}</h4>
                </div>
                <div className="uploadedDate d-flex align-items-center gap-3">
                    <div></div>
                    <h4>{projectData.date}</h4>
                </div>
            </div>
            <h1 className={"mt-4"}>Understanding color theory: the color wheel and finding complementary colors</h1>
            <div className="ownerInfo d-flex gap-3 mt-4 align-items-center">
                <img src={ownerProfileImg} alt="Owner Profile Img"/>
                <div>
                    <h2>{projectData.user.userName}</h2>
                    <h3>{projectData.user.role}</h3>
                </div>
            </div>
            <img className={"mt-5"} src={projectImg} alt="Project Thumbnail"/>
            <p className={"mt-5"}>
                {
                    projectData.summery
                }
            </p>
            <p className={"mt-4"}>
                {
                    projectData.description
                }
            </p>
            <a href={projectData.gitHubLink} target={"_blank"} className={"fs-5"}>view on github</a>
        </div>
    )
}

export default ViewProject;