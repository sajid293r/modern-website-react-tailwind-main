import React from "react";
import Banner from "../../assets/blog2.jpg";

const BannerDetails2 = ({ reverse, img }) => {
  return (
    <section>
      <main className="bg-slate-100 dark:bg-slate-900 dark:text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              } `}
            >
              <h1 className="text-2xl md:text-4xl ">
             Web Apps
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
              A web app is an application that runs in a web browser and is designed to provide functionality similar to a native desktop or mobile application. Unlike traditional websites, web apps are more interactive and dynamic, offering features that respond to user inputs and often mimic the experience of a standalone app.              </p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2  md:gap-4">
                  <li className="font-medium">
                  Accessible from anywhere with an internet connection.

                  </li>
                  <li className="font-medium">
                  Reduced dependency on device storage.
                  </li>
                  <li className="font-medium">Easy scalability for growing user bases.
                  </li>
                  <li className="font-medium">Single development process for all devices.
                  </li>


                </ul>
              </div>
             
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={reverse ? "order-1" : ""}
            >
              <img
                src={img}
                alt="No image"
                className="max-auto w-full hover:drop-shadow-md"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BannerDetails2;
