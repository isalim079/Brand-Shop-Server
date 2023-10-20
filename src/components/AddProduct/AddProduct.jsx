import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
    const [brand, setBrand] = useState();
    const [rating, setRating] = useState();

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const bannerImage = form.bannerImage.value;
        const productType = form.productType.value;
        const price = form.price.value;
        const description = form.description.value;
        const productDetails = {
            name,
            image,
            productType,
            price,
            description,
            brand,
            rating,
            bannerImage,
        };

        fetch("https://assignment-10-brand-shop-server-hcr1i0t18-i-salim079.vercel.app/brands", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(productDetails),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    toast.success("You have successfully added your product", {
                        position: "top-center",
                    });
                }
                form.reset();
            });
    };
    return (
        <div className="font-poppins overflow-hidden">
            <h2 className="text-center md:text-3xl text-2xl font-bold underline mt-10">Add Your Product</h2>
            <form onSubmit={handleAddProduct}>
                <div className=" max-w-screen-xl drop-shadow-xl mx-auto items-center justify-center mt-16 bg-[#F4F3F0] p-10 grid md:grid-cols-2 gap-x-14">
                    {/* Field -1 -------------------------------- */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold">
                                Enter product name
                            </span>
                        </label>
                        <label className="input-group">
                            <input
                                name="name"
                                type="text"
                                placeholder="Product name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>

                    {/* Field -2 -------------------------------- */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold">
                                {" "}
                                Enter product image URL
                            </span>
                        </label>
                        <label className="input-group">
                            <input
                                name="image"
                                type="text"
                                placeholder="Product image URL"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold">
                                {" "}
                                Enter advertisement banner image URL
                            </span>
                        </label>
                        <label className="input-group">
                            <input
                                name="bannerImage"
                                type="text"
                                placeholder="Advertisement banner image URL"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>

                    {/* Field -3 -------------------------------- */}
                    <div className="">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">
                                Select product brand
                            </span>
                        </label>
                        <div className=" grid md:grid-cols-3 gap-x-28">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input
                                        onChange={(e) =>
                                            setBrand(e.target.value)
                                        }
                                        type="radio"
                                        name="brand"
                                        value="apple"
                                        className="radio radio-sm checked:bg-blue-500 "
                                    />
                                    <span className="label-text text-base">
                                        Apple
                                    </span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input
                                        onChange={(e) =>
                                            setBrand(e.target.value)
                                        }
                                        type="radio"
                                        name="brand"
                                        value="samsung"
                                        className="radio radio-sm checked:bg-blue-500"
                                    />
                                    <span className="label-text text-base">
                                        Samsung
                                    </span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input
                                        onChange={(e) =>
                                            setBrand(e.target.value)
                                        }
                                        type="radio"
                                        name="brand"
                                        value="xiaomi"
                                        className="radio radio-sm checked:bg-blue-500"
                                    />
                                    <span className="label-text text-base">
                                        Xiaomi
                                    </span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input
                                        onChange={(e) =>
                                            setBrand(e.target.value)
                                        }
                                        type="radio"
                                        name="brand"
                                        value="google"
                                        className="radio radio-sm checked:bg-blue-500"
                                    />
                                    <span className="label-text text-base">
                                        Google
                                    </span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input
                                        onChange={(e) =>
                                            setBrand(e.target.value)
                                        }
                                        type="radio"
                                        name="brand"
                                        value="microsoft"
                                        className="radio radio-sm checked:bg-blue-500"
                                    />
                                    <span className="label-text text-base">
                                        Microsoft
                                    </span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input
                                        onChange={(e) =>
                                            setBrand(e.target.value)
                                        }
                                        type="radio"
                                        name="brand"
                                        value="sony"
                                        className="radio radio-sm checked:bg-blue-500"
                                    />
                                    <span className="label-text text-base">
                                        Sony
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Field -4 -------------------------------- */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold">
                                Product type
                            </span>
                        </label>
                        <label className="input-group">
                            <input
                                name="productType"
                                type="text"
                                placeholder="laptop, mobile, earphone, headphone, etc..."
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>

                    {/* Field -5 -------------------------------- */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold">
                                Product price
                            </span>
                        </label>
                        <label className="input-group">
                            <input
                                name="price"
                                type="number"
                                placeholder="price"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>

                    {/* Field -6 -------------------------------- */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold">
                                Short description
                            </span>
                        </label>
                        <label className="input-group">
                            <input
                                name="description"
                                type="text"
                                placeholder="Short description about product"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>

                    {/* Field -7 -------------------------------- */}
                    <div className="form-control col-span-full">
                        <label className="label">
                            <span className="label-text text-lg font-bold">
                                Rating
                            </span>
                        </label>
                        <div className="rating">
                            <input
                                onChange={(e) => setRating(e.target.value)}
                                type="radio"
                                name="rating"
                                value="1 star"
                                className="mask mask-star-2 bg-red-500"
                            />
                            <input
                                onChange={(e) => setRating(e.target.value)}
                                type="radio"
                                name="rating"
                                value="2 star"
                                className="mask mask-star-2 bg-red-500"
                            />
                            <input
                                onChange={(e) => setRating(e.target.value)}
                                type="radio"
                                name="rating"
                                value="3 star"
                                className="mask mask-star-2 bg-red-500"
                            />
                            <input
                                onChange={(e) => setRating(e.target.value)}
                                type="radio"
                                name="rating"
                                value="4 star"
                                className="mask mask-star-2 bg-red-500"
                            />
                            <input
                                onChange={(e) => setRating(e.target.value)}
                                type="radio"
                                name="rating"
                                value="5 star"
                                className="mask mask-star-2 bg-red-500"
                            />
                        </div>
                    </div>
                    <div className="col-span-full">
                        <button className="bg-gray-700 text-white text-lg py-3  w-full mt-10">
                            Add Product
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddProduct;
