"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/images/sleeps.webp";
import Super from "@/public/images/super.jpg";
import Easpa from "@/public/images/espa.webp";
import Revolute from "@/public/images/revolute.webp";
import Michael from "@/public/images/michael.webp";
import Dearest from "@/public/images/Dearest.webp";
import Riize from "@/public/images/riize.webp";
import Enhypen from "@/public/images/enhypen.webp";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CircleCheckBig } from "lucide-react";
import Footer from "@/components/Footer";
import { Flower, ChevronRight, BadgeHelp, Shield } from "lucide-react";

// Example product data
const products = [
  { id: '1', name: 'While She Sleeps - First Ever Indonesia Show', image: Logo, date: '07 Oct 2024', location: 'Jakarta', price: 'IDR 385,000' },
  { id: '2', name: '2024 SUPER JUNIOR SUPER SHOW SPIN-OFF : Halftime in JAKARTA', image: Super, date: '14 Sep 2024', location: 'Jakarta', price: 'IDR 1,785,000' },
  { id: '3', name: '2024 aespa Live Tour - SYNK: PARALLEL LINE in JAKARTA', image: Easpa, date: '24 Aug 2024', location: 'Jakarta', price: 'IDR 1,455,000' },
  { id: '4', name: '2024 Red Velvet FANCON TOUR HAPPINESS : My Dear, ReVe1uv in Jakarta', image: Revolute, date: '07 Sep 2024', location: 'Jakarta', price: 'IDR 1,785,000' },
  { id: '5', name: '2024 DOYOUNG CONCERT [ Dear Youth, ] in JAKARTA', image: Dearest, date: '21 Sep 2024', location: 'Jakarta', price: 'IDR 1,495,000' },
  { id: '6', name: "2024 RIIZE FAN-CON 'RIIZING DAY' in JAKARTA", image: Riize, date: '31 Aug 2024', location: 'Jakarta', price: 'IDR 1,955,000' },
  { id: '7', name: 'ENHYPEN WORLD TOUR “FATE PLUS” IN JAKARTA - SHOW DAY 1 (AUGUST 17)', image: Enhypen, date: '17 Aug 2024', location: 'Jakarta', price: 'IDR 1,450,000' },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    {
      id: 1,
      content: (
        <div className="flex flex-row items-center justify-center gap-4">
          <Flower className="ml-4 text-purple-600 w-8 h-8 border rounded-full bg-white p-1" />
          <div className="m-2">
            <p className="text-white text-sm">Lowest price guarantee</p>
            <p className="text-white text-sm">Found Cheaper ones...</p>
          </div>
          <ChevronRight className="text-orange-600 ml-3" />
        </div>
      ),
      backgroundColor: "bg-gradient-to-r from-orange-600 to-blue-600",
    },
    {
      id: 2,
      content: (
        <div className="flex flex-row items-center justify-center gap-4">
          <BadgeHelp className="ml-4 text-blue-600 w-8 h-8 border rounded-full bg-white p-1" />
          <div className="m-2">
            <p className="text-white text-sm">24/7 Customer Support</p>
            <p className="text-white text-sm">We're here to help you...</p>
          </div>
          <ChevronRight className="text-orange-600 ml-3" />
        </div>
      ),
      backgroundColor: "bg-gradient-to-r from-green-600 to-yellow-600",
    },
    {
      id: 3,
      content: (
        <div className="flex flex-row items-center justify-center gap-4">
          <Shield className="ml-4 text-red-600 w-8 h-8 border rounded-full bg-white p-1" />
          <div className="m-2">
            <p className="text-white text-sm">Fast & Secure Shipping</p>
            <p className="text-white text-sm">Get it delivered quickly...</p>
          </div>
          <ChevronRight className="text-orange-600 ml-3" />
        </div>
      ),
      backgroundColor: "bg-gradient-to-r from-purple-600 to-pink-600",
    },
    // Add more carousel items as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <main className="flex-1 flex flex-col mt-24">
      <div className="fixed bg-white w-full -mt-2 md:hidden">
        <div className="flex flex-row justify-between p-1 px-4 my-3">
          <button className="border border-black rounded-lg px-2">All</button>
          <button className="border border-black rounded-lg px-2">Seminars</button>
          <button className="border border-black rounded-lg px-2">Concerts</button>
          <button className="border border-black rounded-lg px-2">Sports</button>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative h-20 mt-14 md:w-56 w-full overflow-hidden">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out ${item.backgroundColor} ${
              currentIndex === index ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ transform: `translateX(${100 * (index - currentIndex)}%)` }}
          >
            {item.content}
          </div>
        ))}
      </div>
      {/* End of Carousel */}

      <section className="flex-1 grid grid-cols-1 lg:grid-cols-4 p-5 m-2 gap-5">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="bg-gray-300 hover:bg-gray-100 border rounded-md border-blue-900 flex flex-col items-center order-1 lg:-order-1 shadow-2xl cursor-pointer">
              <Image className="p-2" src={product.image} height={300} alt={product.name} />
              <div className="bg-gray-200 w-full px-3 p-1 text-sm flex flex-row text-center">
                <CircleCheckBig className="text-green-500 w-4 h-4 mt-1 mx-1" />
                <h1>Instant Confirmation</h1>
              </div>
              <div className="bg-white hover:bg-gray-100 w-full rounded-b-md">
                <h1 className="text-sm font-medium p-2 truncate">{product.name}</h1>
                <h1 className="text-sm text-gray-500 font-medium px-2">{product.date}</h1>
                <h1 className="text-sm text-gray-500 font-medium px-2">{product.location}</h1>
                <h1 className="text-lg text-red-500 font-medium px-2">{product.price}</h1>
                <h1 className="text-xs text-green-600 font-medium p-2">Available Now</h1>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
