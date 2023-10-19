/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SixBrandCard = ({ brandProduct }) => {
    const { brands } = useParams();
    // console.log(brands);

    const { name, brand, image, productType, price, rating } = brandProduct;

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    return (
        <div>
            <div>
                {brand === brands ? (
                    <>
                        <div>
                            <div>
                                <div
                                    className="card bg-base-100 shadow-xl font-poppins"
                                    data-aos="flip-up"
                                >
                                    <figure>
                                        <img
                                            className="md:h-[450px] md:w-full"
                                            src={image}
                                            alt=""
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <div className="flex items-center justify-between mb-5">
                                            <div>
                                                <h2 className="card-title">
                                                    {name}
                                                    <div className="badge bg-green-500 text-white">
                                                        {brand}
                                                    </div>
                                                </h2>
                                            </div>

                                            <div>
                                                <p className="text-xl">
                                                    <span className="font-bold">
                                                        Rating:
                                                    </span>{" "}
                                                    <span className="underline ml-6">
                                                        {" "}
                                                        {rating}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <p></p>
                                        <div className="card-actions justify-between items-center">
                                            <div>
                                                <button className="px-4 py-2 bg-orange-500 rounded-md text-white mr-5 hover:bg-orange-600">
                                                    Details
                                                </button>
                                                <button className="px-4 py-2 bg-orange-500 rounded-md text-white hover:bg-orange-600">
                                                    Update
                                                </button>
                                            </div>
                                            <div>
                                                <div className="badge badge-outline mr-5">
                                                    <p className="font-semibold ">
                                                        {" "}
                                                        {productType}
                                                    </p>
                                                </div>
                                                <div className="badge badge-outline">
                                                    <p className="font-bold text-xl">
                                                        ${price}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <p
                        className="md:text-3xl font-poppins text-center mt-10 border-4 border-red-700 py-5"
                        data-aos="fade-up"
                    >
                        Product will be available soon...
                    </p>
                )}
            </div>
        </div>
    );
};

export default SixBrandCard;
