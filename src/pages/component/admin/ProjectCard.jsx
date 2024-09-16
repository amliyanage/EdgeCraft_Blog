import thumbnail from '../../../assets/image/thumbnail.png'
import '../../../assets/css/component/admin/ProjectCard.css'

const ProjectCard = ({ project }) => {
    return(
        <div className={"w-100"} id={"projectCard"}>
            <div className="thumbnail mb-3">
                <img className={"w-100"} src={thumbnail} alt=""/>
            </div>
            <div className={"infoHead d-flex align-items-center gap-3"}>
            <h4>INTERNET</h4>
                <div></div>
                <h4>June 28, 2021</h4>
            </div>
            <h1 className={"mt-3"}>How to design a product that can grow itself 10x in year</h1>
        </div>
    )
}

export default ProjectCard;