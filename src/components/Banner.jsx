import banner from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row  gap-5 items-center bg-base-200 p-10 justify-center rounded-lg mt-20'>
            <div className='w-full md:w-2/5 space-y-4'>
                <h1 className="text-5xl font-bold font-playfair">Books to freshen up <br /> your bookshelf</h1>
                <p className='text-sm text-gray-500'>Welcome to Book Vibe, your one-stop destination for all things book-related. Explore our extensive collection of books spanning various genres. </p>
                <a className="btn btn-xs sm:btn-sm md:btn-md bg-green-500 hover:bg-green-700 text-white">View The List</a>
            </div>
            <div className='w-full md:w-2/5'>
                <img className='rounded-lg' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;