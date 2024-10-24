import axios from "axios";

export const adminRegister = async (formData) => {

    const end_point = "http://localhost:8080/edge_craft/v1/users";

    try {
        const response = await axios.post(end_point, formData);
        if (response.status === 201) {
            return true;
        }
        else {
            alert(response.data);
        }
    }catch (error) {
        alert(error.response.data);
    }

};

export const adminLogin = async (params) => {
    const end_point = "http://localhost:8080/edge_craft/v1/users/login";

    try {
        const response = await axios.get(end_point, {
            params: params
        });
        if (response.status === 200) {
            return {
                status: true,
                message: "Login successful"
            }
        }
    } catch (error) {
        return {
            status: false,
            message: error.response.data
        };
    }
}

export const getUserData = async (email) => {
    const end_point = `http://localhost:8080/edge_craft/v1/users/${email}`;

    try {
        return await axios.get(end_point);
    } catch (error) {
        alert(error.response.data);
    }
}

export const getUserPic = async (userName) => {
    const end_point = `http://localhost:8080/edge_craft/v1/users/profilePic/${userName}`;

    try {
        const response = await axios.get(end_point, { responseType: 'blob' });
        return URL.createObjectURL(response.data);
    } catch (error) {
        alert(error.response?.data || 'Failed to fetch image');
        return null;
    }
}

export const updateUserData = async (params) => {
    const end_point = 'http://localhost:8080/edge_craft/v1/users';
    try {
        return await axios.put(end_point, null, {params});
    } catch (e) {
        console.error("Error updating user data:", e);
        alert("Failed to update user data");
    }
};

