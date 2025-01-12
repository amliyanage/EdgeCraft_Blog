import PropTypes from "prop-types";
import '../../../assets/css/component/admin/UpdateProjectPopup.css';
import {useEffect, useState} from "react";
import {saveProject, updateProject} from "../../../service/ProjectService.js";
import DeletePopup from "./DeletePopup.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProjectPopup = ({projectData,handelProjectPouUp,userData,userPic,projectType,projectImg}) => {

    const [saveBtn, setSaveBtn] = useState(true);
    const [otherBtn, setOtherBtn] = useState(true);

    UpdateProjectPopup.propTypes = {
        projectData: PropTypes.object.isRequired,
        handelProjectPouUp: PropTypes.func.isRequired,
        userData: PropTypes.object.isRequired,
        userPic: PropTypes.string.isRequired,
        projectType: PropTypes.string.isRequired,
        projectImg: PropTypes.object.isRequired
    }

    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");
    const [summery , setSummery] = useState("");
    const [githubLink , setGithubLink] = useState("");
    const [file , setFile] = useState(null);
    const [option , setOption] = useState("");
    const [sendImg , setSendImg] = useState(null);
    const [date , setDate] = useState("");
    const [deletePopup , setDeletePopup] = useState(false);

    useEffect(() => {
        setDate(handleCurrentTimeAndDate());
    }, []);

    useEffect(() => {
        if (projectType === "Update") {
            setTitle(projectData.projectTitle);
            setDescription(projectData.description);
            setSummery(projectData.summery);
            setGithubLink(projectData.gitHubLink);
            setFile(projectImg);
            setOption(projectData.projectType);
            setSaveBtn(false);
            setDate(projectData.date);
        }
        else {
            setOtherBtn(false);
        }
    }, [projectType, projectData, projectImg]);

    const handleCurrentTimeAndDate = () => {
        const now = new Date();
        const day = now.getDate();
        const month = now.toLocaleString('default', { month: 'long' });
        const year = now.getFullYear();

        return `${month} ${day}, ${year}`;
    };

    const handelThumbnail = (e) => {
        const file = e.target.files[0];
        setSendImg(file);
        if (file){
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2){
                    setFile(reader.result);
                }
            }
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const truncateText = (text, maxLength) => {
        return text.length >= maxLength;
    }

    const saveBtnOnAction = async () => {

        if (!truncateText(title, 10)){
            toast.warning("Title should be more than 10 characters");
            return;
        }

        if (!truncateText(summery, 136)){
            toast.warning("Summery should be more than 136 characters");
            return;
        }

        if (title === "" || description === "" || summery === "" || githubLink === "" || file === null || option === "Choose..."){
            toast.warning("Please fill all the fields");
            return;
        }

        const formData = new FormData();
        formData.append('projectDes', description);
        formData.append('projectTitle', title);
        formData.append('projectType', option);
        formData.append("projectDate", date);
        formData.append("projectOwnerEmail", userData.email);
        formData.append("projectSummery", summery);
        formData.append("projectGitUrl", githubLink);
        formData.append("projectThumbnail", sendImg);

        console.log(userData.email)
        console.log(formData);

        let response = await saveProject(formData)

        if (response.status === true) {
            toast.success("Project saved successfully");
        } else {
            toast.error("Failed to save project");
        }


    }

    const updateBtnOnAction = async () => {
        const formData = new FormData();

        formData.append('projectId', projectData.projectId);
        formData.append('projectDes', description);
        formData.append('projectTitle', title);
        formData.append('projectType', option);
        formData.append("projectDate", date);
        formData.append("projectSummery", summery);
        formData.append("projectGitUrl", githubLink);

        if (sendImg) {
            formData.append("projectThumbnail", sendImg);
        } else {
            fetch(projectImg)
                .then(res => res.blob())
                .then(async blob => {
                    const file = new File([blob], "project-thumbnail.jpg", {type: "image/jpeg"});
                    formData.append("projectThumbnail", file);

                    const response = await updateProject(formData);

                    if (response.status === true) {
                        toast.success("Project updated successfully");
                    } else {
                        toast.error(response.data);
                    }
                })
                .catch(err => console.error("Error converting blob to file:", err));
        }

        if (sendImg) {
            const response = await updateProject(formData);

            if (response.status === true) {
                toast.success("Project updated successfully");
            } else {
                toast.error(response.data);
            }
        }
    };

    const handelDeletePopup = () => {
        setDeletePopup(!deletePopup);
    }

    return (
        <>
            <ToastContainer />
            <div id="UpdateProjectPopup" className="d-flex justify-content-center align-items-center">

                {deletePopup && <DeletePopup close={handelDeletePopup} projectId={projectData.projectId} />}

                <div className="p-4">
                    <div className="btn-close btn-close-white float-end" onClick={handelProjectPouUp}></div>
                    <div className="editSection">
                        <div>
                            <div className="form-floating mb-4">
                                <input type="text" className="form-control" placeholder="Title" onChange={(e) => {
                                    setTitle(e.target.value)
                                }}
                                defaultValue={title}
                                />
                                <label htmlFor="floatingInput">Title</label>
                            </div>
                            <div className="form-floating mb-4">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                          style={{height: '300px'}} onChange={(e) => {
                                    setDescription(e.target.value)
                                }}
                                defaultValue={description}
                                ></textarea>
                                <label htmlFor="floatingTextarea2">Description</label>
                            </div>
                            <div className="form-floating mb-4">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                          style={{height: '200px'}} onChange={(e) => {
                                    setSummery(e.target.value)
                                }}
                                defaultValue={summery}
                                ></textarea>
                                <label htmlFor="floatingTextarea2">Summery</label>
                            </div>
                            <div className={"d-flex align-items-center mb-4 gap-4"}>
                                <div className="input-group ">
                                    <input type="file" className="form-control" onChange={(e) => {
                                        handelThumbnail(e)
                                    }}
                                    defaultValue={file}
                                    />
                                    <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                                </div>
                                <div className="input-group">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                                    <select className="form-select" id="inputGroupSelect01" onChange={(e) => {
                                        setOption(e.target.value)
                                    }}
                                    defaultValue={option}
                                    onSelect={option}>
                                        <option selected>Choose...</option>
                                        <option value="UI Design">UI Design</option>
                                        <option value="Front End">Front End</option>
                                        <option value="Back End">Back End</option>
                                        <option value="Server">Server</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-floating mb-4">
                                <input type="text" className="form-control" placeholder="GitHub Link" onChange={(e) => {
                                    setGithubLink(e.target.value)
                                }} defaultValue={githubLink}
                                />
                                <label htmlFor="floatingInput">GitHub Link</label>
                            </div>
                            <div className={"d-flex gap-4"}>
                                {
                                    saveBtn && <button className={"btn btn-success px-5"} onClick={saveBtnOnAction}>Save</button>
                                }
                                {
                                    otherBtn && <button className={"btn btn-warning px-5"} onClick={updateBtnOnAction}>Update</button>
                                }
                                {
                                    otherBtn && <button className={"btn btn-danger px-5"} onClick={handelDeletePopup}>Delete</button>
                                }
                            </div>
                        </div>
                        <div className={"pe-3"}>
                            <div className={"preview w-100 h-100"}>

                                <div id={"viewProject"} className={"d-flex flex-column align-items-center"}>
                                    <div className="infoHead d-flex gap-3 align-items-center mt-5">
                                    <div className={"w-auto"}>
                                            <h4>{option}</h4>
                                        </div>
                                        <div className="uploadedDate d-flex align-items-center gap-3">
                                            <div></div>
                                            <h4>{date}</h4>
                                        </div>
                                    </div>
                                    <h1 className={"mt-4"}>{title}</h1>
                                    <div className="ownerInfo d-flex gap-3 mt-4 align-items-center">
                                        <img src={userPic} alt="Owner Profile Img"/>
                                        <div>
                                            <h2>{userData.userName}</h2>
                                            <h3>{userData.role}</h3>
                                        </div>
                                    </div>
                                    <img className={"mt-5"} src={file} alt="Project Thumbnail"/>
                                    <p className={"mt-5"}>
                                        {summery}
                                    </p>
                                    <p className={"mt-4"}>
                                        {description}
                                    </p>

                                    <a href="">
                                        Git Hub - {githubLink}
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateProjectPopup;
