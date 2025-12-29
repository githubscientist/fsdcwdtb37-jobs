import instance from '../instances/instance';

const jobsLoader = async () => {
    let response = await instance.get('/jobs');
    return response.data;
}

export default jobsLoader;