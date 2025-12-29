import { useLoaderData } from "react-router";
import Job from "./Job";

const Home = () => {
    const jobs = useLoaderData();

    return (
        <>
            <h1 className="text-4xl p-4 mt-4">All Jobs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mx-0 px-4">
                {
                    jobs.map((job) => <Job
                        key={job.id}
                        job={job}
                    />)
                }
            </div>
        </>
    )
}

export default Home;