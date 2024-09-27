import PropTypes from "prop-types";
import '../../../assets/css/component/admin/DeletePopup.css'
import {deleteProject} from "../../../service/ProjectService.js";

const DeletePopup = ({close,projectId}) => {

    DeletePopup.propTypes = {
        close: PropTypes.func.isRequired,
        projectId: PropTypes.string.isRequired
    }

    const deleteProjectOnAction = async () => {
        const response = await deleteProject(projectId);
        if (response) {
            close();
        }
    }

    return(
        <div id={"deleteProject"} className={"position-absolute z-3 d-flex justify-content-center align-items-center w-100 h-100"}>
            <div className={"w-25 text-center p-5"}>
                <h1>Are you sure you want to delete this project?</h1>
                <div className={"d-flex justify-content-between gap-4 mt-4"}>
                    <button className={"btn btn-danger w-50"} onClick={deleteProjectOnAction} >Yes</button>
                    <button className={"btn btn-primary w-50"} onClick={() => close()}>No</button>
                </div>
            </div>
        </div>
    )

}

export default DeletePopup