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
    },

    createJob: async (data) => {
        const response = await instance.post('/jobs', data);
        return response;
    },

    updateJob: async (jobId, data) => {
        const response = await instance.put(`/jobs/${jobId}`, data);
        return response;
    }
}

export default jobServices;