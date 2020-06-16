import * as axios from 'axios';

export const axiosInstance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "9cf7305c-b740-4811-af00-7a1708d21314"
	}
});

