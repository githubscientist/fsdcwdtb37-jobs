import instance from "../instances/instance";

const jobServices = {
    fetchAllJobs: async () => {
        const jobs = await instance.get('/jobs');
        return jobs;
    },

    fetchJobByID: async (jobId) => {
        const job = await instance.get(`/jobs/${jobId}`);
        return job;
    },

    deleteJobByID: async (jobId) => {
        await instance.delete(`/jobs/${jobId}`);
    }
}

export default jobServices;