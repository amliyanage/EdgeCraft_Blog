import ownerProfileImgTemp from "../../assets/image/OwnerImg.png";
import projectImgTemp from "../../assets/image/thumbnail-2.png";
import '../../assets/css/component/ViewProject.css'

const ViewProject = ({ projectData }) => {
    return(
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
            <h1 className={"mt-4"}>Understanding color theory: the color wheel and finding complementary colors</h1>
            <div className="ownerInfo d-flex gap-3 mt-4 align-items-center">
                <img src={ownerProfileImgTemp} alt="Owner Profile Img"/>
                <div>
                    <h2>Leslie Alexander</h2>
                    <h3>UI Designer</h3>
                </div>
            </div>
            <img className={"mt-5"} src={projectImgTemp} alt="Project Thumbnail"/>
            <p className={"mt-5"}>
                Male sixth sea it a. Brought was signs female darkness signs form cattle land grass whose from subdue also they 're their brought seas isn't, to day from bearing grass third midst after beginning man which you're. Dry, gathering beginning given made them evening.
            </p>
            <p className={"mt-4"}>
                Lights dry. Thing, likeness, forth shall replenish upon abundantly our green. Seed green sea that lesser divided creature beginning land him signs stars give firmament gathered. Wherein there their morning a he grass. Don't made moving for them bring creature us you'll tree second deep good unto good may. Us yielding.

                Have. Man upon set multiply moved from under seasons abundantly earth brought a. They're open moved years saw isn't morning darkness. Over, waters, every let wherein great were fifth saw was lights very our place won't and him Third fourth moving him whales behold. Beast second stars lights great was don't green give subdue his. Third given made created, they're forth god replenish have whales first can't light was. Herb you'll them beast kind divided. Were beginning fly air multiply god Yielding sea don't were forth.

            </p>
        </div>
    )
}

export default ViewProject;