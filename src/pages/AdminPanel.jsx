import '../assets/css/admin/AdminPanel.css'
import AdminNavBar from "./component/admin/AdminNavBar.jsx";
import {SearchIcon} from "../util/Icons.jsx";

const AdminPanel = () => {
  return (
    <div id={"adminPanel"} className={"d-flex justify-content-center"}>

        <div className={"w-75 mt-3"}>
            <AdminNavBar />

            <div className={"d-flex justify-content-between"}>
                <div className="search d-flex align-items-center gap-3">
                    <SearchIcon/>
                    <input type="text" placeholder="Search.." className={"bg-transparent border-0"}/>
                </div>
                <button className={"border-0"}>New Project</button>
            </div>
        </div>

    </div>
  );
}

export default AdminPanel;