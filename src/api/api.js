import { axiosInstance } from "./axiosInstance.js";

export const usersAPI = {
  getUsers(pageNum = 1, pageSize = 10) {
    return axiosInstance
      .get(`users?page=${pageNum}&count=${pageSize}`)
      .then((response) => response.data);
  },
  unfollowUser(userId) {
    return axiosInstance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
  followUser(userId) {
    return axiosInstance
      .post(`follow/${userId}`)
      .then((response) => response.data);
  },
};

export const authAPI = {
  me() {
    return axiosInstance.get("auth/me").then((response) => {
      return response.data;
    });
  },
  login(data) {
    return axiosInstance.post("auth/login", data);
  },
  logout() {
    return axiosInstance.delete("auth/login");
  },
};

export const profileAPI = {
  getProfile(userId) {
    return axiosInstance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return axiosInstance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return axiosInstance.put(`profile/status`, { status });
  },
};
