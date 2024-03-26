
// import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    // console.log(books);
    // console.log(typeof id);
    const book = books.find(book => book.bookId === idInt)
    // console.log(book);
    const { bookId, bookName, author, image, rating, category, tags, publisher, yearOfPublishing, totalPages, review } = book;
    return (
        <div className='mt-16 flex flex-col md:flex-row justify-between md:items-center gap-5 lg:gap-0 items-stretch'>
            <div className='w-full lg:w-2/5 bg-base-200 rounded-xl p-2 lg:p-0'>
                <div className='rounded-xl lg:p-16 '>
                    <img src={image} alt="" className='rounded-xl' />
                </div>
            </div>
            <div className='w-full lg:w-1/2 p-2 lg:p-0'>
                <div className='space-y-3 border-b pb-3'>
                    <h1 className="text-3xl font-bold font-playfair">{bookName}</h1>
                    <p className='font-bold'>By: {author}</p>
                </div>
                <p className='border-b py-3 mb-3 font-bold'>{category}</p>
                <p><span className='font-bold'>Review:</span> {review}</p>

                <div className='flex items-center gap-5 border-b'>
                    <p className='font-bold my-3'>Tag</p>
                    <div className='flex gap-3 w-full'>
                        {
                            tags.map(tag => <p className='bg-green-50 text-green-500 font-semibold px-2 rounded-lg'>{tag}</p>)
                        }
                    </div>

                </div>
                <div className='space-y-3 mt-2'>
                    <p>Number of Pages: <span className='font-bold ml-5'>{totalPages}</span></p>
                    <p>Publisher:   <span className='font-bold ml-20'>{publisher}</span></p>
                    <p>Year of Publishing: <span className='font-bold ml-3'>{yearOfPublishing}</span></p>
                    <p>Rating: <span className='font-bold ml-[102px]'>{rating}</span></p>
                </div>
                <div className='mt-3 space-x-2'>
                    <a className="btn btn-xs sm:btn-sm md:btn-md  hover:bg-green-500 border border-gray-500">Read</a>
                    <a className="btn btn-xs sm:btn-sm md:btn-md bg-blue-400 hover:bg-blue-600 text-white">Wishlist</a>
                </div>
            </div>

        </div>
    );
};

BookDetails.propTypes = {

};

export default BookDetails;