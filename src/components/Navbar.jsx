import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState('#hero');

  return (
    <nav className="fixed z-10 w-full bg-white">
      <div className="flex items-center justify-between w-full p-4 mx-auto max-w-7xl">
        <img
          src="https://generative-ai.bluetickconsultants.com/images/bluetick-consultants.png"
          alt="Bluetick Consultants"
          className="h-8"
        />
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl md:hidden"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
        <ul className="items-center hidden space-x-4 uppercase md:flex">
          <li>
            <Link
              onClick={() => {
                setActive('#hero');
              }}
              to="/#hero"
              className={active === '#hero' ? 'border-b border-blue-500' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setActive('#products');
              }}
              to="/#products"
              className={
                active === '#products' ? 'border-b border-blue-500' : ''
              }
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setActive('#blogs');
              }}
              to="/#blogs"
              className={active === '#blogs' ? 'border-b border-blue-500' : ''}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setActive('#contact');
              }}
              to="/#contact"
              className={
                active === '#contact' ? 'border-b border-blue-500' : ''
              }
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div
          id="navbar-collapse-with-animation"
          className={`${
            showMenu ? 'block' : 'hidden'
          } absolute top-0 inset-x-0 p-2 transition transform duration-300 origin-top-right md:hidden bg-white shadow-lg rounded-lg m-4 mt-16`}
        >
          <ul className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <li>
              <Link
                onClick={() => {
                  setShowMenu(false);
                }}
                to="/#hero"
                className={active === '#hero' ? 'border-b border-blue-500' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setShowMenu(false);
                }}
                to="/#products"
                className={
                  active === '#products' ? 'border-b border-blue-500' : ''
                }
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setShowMenu(false);
                }}
                to="/#blogs"
                className={
                  active === '#blogs' ? 'border-b border-blue-500' : ''
                }
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setShowMenu(false);
                }}
                to="/#contact"
                className={
                  active === '#contact' ? 'border-b border-blue-500' : ''
                }
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
