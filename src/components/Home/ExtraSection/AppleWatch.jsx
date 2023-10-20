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
                    <div className="h-screen -mb-72 md:mb-20 flex justify-center md:items-center" data-aos="fade-up">
                        <div className="font-poppins text-white text-center">
                            <div className="pt-10 flex justify-center items-center gap-1 md:bg-gray-700 md:px-5 md:py-3 md:pt-3 mb-2 rounded-md cursor-pointer md:hover:bg-gray-800" data-aos="fade-up">
                            <AiFillApple className="text-2xl md:text-5xl "></AiFillApple>
                            <h2 className="md:text-4xl md:font-semibold text-gray-200">APPLE WATCH</h2>
                            </div>
                            <p className="md:text-2xl text-orange-500 cursor-pointer hover:underline" data-aos="fade-up">ULTRA</p>
                            <p className="md:text-base text-sm text-gray-200 cursor-pointer" data-aos="fade-up">Adventurous journey awaits</p>
                            <p className="md:text-base text-sm text-gray-200 cursor-pointer" data-aos="fade-up">Releases soon...</p>
                            <div className="mt-3" data-aos="fade-up">
                                <button className="md:px-3 md:py-2 md:bg-sky-600 md:hover:bg-sky-700 text-gray-100 rounded-md text-xs underline md:no-underline md:text-base">Learn more</button>
                                <button className="md:px-3 md:py-2 md:bg-red-600 md:hover:bg-red-700 text-gray-100 md:ml-8 ml-3 text-xs underline md:no-underline rounded-md md:text-base">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppleWatch;