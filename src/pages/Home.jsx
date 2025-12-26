import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {

    // create a state to handle the api data
    const [jobs, setJobs] = useState([]);

    // it will run only once immediately after the component is rendered
    useEffect(() => {
        // make the api call
        // asynchronous or synchronous
        axios
            .get('https://694e9adbb5bc648a93c0d760.mockapi.io/jobs')
            .then((response) => {
                setJobs(response.data);
            })
    }, []);

    console.log(jobs); // printed or processed twice 
    // 1. when the component first is mounted - jobs = []
    // 2. after the component is mounted, useEffect() runs once. we are making an api call -> getting a response data -> set the data to the jobs state -> state changes -> triggers component re-rendering -> jobs state gets printed for the second time

    return (
        <h1 className="text-4xl text-left mt-4 ml-4">Home Page</h1>
    )
}

export default Home;