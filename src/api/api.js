import { axiosInstance } from "./axiosInstance.js";

export const usersAPI = {
	getUsers(pageNum = 1, pageSize = 10) {
		return axiosInstance.get(`users?page=${pageNum}&count=${pageSize}`)
			.then(response => response.data)
	},
	unfollowUser(userId) {
		return axiosInstance.delete(`follow/${userId}`)
			.then(response => response.data)
	},
	followUser(userId) {
		return axiosInstance.post(`follow/${userId}`)
			.then(response => response.data)
	}
}

export const authAPI = {
	me() {
		return axiosInstance.get('auth/me')
			.then(response => response.data);
	}
}