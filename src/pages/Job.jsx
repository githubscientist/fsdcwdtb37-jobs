import { Link } from "react-router";

const Job = ({ job }) => {
    return (
        <Link to={`/jobs/${job.id}`}>
            <div className="bg-gray-400 p-4 rounded shadow hover:shadow-lg transition-shadow text-white">
                <h2 className="text-xl font-semibold">{job.jobTitle}</h2>
                <p>{job.company}</p>
                <p>{job.location}</p>
            </div>
        </Link>
    )
}

export default Job;