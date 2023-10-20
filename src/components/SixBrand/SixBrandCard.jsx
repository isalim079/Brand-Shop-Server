/* eslint-disable react/prop-types */

import { Link, useParams } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SixBrandCard = ({ brandProduct }) => {
    const { brands } = useParams();
    // console.log(brands);

    const { name, brand, image, productType, price, rating, _id } =
        brandProduct;

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
                                        <div className="md:flex items-center justify-between mb-5">
                                            <div>
                                                <h2 className="md:card-title">
                                                    {name}
                                                    <div className="ml-3 md:ml-0 badge bg-green-500 text-white">
                                                        {brand}
                                                    </div>
                                                </h2>
                                            </div>

                                            <div>
                                                <p className="md:text-xl mt-3 md:mt-0">
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
                                                <Link
                                                    to={`/productDetails/${_id}`}
                                                >
                                                    <button className="md:px-4 md:py-2 md:bg-orange-500 md:rounded-md md:text-white text-black underline md:no-underline mr-5 md:hover:bg-orange-600">
                                                        Details
                                                    </button>
                                                </Link>
                                                <Link
                                                    to={`/updateProducts/${_id}`}
                                                >
                                                    <button className="md:px-4 md:py-2 md:bg-orange-500 md:rounded-md md:text-white text-black underline md:no-underline mr-5 md:hover:bg-orange-600">
                                                        Update
                                                    </button>
                                                </Link>
                                            </div>
                                            <div>
                                                <div className="badge badge-outline mr-5">
                                                    <p className="md:font-semibold ">
                                                        {" "}
                                                        {productType}
                                                    </p>
                                                </div>
                                                <div className="badge badge-outline">
                                                    <p className="md:font-bold md:text-xl">
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
                    ""
                )}
            </div>
        </div>
    );
};

export default SixBrandCard;
