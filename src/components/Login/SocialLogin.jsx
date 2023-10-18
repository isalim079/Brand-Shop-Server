import { useContext } from "react";

import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Router/AuthProvider";

const SocialLogin = () => {
    const { handleGoogleLogin, handleGithubLogin } = useContext(AuthContext);

    const glassCss = {
        background: "rgba( 255, 255, 255, 0.25 )",
        // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        "-webkit-backdrop-filter": "blur( 4px )",
        "border-radius": "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
    };

    const location = useLocation();

    const navigate = useNavigate();

    const handleSocialLogin = (media) => {
        media()
            .then((res) => {
                console.log(res);
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                console.log(error.code);
            });
    };

    return (
        <>
            <div className="divider text-white">continue with</div>
            <div className="flex justify-center -mt-4">
                <div>
                    <button
                        style={glassCss}
                        onClick={() => handleSocialLogin(handleGoogleLogin)}
                        className=" rounded-md mt-5 px-5 justify-center py-2 border border-white text-black flex items-center gap-2 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <FcGoogle className="text-xl"></FcGoogle>
                        Google
                    </button>
                </div>
                <div>
                    <button
                        style={glassCss}
                        onClick={() => handleSocialLogin(handleGithubLogin)}
                        className=" rounded-md mt-5 px-5 justify-center py-2 border border-white text-black flex items-center gap-2 ml-16 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        {" "}
                        <AiFillGithub className="text-xl"></AiFillGithub>
                        Github
                    </button>
                </div>
            </div>
        </>
    );
};

export default SocialLogin;
