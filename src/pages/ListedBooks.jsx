
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    // const navigate=useNavigate();
    const [tabIndex, setTabIndex] = useState(0);
    //  const handleSortByRating = () => {
    //     navigate('/listed-books');
    //     setTabIndex(0);
    // }
    return (
        <div className="mt-16 flex flex-col gap-4">
            <div className="bg-base-200 rounded-xl">
                <h1 className="text-3xl font-bold text-center p-1 md:p-4 font-playfair">Books</h1>
            </div>
            {/* Sort by section */}
            <div className="dropdown mx-auto mt-5">
                <div tabIndex={0} role="button" className="btn m-1 bg-green-500 hover:bg-green-700 text-white">Sort By <IoIosArrowDown /></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44 md:w-52">
                    <li><a>Rating</a></li>
                    <li><a>Number of pages</a></li>
                    <li><a>Published year</a></li>
                </ul>
            </div>
            <div className="mt-7">
                <div role="tablist" className="tabs tabs-lifted justify-start">
                    <Link to="" onClick={() => setTabIndex(0)} role="tab" className={`tab ${tabIndex == 0 ? 'tab-active' : ''} font-bold`}>Read Books</Link>
                    <Link to="wishlist" onClick={() => setTabIndex(1)} role="tab" className={`tab ${tabIndex == 1 ? 'tab-active' : ''} font-bold`}>Wishlist Books</Link>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;