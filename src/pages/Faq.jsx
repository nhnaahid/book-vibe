

const Faq = () => {
    return (
        <div className="mt-16">
            <div className="w-full md:w-2/3 text-center mx-auto space-y-3 mt-16">
                <h1 className="text-3xl font-bold font-playfair">FAQ</h1>
                <p className='text-sm text-gray-500'>Answers to Your Frequently Asked Questions: Everything You Need to Know <br /> Before You Dive into Digital Reading!</p>
            </div>
            {/* faq's */}
            <div className="mt-10">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        How do I purchase and download eBooks from your website?
                    </div>
                    <div className="collapse-content">
                        <p>Purchasing and downloading eBooks from our website is simple. Browse our collection, select the eBook(s) you're interested in, and add them to your cart. Proceed to checkout, where you'll provide payment information. After completing your purchase, you'll receive a download link or instructions to access your eBook immediately.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Do you offer any DRM (Digital Rights Management) protection on your eBooks?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, to protect the intellectual property of authors and publishers, some of our eBooks may be encrypted with DRM. This may restrict certain actions such as copying, printing, or sharing the eBook. We ensure that DRM is implemented in a way that balances copyright protection with user convenience.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can I read your eBooks on multiple devices?
                    </div>
                    <div className="collapse-content">
                        <p>Absolutely! Once you've purchased an eBook from our website, you can download and access it on multiple devices associated with your account. Whether you prefer reading on your e-reader, smartphone, tablet, or computer, our eBooks are accessible across various platforms for your convenience.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        In what formats are your eBooks available?
                    </div>
                    <div className="collapse-content">
                        <p>Our eBooks are typically available in popular formats such as EPUB and PDF, compatible with most e-readers and devices including Kindle, Nook, iPad, and Android tablets. Some titles may also be available in additional formats, depending on the publisher's specifications.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;