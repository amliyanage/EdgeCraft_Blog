import React, {useState} from 'react';
import '../../../assets/css/component/admin/UpdateProjectPopup.css';
import ownerProfileImgTemp from "../../../assets/image/OwnerImg.png";

const UpdateProjectPopup = () => {

    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");
    const [summery , setSummery] = useState("");
    const [githubLink , setGithubLink] = useState("");
    const [file , setFile] = useState("");

    return (
        <div id="UpdateProjectPopup" className="d-flex justify-content-center align-items-center">
            <div className="p-4">
                <div className="btn-close btn-close-white float-end"></div>
                <div className="editSection">
                    <div>
                        <div className="form-floating mb-4">
                            <input type="text" className="form-control" placeholder="Title" onChange={(e) =>{setTitle(e.target.value)}} />
                            <label htmlFor="floatingInput">Title</label>
                        </div>
                        <div className="form-floating mb-4">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '300px' }} onChange={(e) =>{setDescription(e.target.value)}}></textarea>
                            <label htmlFor="floatingTextarea2">Description</label>
                        </div>
                        <div className="form-floating mb-4">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                      style={{height: '200px'}} onChange={(e) =>{setSummery(e.target.value)}}></textarea>
                            <label htmlFor="floatingTextarea2">Summery</label>
                        </div>
                        <div className="input-group mb-4">
                            <input type="file" className="form-control" onChange={(e) =>{setFile(e.target.value)}}/>
                            <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input type="text" className="form-control" placeholder="GitHub Link" onChange={(e) =>{setGithubLink(e.target.value)}} />
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
                                        <h4>UI DESIGN</h4>
                                    </div>
                                    <div className="uploadedDate d-flex align-items-center gap-3">
                                        <div></div>
                                        <h4>July 2, 2021</h4>
                                    </div>
                                </div>
                                <h1 className={"mt-4"}>{title}</h1>
                                <div className="ownerInfo d-flex gap-3 mt-4 align-items-center">
                                    <img src={ownerProfileImgTemp} alt="Owner Profile Img"/>
                                    <div>
                                        <h2>Leslie Alexander</h2>
                                        <h3>UI Designer</h3>
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
