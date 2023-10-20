const Footer = () => {
    return (
        <div>
            <div className=" bg-neutral ">
                <footer className="footer py-20 text-neutral-content max-w-screen-xl mx-auto flex justify-around">
                   
                        <nav>
                            <header className="footer-title">Services</header>
                            <a className="link link-hover">Products</a>
                            <a className="link link-hover">Technology</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Gadget</a>
                        </nav>
                        <nav>
                            <header className="footer-title">Company</header>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav >
                            <header className="footer-title">Legal</header>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </nav>
                    
                </footer>
            </div>
        </div>
    );
};

export default Footer;
