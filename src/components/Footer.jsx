import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-base-200 mt-20'>
            <div className="w-1/2 text-center mx-auto py-8">
                <div className="border-b-2 border-dotted py-10 space-y-5">
                    <h1 className="text-3xl font font-extrabold">Book Vibe</h1>
                    <p className="text-zinc-500">Our mission is to provide book lovers with a convenient and enjoyable user experience. Join our community of like minded enthusiasts.</p>
                    <div className="flex flex-wrap justify-center gap-8 text-2xl">
                        <a href="#"><FaTwitter></FaTwitter></a>
                        <a href="#"><FaFacebook></FaFacebook></a>
                        <a href="#"><FaInstagram></FaInstagram></a>
                    </div>
                </div>
                <div className="mt-10">
                    <p className="text-sm">2024, All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;