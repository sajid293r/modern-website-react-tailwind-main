import React, { useEffect } from "react";
import Img1 from "../../assets/blog1.jpg";
import Img2 from "../../assets/blog2.jpg";
import Img3 from "../../assets/blog3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
  return (
    <main data-aos="fade-up" data-aos-offset="200">
      <section className="container mb-10 py-8">
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
          Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">

<div
            id="card"
            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D12AQG0END6-UlXHw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1712066451638?e=2147483647&v=beta&t=bPK8ewGs_2mt40nCCz0he5IRIWNq65KUf8Z0-YTLFxo"
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              <p>April 24, 2022</p>
              <p className="line-clamp-1"> By Dilshad</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
              The Future of Mobile Apps: Trends to Watch in 2025              </h1>
              <p className="line-clamp-2">
                
Mobile apps are evolving faster than ever, with emerging technologies reshaping how we interact with our devices. From AI-driven personalization to augmented reality (AR) experiences, 2025 is set to redefine mobile app development. Expect more apps with integrated blockchain for secure transactions, advancements in voice and gesture controls, and the rise of super-apps combining multiple functionalities into one..
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img2}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              <p>Jan 3, 2023</p>
              <p className="line-clamp-1"> By Akshay</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
Web Apps vs. Native Apps: Which is Right for Your Business?
</h1>              <p className="line-clamp-2">
When planning to develop an app, one of the most crucial decisions is choosing between a web app and a native app. While native apps offer high performance and access to device-specific features, web apps are more cost-effective and accessible on any browser.              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src="https://d1krbhyfejrtpz.cloudfront.net/blog/wp-content/uploads/2024/02/13113850/Heart-Rate-Monitor-App-Development-Benefits-Features-Use-Cases-and-Development-Process--1024x497.jpg"
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              <p>April 24, 2024</p>
              <p className="line-clamp-1"> By Satya</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
              Why User Experience is the Heart of App Success              </h1>
              <p className="line-clamp-2">
              Building an app that trends is about more than just great features—it's about delivering a seamless user experience (UX). In today’s competitive market, users demand intuitive navigation, fast loading times, and visually appealing interfaces. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
