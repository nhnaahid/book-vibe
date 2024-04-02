import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../utility/localstorage";
import BookInList from "./BookInList";


const Read = ({ handleRating }) => {
    const [storedReadBooks, setStoredReadBooks] = useState([]);
    // const [sortBy, setSortBy] = useState('');
    const books = useLoaderData();
    console.log(handleRating);
    useEffect(() => {
        const storedReadBooksId = getStoredData('readList');
        if (books.length > 0) {
            const storedReadBooksDetails = books.filter(book => storedReadBooksId.includes(book.bookId));
            // console.log(storedReadBooksDetails);
            setStoredReadBooks(storedReadBooksDetails);
        }
    }, [books])
    // setSortBy(handleRating);
    // if (sortBy === 'rating') {
    //     const sortedBooks = [...storedReadBooks].sort((a, b) => b.rating - a.rating);
    //     setStoredReadBooks(sortedBooks);
    // }
    return (
        <div>
            {
                storedReadBooks.map(book => <BookInList key={book.bookId} book={book}></BookInList>)
            }
        </div>
    );
};

export default Read;