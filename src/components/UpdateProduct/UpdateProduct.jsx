import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProduct = () => {
    const loadProducts = useLoaderData();

    console.log(loadProducts._id);

    const [brand, setBrand] = useState();
    const [rating, setRating] = useState();

    useEffect(() => {
        if (loadProducts) {
            setBrand(loadProducts.brand);
        }
    }, [loadProducts]);

    const handleUpdateProduct = (e) => {
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

        fetch(`https://assignment-10-brand-shop-server-hcr1i0t18-i-salim079.vercel.app/brands/${loadProducts._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(productDetails),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success(
                        "You have successfully Updated your product",
                        {
                            position: "top-center",
                        }
                    );
                }
            });
    };

    return (
        <div className="font-poppins overflow-hidden">
            <h2 className="text-center md:text-3xl text-2xl font-bold underline mt-10">Update your product</h2>
            <form onSubmit={handleUpdateProduct}>
                <div className=" max-w-screen-xl drop-shadow-xl mx-auto items-center justify-center mt-16 bg-[#F4F3F0] p-10 grid grid-cols-1 md:grid-cols-2 gap-x-14">
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
                                defaultValue={loadProducts?.name}
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
                                defaultValue={loadProducts?.image}
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
                                defaultValue={loadProducts?.bannerImage}
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
                        <div className=" grid grid-cols-1 md:grid-cols-3 md:gap-x-28">
                            {[
                                "apple",
                                "samsung",
                                "xiaomi",
                                "google",
                                "microsoft",
                                "sony",
                            ].map((option) => (
                                <div className="form-control" key={option}>
                                    <label className="label cursor-pointer">
                                        <input
                                            onChange={(e) =>
                                                setBrand(e.target.value)
                                            }
                                            type="radio"
                                            name="brand"
                                            value={option}
                                            className="radio  radio-sm checked:bg-blue-500"
                                            defaultChecked={
                                                loadProducts?.brand === option
                                            }
                                        />
                                        <span className="label-text text-base">
                                            {option.charAt(0).toUpperCase() +
                                                option.slice(1)}
                                        </span>
                                    </label>
                                </div>
                            ))}
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
                                defaultValue={loadProducts?.productType}
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
                                defaultValue={loadProducts?.price}
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
                                defaultValue={loadProducts?.description}
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
                            Update Product
                        </button>
                    </div>
                </div>
            </form>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateProduct;
