import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
    const { brands } = useParams();
    const productDetails = useLoaderData();
    // console.log(productDetails);

    const findCards = productDetails.find(
        (productDetail) => productDetail._id === brands
    );

    // eslint-disable-next-line no-unused-vars
    const { name, image, productType, price, description, brand, rating } =
        findCards;

    const glassCss = {
        background: "rgba( 255, 255, 255, 0.2 )",
        boxShadow: "0 4px 30px  rgba( 0, 0, 0, 0 )",
        backdropFilter: "blur( 5px )",
        "-webkit-backdrop-filter": "blur( 5px )",
        "border-radius": "10px",
        border: "1px solid rgba( 255, 255, 255, 0.3 )",
    };

    const handleAddToCart = () => {
        fetch("http://localhost:4001/brandShopCarts", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                const productExists = data.some(
                    (product) => product._id === findCards._id
                );

                if (productExists) {
                    toast.error("Product already in the cart", {
                        position: "top-center",
                    });
                } else {
                    fetch("http://localhost:4001/brandShopCarts", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(findCards),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            if (data.insertedId) {
                                toast.success(
                                    "Successfully added to the cart",
                                    {
                                        position: "top-center",
                                    }
                                );
                            }
                        });
                }
            });
    };

    return (
        <div className=" h-screen flex items-center bg-[url('https://i.ibb.co/ysdL8Nv/card-Details-BG.jpg')]">
            <div
                className="card lg:card-side bg-base-100 shadow-xl max-w-screen-xl mx-auto font-poppins text-white"
                style={glassCss}
            >
                <figure>
                    <img src={image} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title underline">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-between">
                        <p className="text-2xl bg-orange-600 px-4 py-2 max-w-[120px] text-center rounded-md font-semibold">
                            ${price}
                        </p>
                        <button
                            onClick={handleAddToCart}
                            className="px-4 py-2 rounded-md bg-orange-600"
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ProductDetails;
