import { useState, useEffect } from 'react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative">
      {/* desktop nav */}
      <div className="bg-white w-full absolute z-20">
        <nav className="h-[70px] px-5 py-2 flex justify-between items-center">
          <h1 className="text-gray-800 text-3xl font-bold">Hamza</h1>
          {isMobile ? (
            <div>
              {!toggleNav ? (
                <RxHamburgerMenu
                  onClick={() => setToggleNav(true)}
                  className="cursor-pointer"
                />
              ) : (
                <RxCross1
                  onClick={() => setToggleNav(false)}
                  className="cursor-pointer"
                />
              )}
            </div>
          ) : (
            <ul className="flex text-gray-800 font-semibold">
              <li className="px-6 py-2 hover:text-white hover:bg-gray-800 hover:py-2 hover-slide">
                <Link to="/">Home</Link>
              </li>
              <li className="px-6 py-2 hover:text-white hover:bg-gray-800 hover:py-2 hover-slide">
                <Link to="/about">About</Link>
              </li>
              <li className="px-6 py-2 hover:text-white hover:bg-gray-800 hover:py-2 hover-slide">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="px-6 py-2 hover:text-white hover:bg-gray-800 hover:py-2 hover-slide">
                <Link to="/services">Service</Link>
              </li>
              <li className="px-6 py-2 hover:text-white hover:bg-gray-800 hover:py-2 hover-slide">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
      {/* mobile nav */}
      {toggleNav && (
        <nav className="bg-gray-800 h-screen w-screen text-white absolute z-10 py-16">
          <div className="flex flex-col items-center gap-8 px-6 mt-10">
            <img
              src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="profile"
              className="rounded-full w-32 h-32"
            />
            <ul className="text-xl text-center font-semibold flex flex-col gap-8">
              <li onClick={() => setToggleNav(false)}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => setToggleNav(false)}>
                <Link to="/about">About</Link>
              </li>
              <li onClick={() => setToggleNav(false)}>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li onClick={() => setToggleNav(false)}>
                <Link to="/services">Service</Link>
              </li>
              <li onClick={() => setToggleNav(false)}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="flex gap-2 text-4xl mt-2">
              <AiFillGithub
                className="cursor-pointer"
                onClick={() =>
                  window.open('https://github.com/Hamzazaheer1', '_blank')
                }
              />
              <AiFillLinkedin
                className="cursor-pointer"
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/hamzazaheer1/',
                    '_blank'
                  )
                }
              />
            </div>
            <p className="">Copyright © 2023</p>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
