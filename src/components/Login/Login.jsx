/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthContext } from "../Router/AuthProvider";
import SocialLogin from "./SocialLogin";

const Login = () => {
    const { loginWithEmailPass } = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate();

    const glassCss = {
        background: "rgba( 255, 255, 255, 0.25 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        "-webkit-backdrop-filter": "blur( 4px )",
        "border-radius": "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
    };
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");

        loginWithEmailPass(email, password)
            .then((result) => {
                console.log(result.user);

                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);

                if (error.code === "auth/invalid-login-credentials") {
                    toast.error("Email and password doesn't match", {
                        position: "top-center",
                    });
                }
            });
    };

    return (
        <div className="bg-[url('https://i.ibb.co/ggM0nWT/loginBg.jpg')] py-16">
            <h2 className="md:w-3/4 lg:w-1/2 mx-auto px-4 py-3 bg-yellow-900 hover:drop-shadow-lg cursor-pointer text-white text-3xl text-center my-10 shadow-lg">
                Please Login
            </h2>

            <form
                style={glassCss}
                onSubmit={handleLogin}
                className="md:w-3/4 lg:w-1/2 mx-auto bg-red-100 px-7 py-4 drop-shadow-lg"
            >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
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
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password..."
                        className="input input-bordered"
                        required
                    />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                            Forgot password?
                        </a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="px-4 py-3 text-lg w-full bg-yellow-900 text-white rounded-md">
                        LOGIN
                    </button>
                </div>
                <p className="text-center mt-7">
                    Don't have an account?{" "}
                    <Link className="underline text-red-500" to="/register">
                        Register Now!!
                    </Link>
                </p>
                <SocialLogin></SocialLogin>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;
