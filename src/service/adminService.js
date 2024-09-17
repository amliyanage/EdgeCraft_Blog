import axios from "axios";

export const adminRegister = async (formData) => {
    const end_point = "http://localhost:8080/edge_craft/v1/user";

    try {
        const response = await axios.post(end_point, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        if (response.status === 200) {
            alert(response.data);
            return true
        }
    } catch (error) {
        alert(error.response.data);
    }
};

export const adminLogin = async (params) => {
    const end_point = "http://localhost:8080/edge_craft/v1/user/login";

    try {
        const response = await axios.get(end_point, {
            params: params
        });
        if (response.status === 200) {
            return true
        }
    } catch (error) {
        alert(error.response.data);
    }
}

export const getUserData = async (email) => {
    const end_point = `http://localhost:8080/edge_craft/v1/user/${email}`;

    try {
        return await axios.get(end_point);
    } catch (error) {
        alert(error.response.data);
    }
}

export const getUserPic = async (userName) => {
    const end_point = `http://localhost:8080/edge_craft/v1/user/profilePic/${userName}`;

    try {
        const response = await axios.get(end_point, { responseType: 'blob' });
        const url = URL.createObjectURL(response.data);
        return url;
    } catch (error) {
        alert(error.response?.data || 'Failed to fetch image');
        return null;
    }
}

export const updateUserData = async (params) => {
    const end_point = 'http://localhost:8080/edge_craft/v1/user';
    try {
        // Pass params directly as query parameters
        const response = await axios.put(end_point, null, { params });
        return response;
    } catch (e) {
        console.error("Error updating user data:", e);
        alert("Failed to update user data");
    }
};

