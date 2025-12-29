import { useLoaderData, useNavigate } from "react-router";
import jobServices from "../services/jobServices";

const JobDetails = () => {

    const job = useLoaderData();
    const navigate = useNavigate();

    const handleDelete = (jobId) => {
        const confirmation = confirm('Are you sure?');
        if (confirmation) {
            jobServices
                .deleteJobByID(jobId)
                .then(() => {
                    alert('Deletion successful!');

                    setTimeout(() => {
                        navigate('/');
                    }, 500);
                })
        }
    }

    return (
        <div className="text-center mt-4 mx-0 p-4">
            <div className="bg-gray-400 shadow-md rounded-lg p-6 text-white">
                <h2 className="text-2xl font-semibold mb-2">{job.jobTitle}</h2>
                <p className="mb-2"><strong>Company: </strong>{job.company}</p>
                <p className="mb-2">Description: {job.description}</p>
            </div>

            <button className="mt-4 ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => handleDelete(job.id)}
            >Delete</button>
        </div>
    )
}

export default JobDetails;