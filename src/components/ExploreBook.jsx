import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CiStar } from "react-icons/ci";

const ExploreBook = ({ book }) => {
    // console.log(book);
    const { bookId, bookName, author, image, rating, category, tags, } = book;
    return (
        <Link to={`/book-details/${bookId}`}>
            <div className="card bg-base-100 shadow-xl border flex h-full">
                <figure className="bg-base-200 m-5 rounded-xl">
                    <div className=' w-1/2 my-7 rounded-xl'>
                        <img src={image} alt="book" className='rounded-xl' />
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                    <div className='flex gap-3 w-full'>
                        {
                            tags.map(tag => <p className='bg-green-50 text-green-500 font-semibold rounded-lg'>{tag}</p>)
                        }
                    </div>
                    <div className='border-b-2 p-3 w-full space-y-2 '>
                        <h2 className='text-2xl font-bold font-playfair'>{bookName}</h2>
                        <p>By: {author}</p>
                    </div>
                    <div className='flex justify-between w-full items-center mt-2'>
                        <p className='text-start'>{category}</p>
                        <div className='flex gap-2'>
                            <p>{rating}</p>
                            <CiStar className='text-xl'></CiStar>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

ExploreBook.propTypes = {
    book: PropTypes.object
};

export default ExploreBook;