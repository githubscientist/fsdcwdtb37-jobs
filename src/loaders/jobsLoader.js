import jobServices from "../services/jobServices";

const jobsLoader = async () => {
    let response = await jobServices.fetchAllJobs();
    return response.data;
}

export default jobsLoader;