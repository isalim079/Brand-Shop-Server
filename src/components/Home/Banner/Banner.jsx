import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Banner = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className="md:mb-[630px] mb-[150px]">
            <div className="relative">
                <img className="bg-cover md:h-screen w-full absolute brightness-50 md:brightness-100 -z-50" src="https://i.ibb.co/cbybc4V/banner3-01-01.jpg" alt="" />
                <div className="text-white relative md:text-right text-center  md:max-w-screen-xl md:mx-auto font-poppins uppercase md:top-72 top-10 ">
                    <div className="md:flex md:justify-end text-gray-300">
                    <h2 className="md:text-6xl font-bold md:text-right" data-aos="fade-up">
                        <p className="text-red-400 hover:text-red-500 cursor-pointer">DISCOVER</p>
                        <p> the Latest in Tech</p>
                    </h2>
                    </div>
                    <p data-aos="fade-up" className=" text-gray-100 text-sm md:text-base">Unleash Innovation with Our Cutting-Edge Gadgets and Electronics</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;