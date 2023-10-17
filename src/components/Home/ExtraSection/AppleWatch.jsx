import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AiFillApple } from "react-icons/ai";

const AppleWatch = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    return (
        <div>
            <div>
                <div className="relative">
                    <img className="bg-cover md:h-screen md:w-full absolute brightness-50 md:brightness-100 -z-50" src="https://i.ibb.co/zVZ0hgG/apple-Watch.jpg" data-aos="fade-left" alt="" />
                    <div className="h-screen mb-20 flex justify-center items-center" data-aos="fade-up">
                        <div className="font-poppins text-white text-center">
                            <div className="flex justify-center items-center gap-1 bg-gray-700 px-5 py-3 mb-2 rounded-md cursor-pointer hover:bg-gray-800" data-aos="fade-up">
                            <AiFillApple className="text-2xl md:text-5xl "></AiFillApple>
                            <h2 className="md:text-4xl md:font-semibold text-gray-200">APPLE WATCH</h2>
                            </div>
                            <p className="md:text-2xl text-orange-500 cursor-pointer hover:underline">ULTRA</p>
                            <p className="md:text-base text-gray-200 cursor-pointer">Adventurous journey awaits</p>
                            <p className="md:text-base text-gray-200 cursor-pointer">Releases soon...</p>
                            <div className="mt-3" data-aos="fade-up">
                                <button className="px-3 py-2 bg-sky-500 hover:bg-sky-600 text-gray-100 rounded-md">Learn more</button>
                                <button className="px-3 py-2 bg-red-500 hover:bg-red-600 text-gray-100 md:ml-8 rounded-md">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppleWatch;