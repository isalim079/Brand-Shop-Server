import { useLoaderData, useParams } from "react-router-dom";
import SixBrandCard from "./SixBrandCard";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SixBrand = () => {
    const brandProducts = useLoaderData();

    const { brands } = useParams();

    const brandFilter = brandProducts.filter(
        (brandProduct) => brandProduct.brand === brands
    );
    // console.log(brandFilter);

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    return (
        <div>
            <div>
                {brandFilter[0] ? (
                    <>
                        <Carousel>
                            <div>
                                <img src={brandFilter[0]?.bannerImage} />
                                <p className="legend cursor-pointer">
                                    Make your dreams come true
                                </p>
                            </div>
                            <div>
                                <img src={brandFilter[1]?.bannerImage} />
                                <p className="legend cursor-pointer">
                                    Choose your own product
                                </p>
                            </div>
                            <div>
                                <img src={brandFilter[2]?.bannerImage} />
                                <p className="legend cursor-pointer">
                                    Have fun with your desire product
                                </p>
                            </div>
                        </Carousel>
                    </>
                ) : (
                    <p
                        className="md:text-5xl font-poppins text-center mt-10 border-4 border-sky-700 py-5"
                        data-aos="fade-up"
                    >
                        Product will be available soon...
                    </p>
                )}
            </div>
            <div>
                <h2
                    className="md:text-5xl text-2xl font-bold font-poppins uppercase underline text-center text-gray-700 cursor-pointer md:mt-20"
                    data-aos="flip-right"
                >
                    Product List
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 max-w-screen-xl mx-auto md:mt-16 p-5 md:p-0 gap-5">
                {brandProducts.map((brandProduct) => (
                    <SixBrandCard
                        brandProduct={brandProduct}
                        key={brandProduct._id}
                    ></SixBrandCard>
                ))}
            </div>
        </div>
    );
};

export default SixBrand;
