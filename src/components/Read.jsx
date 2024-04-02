import { useContext } from "react";
import BookInList from "./BookInList";
import { ListedBooksContext } from "../pages/ListedBooks";


const Read = () => {

    const { storedReadBooks } = useContext(ListedBooksContext);
    // console.log(storedReadBooks);

    // const [storedReadBooks, setStoredReadBooks] = useState([]);
    // const [sortBy, setSortBy] = useState('');
    // const books = useLoaderData();
    // console.log(handleRating);
    // useEffect(() => {
    //     const storedReadBooksId = getStoredData('readList');
    //     if (books.length > 0) {
    //         const storedReadBooksDetails = books.filter(book => storedReadBooksId.includes(book.bookId));
    //         // console.log(storedReadBooksDetails);
    //         setStoredReadBooks(storedReadBooksDetails);
    //     }
    // }, [books])
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