import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../utility/localstorage";
import BookInList from "./BookInList";


const Read = () => {
    const [storedReadBooks, setStoredReadBooks] = useState([]);
    const books = useLoaderData();
    useEffect(() => {
        const storedReadBooksId = getStoredData('readList');
        if (books.length > 0) {
            const storedReadBooksDetails = books.filter(book => storedReadBooksId.includes(book.bookId));
            // console.log(storedReadBooksDetails);
            setStoredReadBooks(storedReadBooksDetails);
        }
    }, [books])
    return (
        <div>
            {
                storedReadBooks.map(book => <BookInList key={book.bookId} book={book}></BookInList>)
            }
        </div>
    );
};

export default Read;