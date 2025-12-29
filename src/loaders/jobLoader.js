import jobServices from "../services/jobServices"

const jobLoader = async ({ params }) => {
    const response = await jobServices.fetchJobByID(params.jobId);
    return response.data;
}

export default jobLoader;