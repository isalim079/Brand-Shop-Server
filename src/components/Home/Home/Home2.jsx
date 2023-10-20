import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import BrandCategory from "../BrandCategory/BrandCategory";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Camera from "../ExtraSection/Camera";
import AppleWatch from "../ExtraSection/AppleWatch";


const Home2 = () => {
    const brandCategories = useLoaderData();

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className="overflow-hidden">
            <div>
                <Banner></Banner>
            </div>

            <div>
                <div>
                    <h2 data-aos="fade-up" className="font-poppins text-3xl md:text-5xl text-center md:my-12 font-semibold cursor-pointer text-orange-600"><span className="underline font-bold hover:text-orange-700 hover:duration-500 ">BRAND</span> NAMES</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 max-w-screen-xl mx-auto gap-5 md:gap-10 mb-20 p-3 md:p-0">
                    {brandCategories.map((brandCategory) => (
                        <BrandCategory
                            key={brandCategory.id}
                            brandCategory={brandCategory}
                        ></BrandCategory>
                    ))}
                </div>
            </div>
            <div>
                <Camera></Camera>
            </div>
            <AppleWatch></AppleWatch>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home2;
