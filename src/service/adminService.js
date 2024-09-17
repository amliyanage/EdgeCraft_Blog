import axios from "axios";

export const adminRegister = async (formData) => {
    const end_point = "http://localhost:8080/edge_craft/v1/user";

    try {
        const response = await axios.post(end_point, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        alert(response.status);
        if (response.status === 200) {
            alert(response.data);
        }
    } catch (error) {
        alert(error.response.data);
    }
};
