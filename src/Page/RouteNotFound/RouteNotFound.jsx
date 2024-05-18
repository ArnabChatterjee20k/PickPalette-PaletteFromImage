import React from 'react';
import { Link } from 'react-router-dom';
import { RxHome } from 'react-icons/rx';
import errorImg from '../../../src/assets/pageNotFound-1.png';

function RouteNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-w-[301px] sm:w-4/5 m-auto pt-4 pb-10 ">
      <img src={errorImg} className="w-2/5 md:w-1/3  " alt="Error 404" />
      <div className="w-5/6 m-auto text-center font-mono pt-4 px-5">
        <div className="mt-5">
          <p className="text-lg sm:text-lg md:text-xl lg:text-2xl">
          Lost in the maze of colors? Let&rsquo;s paint your way back to homepage!
          </p>
          <div className="pt-10">
            <Link
              to="/"
              className="inline-block shadow-inset border-2 border-white hover:border-gray-100 hover:bg-green-500 bg-green-600 text-white font-extrabold rounded px-2 py-1"
            >
              <RxHome className="inline me-1.5" />
              Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RouteNotFound;
