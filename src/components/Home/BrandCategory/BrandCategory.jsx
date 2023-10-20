/* eslint-disable react/prop-types */
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const BrandCategory = ({ brandCategory }) => {
    const { brands, name, image } = brandCategory;

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    return (
        <div>
            <Link to={`/sixBrands/${brands}`}>
                <div
                    className="card card-compact bg-base-100 shadow-xl font-poppins uppercase cursor-pointer"
                    data-aos="flip-right"
                >
                    <figure>
                        <img className="md:h-72" src={image} alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title hover:pl-32 hover:py-3 hover:bg-orange-600 hover:text-white hover:cursor-pointer hover:duration-500 hover:rounded-md">
                            {name}
                        </h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BrandCategory;
