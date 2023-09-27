import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="h-screen flex flex-col justify-center items-center mx-auto">
            <h3 className="text-7xl text-center mb-10 text-red-500 font-bold">404 Error</h3>
            <p className="mb-4 font-bold md:mb-10 p-4">The data you are searching is not found. Please go back to home page</p>
           <Link to='/'><button className="btn bg-black text-white font-bold">Go Back to Home</button></Link>
                </div>
            
        </div>
    );
};

export default ErrorPage;