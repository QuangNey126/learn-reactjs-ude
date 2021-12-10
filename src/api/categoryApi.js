import axiosClient from './axiosClient';

const categoryApi = {
    getAll(params) {
        const url = '/categoties';
        return axiosClient.get(url, { params })
    },

    get(id) {
        const url = `/categoties/${id}`;
        return axiosClient.get(url);
    }, 

    add(data) {
        const url = '/categoties';
        return axiosClient.post(url, data);
    },
   
    update(data) {
        const url = `/categoties/${data.id}`;
        return axiosClient.patch(url, data);
    },

    remove(id) {
        const url = `/categoties/${id}`;
        return axiosClient.delete(url);
    },
};

export default categoryApi;