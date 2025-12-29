import axios from "axios";

const jobsLoader = async () => {
    let response = await axios.get('https://694e9adbb5bc648a93c0d760.mockapi.io/jobs');
    return response.data;
}

export default jobsLoader;