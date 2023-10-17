import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Camera = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    return (
        <div>
            <div>
                <div className="relative font-poppins" data-aos="fade-right">
                    <img className="bg-cover md:h-screen md:w-full absolute brightness-50 md:brightness-100 -z-50" src="https://i.ibb.co/h1SJFrK/camera-1.jpg" alt="" />
                    <div>
                    <div className="md:h-screen mb-16 text-right max-w-screen-xl mx-auto flex flex-col justify-center items-end pt-7 md:p-0">
                        <div className="md:border-8 hover:bg-orange-950 hover:duration-500 hover:shadow-2xl hover:cursor-pointer border-orange-300 w-96 flex flex-col justify-center p-10" data-aos="fade-up">
                        <h2 className="md:text-8xl text-2xl font-bold md:font-black text-orange-300">SALES</h2>
                        <p className="text-white md:text-5xl text-xl font-bold">UP TO </p>
                        <p className="md:text-8xl font-black text-orange-300 font-orbitron">60%</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Camera;