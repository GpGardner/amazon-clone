import axios from "axios";

const instance = axios.create({
	baseURL: "https://us-central1-clone-ae657.cloudfunctions.net/api" 
	// 'http://localhost:5001/clone-ae657/us-central1/api'
});

export default instance;