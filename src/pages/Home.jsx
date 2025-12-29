import { useLoaderData } from "react-router";

const Home = () => {

    // create a state to handle the api data
    const jobs = useLoaderData();

    console.log(jobs); // printed or processed twice 
    // 1. when the component first is mounted - jobs = []
    // 2. after the component is mounted, useEffect() runs once. we are making an api call -> getting a response data -> set the data to the jobs state -> state changes -> triggers component re-rendering -> jobs state gets printed for the second time

    return (
        <h1 className="text-4xl text-left mt-4 ml-4">Home Page</h1>
    )
}

export default Home;