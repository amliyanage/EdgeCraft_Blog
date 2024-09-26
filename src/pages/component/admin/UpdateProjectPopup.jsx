import React, {useState} from 'react';
import '../../../assets/css/component/admin/UpdateProjectPopup.css';
import ownerProfileImgTemp from "../../../assets/image/OwnerImg.png";

const UpdateProjectPopup = ({projectData,handelProjectPouUp,userData,userPic}) => {

    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");
    const [summery , setSummery] = useState("");
    const [githubLink , setGithubLink] = useState("");
    const [file , setFile] = useState(null);
    const [option , setOption] = useState("");

    const handleCurrentTimeAndDate = () => {
        const now = new Date();
        const day = now.getDate();
        const month = now.toLocaleString('default', { month: 'long' });
        const year = now.getFullYear();

        // Construct the formatted date with manual spacing
        return `${month} ${day}, ${year}`;
    };

    const handelThumbnail = (e) => {
        const file = e.target.files[0];
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

    const saveProject = () => {
        const project = {
            title: title,
            description: description,
            summery: summery,
            githubLink: githubLink,
            file: file,
            option: option
        }
    }

    return (
        <div id="UpdateProjectPopup" className="d-flex justify-content-center align-items-center">
            <div className="p-4">
                <div className="btn-close btn-close-white float-end" onClick={handelProjectPouUp}></div>
                <div className="editSection">
                    <div>
                        <div className="form-floating mb-4">
                            <input type="text" className="form-control" placeholder="Title" onChange={(e) => {
                                setTitle(e.target.value)
                            }}/>
                            <label htmlFor="floatingInput">Title</label>
                        </div>
                        <div className="form-floating mb-4">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                      style={{height: '300px'}} onChange={(e) => {
                                setDescription(e.target.value)
                            }}></textarea>
                            <label htmlFor="floatingTextarea2">Description</label>
                        </div>
                        <div className="form-floating mb-4">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                      style={{height: '200px'}} onChange={(e) => {
                                setSummery(e.target.value)
                            }}></textarea>
                            <label htmlFor="floatingTextarea2">Summery</label>
                        </div>
                        <div className={"d-flex align-items-center mb-4 gap-4"}>
                            <div className="input-group ">
                                <input type="file" className="form-control" onChange={(e) => {
                                    handelThumbnail(e)
                                }}/>
                                <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                            </div>
                            <div className="input-group">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                                <select className="form-select" id="inputGroupSelect01" onChange={(e) => {
                                    setOption(e.target.value)
                                }}>
                                    <option selected>Choose...</option>
                                    <option value="UI Design">UI Design</option>
                                    <option value="Front End">Front End</option>
                                    <option value="Backend">Backend</option>
                                    <option value="Server">Server</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-floating mb-4">
                            <input type="text" className="form-control" placeholder="GitHub Link" onChange={(e) => {
                                setGithubLink(e.target.value)
                            }}/>
                            <label htmlFor="floatingInput">GitHub Link</label>
                        </div>
                        <div className={"d-flex gap-4"}>
                            <button className={"btn btn-success px-5"}>Save</button>
                            <button className={"btn btn-warning px-5"}>Update</button>
                            <button className={"btn btn-danger px-5"}>Delete</button>
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
                                        <h4>{handleCurrentTimeAndDate()}</h4>
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
    );
}

export default UpdateProjectPopup;
