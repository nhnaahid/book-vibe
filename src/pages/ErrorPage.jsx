// import { Link, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const ErrorPage = () => {
    // const error=useRouteError();
    // console.log(error.status);
    return (
        <div>
            <div className="h-16">
                <Navbar></Navbar>
            </div>
            <div className="mt-16 text-center space-y-3">
                <h1 className="text-3xl font-bold text-red-500">Oops!..</h1>
                <p className="font-bold text-red-400">404: Page Not Found.</p>
                {/* <Link to="/" className="btn btn-xs sm:btn-sm md:btn-md bg-green-500 hover:bg-green-700 text-white rounded-full">Return Home</Link> */}
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;