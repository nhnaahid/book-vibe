import { useContext } from "react";
import BookInList from "./BookInList";
import { ListedBooksContext } from "../pages/ListedBooks";


const Wishlist = () => {

    const { storedWishlistBooks } = useContext(ListedBooksContext);
    console.log(storedWishlistBooks);

    return (

            <div>
                {
                    storedWishlistBooks.map(book => <BookInList key={book.bookId} book={book}></BookInList>)
                }
            </div>
    );
};

export default Wishlist;