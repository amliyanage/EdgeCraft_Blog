import projectImgTemp from '../../assets/image/thumbnail-2.png'
import ownerProfileImgTemp from "../../assets/image/OwnerImg.png";
import '../../assets/css/component/ProjectCard.css'

const ProjectCard = ({ handelView , projectData }) =>{

    projectData = ""

    return(
        <div id={"ProjectCard"} onClick={() => handelView(projectData)}>
            <div className={"Thumbnail"}>
                <img src={ projectImgTemp } alt="Project Thumbnail"/>
            </div>
            <div className="projectInfo mt-3">
                <div className="infoHead d-flex">
                    <div className={"w-auto"}>
                        <h4>UI DESIGN</h4>
                    </div>
                    <div className="uploadedDate d-flex align-items-center gap-3">
                        <div></div>
                        <h4>July 2, 2021</h4>
                    </div>
                </div>
                <h1 className={"mt-2"}>How to design a product that can grow itself 10x in year</h1>
                <p>Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam
                    vestibulum. Nostra netus per conubia dolor.</p>
                <div className="ownerInfo d-flex gap-3 mt-4 align-items-center">
                    <img src={ownerProfileImgTemp} alt="Owner Profile Img"/>
                    <div>
                        <h2>Leslie Alexander</h2>
                        <h3>UI Designer</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard