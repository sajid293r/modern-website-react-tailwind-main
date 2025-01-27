import React from "react";
import BannerImg from "../../assets/marketing-speaker.png";

const Banner = () => {
  return (
    <main className="bg-primary ">
      <section data-aos="fade-up" className="container py-8 md:py-12">
        <div className="grid grid-cols-1 items-center gap-4 sm:text-ellipsis md:grid-cols-3 md:gap-8">
          <div className=" order-2 flex flex-col items-center gap-4 text-center text-white md:col-span-2  md:items-start md:text-left ">
            <h1 className="text-3xl font-bold ">Market your Brand</h1>
            <p className="">
            Creating a brand is an exciting journey! Here's a concept for a brand focused on building apps that trend, combining innovation and user-centric design.
            </p>
           
          </div>
          <div className="order-1">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/gRWMen27Uio?si=VtHMh9xCxQ6ccFh8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Banner;
