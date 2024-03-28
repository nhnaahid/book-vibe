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
            <div className="bg-base-200 rounded-xl">
                <h1 className="text-3xl font-bold text-center p-1 md:p-4 font-playfair">Favorite Books</h1>
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