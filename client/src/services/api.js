import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const fetchConfiguration = (configId) =>
  API.get(`/configurations/${configId}`);

export const updateRemark = (configId, remark) =>
  API.put(`/configurations/${configId}`, { remark });
