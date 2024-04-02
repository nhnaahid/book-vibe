
import { createContext, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getStoredData } from "../utility/localstorage";

export const ListedBooksContext = createContext();

const ListedBooks = () => {
    // const navigate=useNavigate();
    const [tabIndex, setTabIndex] = useState(0);
    //  const handleSortByRating = () => {
    //     navigate('/listed-books');
    //     setTabIndex(0);
    // }
    const [storedReadBooks, setStoredReadBooks] = useState([]);
    const [storedWishlistBooks, setStoredWishlistBooks] = useState([]);
    const books = useLoaderData();
    useEffect(() => {
        const storedReadBooksId = getStoredData('readList');
        if (books.length > 0) {
            const storedReadBooksDetails = books.filter(book => storedReadBooksId.includes(book.bookId));
            setStoredReadBooks(storedReadBooksDetails);
        }
    }, [books])

    useEffect(() => {
        const storedWishlistBooksId = getStoredData('wishlist');
        if (books.length > 0) {
            const storedWishlistBooksDetails = books.filter(book => storedWishlistBooksId.includes(book.bookId));
            setStoredWishlistBooks(storedWishlistBooksDetails);
        }
    }, [books])
    // console.log(storedWishlistBooks);

    const handleSortingByKey = (key) => {
        if (key === 'rating') {
            if (tabIndex === 0) {
                const sortedReadBooks = [...storedReadBooks].sort((a, b) => b.rating - a.rating);
                setStoredReadBooks(sortedReadBooks);
                // console.log(storedReadBooks);
            }
            else {
                const sortedWishlistBooks = [...storedWishlistBooks].sort((a, b) => b.rating - a.rating);
                setStoredWishlistBooks(sortedWishlistBooks);
                // console.log(storedWishlistBooks);
            }

        }
        else if (key === 'pages') {
            if (tabIndex === 0) {
                const sortedReadBooks = [...storedReadBooks].sort((a, b) => b.totalPages - a.totalPages);
                setStoredReadBooks(sortedReadBooks);
            }
            else {
                const sortedWishlistBooks = [...storedWishlistBooks].sort((a, b) => b.totalPages - a.totalPages);
                setStoredWishlistBooks(sortedWishlistBooks);
            }

        }
        else if (key === 'year') {
            if (tabIndex === 0) {
                const sortedReadBooks = [...storedReadBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
                setStoredReadBooks(sortedReadBooks);
            }
            else {
                const sortedWishlistBooks = [...storedWishlistBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
                setStoredWishlistBooks(sortedWishlistBooks);
            }
        }
        // console.log(storedWishlistBooks);
    }

    return (
        <div className="mt-16 flex flex-col gap-4">
            <div className="bg-base-200 rounded-xl">
                <h1 className="text-3xl font-bold text-center p-1 md:p-4 font-playfair">Books</h1>
            </div>
            {/* Sort by section */}
            <div className="dropdown mx-auto mt-5">
                <div tabIndex={0} role="button" className="btn m-1 bg-green-500 hover:bg-green-700 text-white">Sort By <IoIosArrowDown /></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44 md:w-52">
                    <li><a onClick={() => handleSortingByKey('pages')}>Number of pages</a></li>
                    <li><a onClick={() => handleSortingByKey('rating')}>Rating</a></li>
                    <li><a onClick={() => handleSortingByKey('year')}>Published year</a></li>
                </ul>
            </div>

            {/* Tabs */}
            <div className="mt-7">
                <div role="tablist" className="tabs tabs-lifted justify-start">
                    <Link to="" onClick={() => setTabIndex(0)} role="tab" className={`tab ${tabIndex == 0 ? 'tab-active' : ''} font-bold`}>Read Books</Link>
                    <Link to="wishlist" onClick={() => setTabIndex(1)} role="tab" className={`tab ${tabIndex == 1 ? 'tab-active' : ''} font-bold`}>Wishlist Books</Link>
                </div>
            </div>
            <ListedBooksContext.Provider value={{ storedReadBooks, storedWishlistBooks }}>
                <Outlet></Outlet>
            </ListedBooksContext.Provider>
        </div>
    );
};

export default ListedBooks;