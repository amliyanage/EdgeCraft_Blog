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
