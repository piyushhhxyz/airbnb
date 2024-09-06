import React, { useState } from 'react';
import { FaSearch, FaGlobe, FaBars, FaUserCircle } from 'react-icons/fa';
// import Calendar from './Calendar';

function Header({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [guests, setGuests] = useState('');

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="/images/airbnb.png" alt="Airbnb" className="h-8 w-auto" />
            <span className="text-airbnb-red font-bold text-2xl ml-2">airbnb</span>
          </div>
          
          <form onSubmit={handleSearch} className="flex items-center bg-white rounded-full shadow-md">
            <div className="px-4 py-2 border-r">
              <div className="font-semibold text-xs">Where</div>
              <input
                type="text"
                className="outline-none text-sm w-full"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <div className="px-4 py-2 border-r relative">
              <div className="font-semibold text-xs">Date</div>
              <input
                type="text"
                className="outline-none text-sm cursor-pointer"
                value={selectedDate ? selectedDate.toDateString() : 'Add dates'}
                onClick={() => setShowCalendar(!showCalendar)}
                readOnly
              />
              {showCalendar && (
                <div className="absolute top-full left-0 mt-2">
                  {/* <Calendar onDateSelect={handleDateSelect} /> */}
                </div>
              )}
            </div>
            <div className="px-4 py-2">
              <div className="font-semibold text-xs">Who</div>
              <input
                type="text"
                className="outline-none text-sm w-full"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            <button type="submit" className="bg-airbnb-red text-white px-4 py-2 rounded-full mx-2 flex items-center">
              <FaSearch className="mr-2" />
              <span>Search</span>
            </button>
          </form>

          <div className="flex items-center space-x-4">
            <button className="font-semibold text-sm">
              Airbnb your home
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <FaGlobe className="text-xl" />
            </button>
            <div className="flex items-center space-x-2 border rounded-full p-2 hover:shadow-md cursor-pointer">
              <FaBars className="text-gray-500" />
              <FaUserCircle className="text-gray-500 text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;