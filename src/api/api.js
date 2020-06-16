import { axiosInstance } from "./axiosInstance.js";

export const usersAPI = {
	getUsers(pageNum = 1, pageSize = 10) {
		return axiosInstance.get(`users?page=${pageNum}&count=${pageSize}`)
			.then(response => response.data)
	},
	deleteUser(userId) {
		return axiosInstance.delete(`unfollow/${userId}`)
			.then(response => response.data)
	}
}

export const authAPI = {
	me() {
		return axiosInstance.get('auth/me')
			.then(response => response.data);
	}
}