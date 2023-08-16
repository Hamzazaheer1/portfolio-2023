import { useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <div className="relative">
      <div className="bg-white w-full absolute z-20">
        <nav className="px-5 py-2 flex justify-between text-gray-800 text-3xl font-bold">
          <h1>Hamza</h1>
          {!toggleNav && <RxHamburgerMenu onClick={() => setToggleNav(true)} />}
          {toggleNav && <RxCross1 onClick={() => setToggleNav(false)} />}
          {/* <ul>
    <li>Home</li>
  </ul> */}
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
                onClick={() =>
                  window.open('https://github.com/Hamzazaheer1', '_blank')
                }
              />
              <AiFillLinkedin
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
