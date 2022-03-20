import axios from "axios";

export default function Api(endpoint, auth = true) {
	const instance = axios.create({
		baseURL: endpoint,
	});
	instance.interceptors.request.use(
		async (config) => {
			config.headers.Accept = "application/json";
			config.headers["Content-Type"] = "application/json";
			return config;
		},
		(error) => Promise.reject(error)
	);
	instance.interceptors.response.use(
		(response) => {
			return response;
		},
		async (error) => {
			return Promise.reject(error);
		}
	);
	return instance;
}
