/* eslint-disable react/prop-types */
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BrandCategory = ({ brandCategory }) => {
    const { name, image } = brandCategory;

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl font-poppins uppercase cursor-pointer" data-aos="zoom-in-down">
                <figure>
                    <img
                        src={image}
                        alt=""
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title hover:pl-32 hover:py-3 hover:bg-orange-600 hover:text-white hover:cursor-pointer hover:duration-500 hover:rounded-md">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default BrandCategory;