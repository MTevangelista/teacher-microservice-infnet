import axios from "axios";

const activityService = axios.create({ baseURL: "http://localhost:3000" })

export default activityService