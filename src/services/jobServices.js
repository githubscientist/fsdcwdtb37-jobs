import instance from "../instances/instance";

const jobServices = {
    fetchAllJobs: async () => {
        const jobs = await instance.get('/jobs');
        return jobs;
    }
}

export default jobServices;