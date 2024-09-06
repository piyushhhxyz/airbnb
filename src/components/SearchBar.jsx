import React from 'react';

function SearchBar() {
  return (
    <div className="flex justify-center mt-4">
      <div className="flex items-center border rounded-full shadow-md">
        <div className="px-4 py-2 border-r">
          <div className="font-semibold">Where</div>
          <input type="text" placeholder="Search destinations" className="outline-none" />
        </div>
        <div className="px-4 py-2 border-r">
          <div className="font-semibold">Check in</div>
          <div className="text-gray-400">Add dates</div>
        </div>
        <div className="px-4 py-2 border-r">
          <div className="font-semibold">Check out</div>
          <div className="text-gray-400">Add dates</div>
        </div>
        <div className="px-4 py-2">
          <div className="font-semibold">Who</div>
          <div className="text-gray-400">Add guests</div>
        </div>
        <button className="bg-airbnb-red text-white p-2 rounded-full mx-2">
          🔍
        </button>
      </div>
    </div>
  );
}

export default SearchBar;