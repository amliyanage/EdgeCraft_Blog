import axios from "axios";

export function getUserProjects (email) {
    const end_point = `http://localhost:8080/edge_craft/v1/projects/allProjects/${email}`;

    try {
        return axios.get(end_point);
    } catch (error) {
        alert(error.response.data);
    }
}