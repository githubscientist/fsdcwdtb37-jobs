import { useState } from "react";
import jobServices from '../services/jobServices';
import { useNavigate } from "react-router";

const CreateJob = () => {

    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [rating, setRating] = useState('');
    const [reviews, setReviews] = useState('');
    const [experience, setExperience] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleCreateJob = (e) => {
        e.preventDefault();

        // make an api call to create a new job
        jobServices
            .createJob({ jobTitle, company, rating, reviews, experience, location, description })
            .then(() => {
                alert('Job Listing is created');

                setTimeout(() => {
                    navigate('/');
                }, 500);
            })
    }

    return (
        <div>
            <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
                <form onSubmit={handleCreateJob}>
                    <h2 className="text-2xl font-bold mb-4">Create Job Posting</h2>
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
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" type="submit">Create Job</button>
                </form>
            </div>
        </div>
    )
}

export default CreateJob;