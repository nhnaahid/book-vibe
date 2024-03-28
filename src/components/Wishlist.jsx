import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../utility/localstorage";
import BookInList from "./BookInList";


const Wishlist = () => {
    const [storedWishlistBooks, setStoredWishlistBooks] = useState([]);
    const books = useLoaderData();
    useEffect(() => {
        const storedWishlistBooksId = getStoredData('wishlist');
        if (books.length > 0) {
            const storedWishlistBooksDetails = books.filter(book => storedWishlistBooksId.includes(book.bookId));
            // console.log(storedWishlistBooksDetails);
            setStoredWishlistBooks(storedWishlistBooksDetails);
        }
    }, [books])
    return (
        <div>
            {
                storedWishlistBooks.map(book => <BookInList key={book.bookId} book={book}></BookInList>)
            }
        </div>
    );
};

export default Wishlist;