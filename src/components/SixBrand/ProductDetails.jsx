import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Router/AuthProvider";

const ProductDetails = () => {
    const {user} = useContext(AuthContext)
    const { brands } = useParams();
    const productDetails = useLoaderData();
    // console.log(productDetails);

    const findCards = productDetails.find(
        (productDetail) => productDetail._id === brands
    );

    // eslint-disable-next-line no-unused-vars
    const { name, image, productType, price, description, brand, rating, _id } =
        findCards;

        const productsData = {
            email: user.email,
            name: findCards.name,
            image: findCards.image,
            productType: findCards.productType,
            price: findCards.price,
            description: findCards.description,
            brand: findCards.brand,
            rating: findCards.rating,
            
        }

    const glassCss = {
        background: "rgba( 255, 255, 255, 0.2 )",
        boxShadow: "0 4px 30px  rgba( 0, 0, 0, 0 )",
        backdropFilter: "blur( 5px )",
        "-webkit-backdrop-filter": "blur( 5px )",
        "border-radius": "10px",
        border: "1px solid rgba( 255, 255, 255, 0.3 )",
    };

    const handleAddToCart = () => {
        fetch("https://assignment-10-brand-shop-server-hcr1i0t18-i-salim079.vercel.app/brandShopCarts", {
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
                    fetch("https://assignment-10-brand-shop-server-hcr1i0t18-i-salim079.vercel.app/brandShopCarts", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(productsData),
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
        <div className=" md:h-screen md:flex items-center bg-[url('https://i.ibb.co/ysdL8Nv/card-Details-BG.jpg')]">
            <div
                className="card lg:card-side bg-base-100 shadow-xl max-w-screen-xl mx-auto font-poppins text-white p-4 md:p-0"
                style={glassCss}
            >
                <figure>
                    <img className="md:h-[420px]" src={image} alt="" />
                </figure>
                <div className="card-body md:w-[720px]">
                    <h2 className="card-title underline">{name}</h2>
                    <p className="text-sm md:text-base">{description}</p>
                    <div className="card-actions justify-between">
                        <p className="md:text-2xl underline md:no-underline md:bg-orange-600 md:px-4 md:py-2 md:max-w-[120px] text-center rounded-md md:font-semibold">
                            ${price}
                        </p>
                        <button
                            onClick={handleAddToCart}
                            className="md:px-4 md:py-2 rounded-md md:bg-orange-600 underline md:no-underline"
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
