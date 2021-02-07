const Hero = () => {
    return (
    <div className="border border-gray-200 md:flex md:flex-row">
        <div className="bg-gray-100 text-center md:w-1/3">
            <img className="mx-auto" alt="image" src="/assets/img_nextjs-101-cover.png" />
        </div>
        <div className="px-4 py-8 md:px-8 self-center md:w-2/3">
            <h2 className="font-bold text-2xl mb-3">What you'll learn</h2>
            <p>list item</p>
        </div>
    </div>
    );
};

export default Hero;