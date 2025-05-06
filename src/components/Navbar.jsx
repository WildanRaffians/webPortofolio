import { useEffect, useState } from "react"

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setScroll(true);
                setShow(false);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup: hapus event listener saat unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // <-- penting! array kosong

    // Sync dark mode class ke <html> tag
    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [darkMode]);


    let scrollActive = scroll ? "py-6 dark:bg-gray-900 bg-white shadow-lg" : "py-4";
    let menuActive = show ? "left-0" : "-left-full";

    return (
        <div className={`navbar fixed w-full transition-all ${scrollActive} md:px-20 px-5  z-50`}>
            <div className="container mx-auto px-4">
                <div className="navbar-box flex items-center justify-between">
                    <div className="logo">
                        <h1 className="sm:text-2xl text-xl font-bold dark:text-primary">raffians<span className="text-primary dark:text-white">.</span></h1>
                    </div>
                    <ul className={`flex lg:gap-12 md:static md:flex-row md:shadow-none 
                md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black 
                md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded 
                shadow-lg shadow-slate-700 bg-primary text-white transition-all`}>
                        <li className="flex items-center gap-3">
                            <i className="ri-home-2-line text-3xl md:hidden block" ></i>
                            <a href="#home" className="font-medium opacity-75 dark:text-white">
                                Home
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="ri-information-2-line text-3xl md:hidden block" ></i>
                            <a href="#about" className="font-medium opacity-75 dark:text-white">About</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="ri-settings-3-line text-3xl md:hidden block" ></i>
                            <a href="#experiences" className="font-medium opacity-75 dark:text-white">Experiences</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="ri-image-line text-3xl md:hidden block" ></i>
                            <a href="#proyek" className="font-medium opacity-75 dark:text-white">Projects</a>
                        </li>
                    </ul>
                    <div className="social flex items-center gap-2">
                        <i className="ri-menu-line text-3xl md:hidden block dark:text-white" onClick={handleClick}></i>
                        <a href="#social" className="bg-primary px-5 py-2 rounded-full text-white font-bold hover:bg-primaryDarker transition-all">Social</a>
                        <label className="inline-flex items-center relative">
                            <input
                                type="checkbox"
                                checked={darkMode}
                                onChange={() => setDarkMode(!darkMode)}
                                className="peer hidden"
                            />
                            <div className="relative w-[72px] h-[40px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[30px] after:h-[30px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px] after:left-[5px] active:after:w-[50px] peer-checked:after:left-[65px] peer-checked:after:translate-x-[-100%]  shadow-md duration-300 after:duration-300"></div>

                            <svg
                                height="0"
                                width="100"
                                viewBox="0 0 24 24"
                                data-name="Layer 1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-white peer-checked:opacity-60 absolute w-4 h-4 left-[13px]"
                            >
                                <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"></path>
                            </svg>

                            <svg
                                height="512"
                                width="512"
                                viewBox="0 0 24 24"
                                data-name="Layer 1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-4 h-4 right-[13px]"
                            >
                                <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"></path>
                            </svg>
                        </label>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar