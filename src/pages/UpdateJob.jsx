import { useState } from "react";
import jobServices from '../services/jobServices';
import { useLoaderData, useNavigate } from "react-router";

const UpdateJob = () => {

    const job = useLoaderData();

    const [jobTitle, setJobTitle] = useState(job.jobTitle);
    const [company, setCompany] = useState(job.company);
    const [rating, setRating] = useState(job.rating);
    const [reviews, setReviews] = useState(job.reviews);
    const [experience, setExperience] = useState(job.experience);
    const [location, setLocation] = useState(job.location);
    const [description, setDescription] = useState(job.description);
    const navigate = useNavigate();

    const handleUpdateJob = (e) => {
        e.preventDefault();

        // make an api call to update the job
        jobServices
            .updateJob(job.id, {
                jobTitle, company, rating, reviews, experience, location, description
            })
            .then(() => {
                alert('update success');

                navigate(-1);
            });
    }

    return (
        <div>
            <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
                <form onSubmit={handleUpdateJob}>
                    <h2 className="text-2xl font-bold mb-4">Update Job Posting</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="jobTitle">Job Title</label>
                        <input className="w-full px-3 py-2 border rounded" type="text" id="jobTitle" name="jobTitle"

                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="company">Company</label>
                        <input className="w-full px-3 py-2 border rounded" type="text" id="company" name="company"

                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="rating">Rating</label>
                        <input className="w-full px-3 py-2 border rounded" type="number" step="0.1" id="rating" name="rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="reviews">Reviews</label>
                        <input className="w-full px-3 py-2 border rounded" type="number" id="reviews" name="reviews"
                            value={reviews}
                            onChange={(e) => setReviews(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="experience">Experience</label>
                        <input className="w-full px-3 py-2 border rounded" type="text" id="experience" name="experience"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="location">Location</label>
                        <input className="w-full px-3 py-2 border rounded" type="text" id="location" name="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="description">Job Description</label>
                        <textarea className="w-full px-3 py-2 border rounded" id="description" name="description" rows="4"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" type="submit">Update Job</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateJob;