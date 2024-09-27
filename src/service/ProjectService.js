import axios from "axios";

export function getUserProjects (email) {
    const end_point = `http://localhost:8080/edge_craft/v1/projects/allProjects/${email}`;

    try {
        return axios.get(end_point);
    } catch (error) {
        alert(error.response.data);
    }
}

export async function getProjectImg(projectTitle) {
    const end_point = `http://localhost:8080/edge_craft/v1/projects/getProjectThumbnail/${projectTitle}`;

    try {
        const response = await axios.get(end_point, {responseType: 'blob'});
        return URL.createObjectURL(response.data);
    } catch (error) {
        alert(error.response?.data || 'Failed to fetch image');
        return null;
    }
}

export async function saveProject(formData) {
    const end_point = "http://localhost:8080/edge_craft/v1/projects"

    try {
        const response = await axios.post(end_point, formData);
        console.log(response);
        if (response.status === 200) {
            alert(response.data)
            return true;
        }
        else {
            alert(response.data);
        }
    }catch (error) {
        alert(error.response.data);
    }

}