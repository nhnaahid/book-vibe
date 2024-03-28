
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getStoredData } from '../utility/localstorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
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
    console.log(storedReadBooks);
    if (storedReadBooks.length === 0) {
        return (<div className='mt-16 bg-base-200 rounded-xl py-7 mx-2'>
            <h1 className='text-2xl font-bold text-center'>You haven't read any books yet.</h1>
        </div>)
    }

    return (
        <div className='mt-16 overflow-x-auto bg-base-200 rounded-xl py-7 mx-2'>
            <BarChart className='mx-auto'
                width={800}
                height={500}
                data={storedReadBooks}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={(entry) => entry.bookName.length > 15 ? entry.bookName.slice(0, 15) : entry.bookName}></XAxis>
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {storedReadBooks.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
}
export default PagesToRead