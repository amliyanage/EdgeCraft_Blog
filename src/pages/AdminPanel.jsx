import '../assets/css/admin/AdminPanel.css'
import AdminNavBar from "./component/admin/AdminNavBar.jsx";

const AdminPanel = () => {
  return (
    <div id={"adminPanel"}>

        <AdminNavBar />

        <div className="profileSection">

        </div>

      <div className="editSection">

      </div>

        <div className="viewSection"></div>

    </div>
  );
}

export default AdminPanel;