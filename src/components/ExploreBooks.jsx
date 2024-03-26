import { useLoaderData } from "react-router-dom";
import ExploreBook from "./ExploreBook";


const ExploreBooks = () => {
    const exploreBooks = useLoaderData();
    // console.log(exploreBooks);
    return (
        <div>
            <div className="w-full md:w-2/3 text-center mx-auto space-y-3 mt-16">
                <h1 className="text-3xl font-bold font-playfair">Explore Books</h1>
                <p className='text-sm text-gray-500'>Embark on a literary journey with Book Vibe! Delve into our vast collection of captivating reads, where every page holds the promise of adventure, knowledge, and inspiration.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
                {
                    exploreBooks.map(book => <ExploreBook key={book.id} book={book}></ExploreBook>)
                }
            </div>
        </div>
    );
};

export default ExploreBooks;