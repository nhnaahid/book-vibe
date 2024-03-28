import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../utility/localstorage";
import BookInList from "../components/BookInList";


const Favorites = () => {
    const [storedFavoriteBooks, setStoredFavoriteBooks] = useState([]);
    const books = useLoaderData();
    useEffect(() => {
        const storedFavoriteBooksId = getStoredData('favorite');
        if (books.length > 0) {
            const storedFavoriteBooksDetails = books.filter(book => storedFavoriteBooksId.includes(book.bookId));
            // console.log(storedFavoriteBooksDetails);
            setStoredFavoriteBooks(storedFavoriteBooksDetails);
        }
    }, [books])
    return (
        <div className="mt-16">
            <div className="w-full md:w-2/3 text-center mx-auto space-y-3 mt-16">
                <h1 className="text-3xl font-bold font-playfair">Favorite Books</h1>
                <p className='text-sm text-gray-500'>Start your literary journey today with our handpicked selection of favorite books, <br /> waiting to be discovered at your fingertips.</p>
            </div>
            <div className="mt-12">
                {
                    storedFavoriteBooks.map(book => <BookInList key={book.bookId} book={book}></BookInList>)
                }
            </div>
        </div>
    );
};

export default Favorites;