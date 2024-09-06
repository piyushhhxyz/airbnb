import React from 'react';

function ExploreNearby() {
  const exploreData = [
    { img: "https://links.papareact.com/5j2", location: "London", distance: "45-minute drive" },
    { img: "https://links.papareact.com/1to", location: "Manchester", distance: "4.5-hour drive" },
    { img: "https://links.papareact.com/40m", location: "Liverpool", distance: "4.5-hour drive" },
    { img: "https://links.papareact.com/msp", location: "York", distance: "4-hour drive" },
    { img: "https://links.papareact.com/2k3", location: "Cardiff", distance: "45-minute drive" },
    { img: "https://links.papareact.com/ynx", location: "Birkenhead", distance: "4.5-hour drive" },
    { img: "https://links.papareact.com/kji", location: "Newquay", distance: "6-hour drive" },
    { img: "https://links.papareact.com/41m", location: "Hove", distance: "2-hour drive" },
  ];

  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exploreData?.map(({ img, distance, location }) => (
          <div key={img} className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
            <div className="relative h-16 w-16">
              <img src={img} alt={location} className="rounded-lg" />
            </div>
            <div>
              <h2>{location}</h2>
              <h3 className="text-gray-500">{distance}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExploreNearby;