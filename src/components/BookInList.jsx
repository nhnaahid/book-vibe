import PropTypes from 'prop-types';
import { FaRegCalendarTimes } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { Link } from 'react-router-dom';

const BookInList = ({ book }) => {
    const { bookId, bookName, author, image, rating, category, tags, publisher, yearOfPublishing, totalPages } = book;
    return (
        <div className='flex flex-col md:flex-row mt-5 gap-10 items-center border rounded-xl p-10 md:p-5'>
            <div className='w-full md:w-1/4 bg-base-200 rounded-xl flex-1'>
                <div className='rounded-xl lg:p-10 '>
                    <img src={image} alt="" className='rounded-xl' />
                </div>
            </div>

            <div className='w-full md:w-3/4'>
                <div className='space-y-3 pb-3'>
                    <h1 className="text-3xl font-bold font-playfair">{bookName}</h1>
                    <p className='font-bold'>By: {author}</p>
                </div>
                <div className='flex flex-col md:flex-row md:items-center md:gap-5'>
                    <div className='flex items-center gap-2'>
                        <p className='font-bold my-3'>Tag</p>
                        <div className='flex items-center gap-1'>
                            {
                                tags.map(tag => <p className='bg-green-50 text-green-500 font-semibold px-2 rounded-lg text-sm md:text-base'>{tag}</p>)
                            }
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center gap-2'>
                            <FaRegCalendarTimes></FaRegCalendarTimes>
                            <p>Year of Publishing: {yearOfPublishing}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row  md:items-center gap-2 md:gap-5 border-b py-3'>
                    <div className='flex items-center gap-2'>
                        <FaUserGroup></FaUserGroup>
                        <p>Publisher: {publisher}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MdOutlineLibraryBooks></MdOutlineLibraryBooks>
                        <p>Pages: {totalPages}</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 mt-3'>
                    <p className='rounded-full bg-blue-100 text-blue-600 px-2 md:p-3 text-sm md:text-base'>Category: {category}</p>
                    <p className='rounded-full bg-orange-100 text-orange-600 px-2 md:p-3 text-sm md:text-base'>Rating: {rating}</p>
                    <Link to={`/book-details/${bookId}`} className="btn btn-xs sm:btn-sm md:btn-md bg-green-500 hover:bg-green-700 text-white rounded-full">View Details</Link>
                </div>
            </div>
        </div>
    );
};

BookInList.propTypes = {
    book: PropTypes.object
};

export default BookInList;