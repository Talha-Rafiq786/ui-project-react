import React, { useState } from "react";
import FeaturedCard from "./FeaturedCard";
import { ArrowRight, ArrowLeft } from "lucide-react";

const auctions = [
  {
    id: 1,
    image:
      "https://strapi-file-uploads.parkplus.io/5_BMW_M8_Coupe_284aed6741.webp",
    title: "1969 Chevrolet Camaro SS",
    bid: "$75,500",
    time: "2d 14h 22m",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1678533264047-a1d5c7a6be60?w=500",
    title: "Modern Villa in Beverly Hills",
    bid: "$12,250,000",
    time: "15d 8h 5m",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500",
    title: `"Ethereal Dreams" by Anya Petrova`,
    bid: "$12,000",
    time: "1d 4h 10m",
  },
  {
    id: 4,
    image:
      "https://plus.unsplash.com/premium_photo-1689609950069-2961f80b1e70?w=500",
    title: "2018 Caterpillar D6T Dozer",
    bid: "$180,000",
    time: "9h 30m",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGhvbWV8ZW58MHx8MHx8fDA%3D",
    title: "Another House",
    bid: "$220,000",
    time: "5h 10m",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1586206670130-4c6d8e646c9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRydWNrfGVufDB8fDB8fHww",
    title: "Luxury Villa",
    bid: "$380,000",
    time: "2d 1h",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJ1c3xlbnwwfHwwfHx8MA%3D%3D",
    title: "New Property",
    bid: "$150,000",
    time: "12h 20m",
  },
];

const FeaturedAuctions = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerRow = 4;

  const handleNext = () => {
    if (startIndex < auctions.length - cardsPerRow) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="mt-20">
      <h1 className="text-4xl font-bold">Featured Auctions</h1>

      <div className="flex justify-end items-center mr-16 gap-4 mt-2">
        <div
          onClick={handlePrev}
          className="bg-white shadow rounded-2xl cursor-pointer p-2"
        >
          <ArrowLeft />
        </div>
        <div
          onClick={handleNext}
          className="bg-white shadow rounded-2xl cursor-pointer p-2"
        >
          <ArrowRight />
        </div>
      </div>

      {/* Only show 4 cards using slice */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {auctions.slice(startIndex, startIndex + cardsPerRow).map((item) => (
          <FeaturedCard
            key={item.id}
            img={item.image}
            tital={item.title}
            price={item.bid}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedAuctions;
