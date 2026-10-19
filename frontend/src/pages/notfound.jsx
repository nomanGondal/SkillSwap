
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-lg w-full text-center">
        <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
          Error 404
        </p>

        <h1 className="mt-4 text-7xl sm:text-8xl font-extrabold text-gray-900">
          404
        </h1>

        <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-800">
          Page not found
        </h2>

        <p className="mt-4 text-gray-500 leading-7">
          Sorry, we couldn't find the page you're looking for.
          It may have been moved, deleted, or the URL might be incorrect.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg
            bg-blue-600 px-6 py-3 font-semibold text-white
            transition hover:bg-blue-700 focus:outline-none
            focus:ring-4 focus:ring-blue-200"
          >
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center rounded-lg
            border border-gray-300 bg-white px-6 py-3
            font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Go Back
          </button>
        </div>

        <p className="mt-10 text-sm text-gray-400">
          If you believe this is an error, please try again later.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
