/* eslint-disable no-useless-escape */
import { useContext } from "react";
import { Link } from "react-router-dom";

import { updateProfile } from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthContext } from "../Router/AuthProvider";
import SocialLogin from "../Login/SocialLogin";

const Register = () => {
    const { registerWithEmailPass } = useContext(AuthContext);

    const glassCss = {
        background: "rgba( 255, 255, 255, 0.25 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        "-webkit-backdrop-filter": "blur( 4px )",
        "border-radius": "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const image = form.get("image");
        const email = form.get("email");
        const password = form.get("password");
        // console.log(image, name, email, password);

        const brandShopUsers = { image, name, email, password };

        const uppercaseRegex = /[A-Z]/;
        const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

        if (!specialCharRegex.test(password)) {
            toast.error("Password should have one special character included", {
                position: "top-center",
            });
            return;
        }

        if (!uppercaseRegex.test(password)) {
            toast.error("Password should have one capital character included", {
                position: "top-center",
            });
            return;
        }

        if (password.length < 0) {
            toast.error("Password should be 6 character or more", {
                position: "top-center",
            });
            return;
        }

        registerWithEmailPass(email, password)
            .then((result) => {
                console.log(result.user);

                toast.success("You have successfully created your account");

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: image,
                });
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });

        fetch("https://assignment-10-brand-shop-server-hcr1i0t18-i-salim079.vercel.app/brandsShopUsers", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(brandShopUsers),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    toast.success("Successfully added user to database");
                }
                form.reset();
            });
    };

    return (
        <div className="bg-[url('https://i.ibb.co/mCMqy9G/register-Bg.jpg')] py-16">
            <h2 className="md:w-3/4 lg:w-1/2 mx-auto text-3xl text-center my-10 px-4 py-3 bg-sky-700 hover:drop-shadow-lg cursor-pointer text-white " style={glassCss}>
                Please Register
            </h2>

            <form
                style={glassCss}
                onSubmit={handleRegister}
                className="md:w-3/4 lg:w-1/2 mx-auto bg-sky-400 px-7 py-4 drop-shadow-lg mb-10"
            >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name..."
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Photo Url</span>
                    </label>
                    <input
                        type="text"
                        name="image"
                        placeholder="Enter your image url..."
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email..."
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password..."
                        className="input input-bordered"
                        required
                    />
                    <label className="label">
                        <a href="#" className="label-text-alt text-white link link-hover">
                            Forgot password?
                        </a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button style={glassCss} className="px-4 py-3 text-lg w-full hover:bg-sky-700 text-white rounded-md">
                        REGISTER
                    </button>
                </div>
                <p className="text-center mt-7 text-white">
                    Already have an account?{" "}
                    <Link className="ml-5 underline text-white" to="/login">
                        Login Now!!
                    </Link>
                </p>
                <SocialLogin></SocialLogin>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Register;
