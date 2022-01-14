import React from 'react';
import { Link } from 'react-router-dom';
// import Profile from './Profile';

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const setNav = () => {
    setNavbarOpen(!navbarOpen);
  };

  let navIcons;
  if (!navbarOpen) {
    navIcons = (<div className="navTransition" />);
  } else {
    navIcons = (
      <div className="navOpen text-lg lg:flex-grow lg:hidden">
        <Link to="/AndersonWeb/" className="font-mono block mt-4 lg:inline-block lg:mt-0 text-stone-800 hover:text-white mr-4">Profile</Link>
        <Link to="/AndersonWeb/projects" className="font-mono block mt-4 lg:inline-block lg:mt-0 text-stone-800 hover:text-white mr-4">Projects</Link>
        <Link to="/AndersonWeb/contact" className="font-mono block mt-4 lg:inline-block lg:mt-0 text-stone-800 hover:text-white mr-4">Contact</Link>
      </div>
    );
  }

  return (
    <nav className="flex z-10 sticky items-center justify-between flex-wrap top-0 p-5">
      <div className="block lg:hidden">
        <button type="button" onClick={setNav} className="flex items-center px-3 py-2 border rounded text-stone-800 border-stone-800 hover:text-white hover:border-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="hidden lg:block text-lg lg:flex-grow">
          <Link to="/AndersonWeb/" className="block mt-4 lg:inline-block lg:mt-0 text-stone-800 hover:text-white font-mono mr-4 text-2xl antialiased">Profile</Link>
          <Link to="/AndersonWeb/projects" className="block mt-4 lg:inline-block lg:mt-0 text-stone-800 hover:text-white font-mono mr-4 text-2xl antialiased">Projects</Link>
          <Link to="/AndersonWeb/contact" className="block mt-4 lg:inline-block lg:mt-0 text-stone-800 hover:text-white mr-4 font-mono text-2xl antialiased ">Contact</Link>
        </div>
      </div>
      {navIcons}
    </nav>
  );
}
